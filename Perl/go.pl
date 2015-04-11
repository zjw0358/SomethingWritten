#	@author huangda
# 2015.3.18
# let's have a rest

use strict;
use Switch;
use File::Find;


my($choice,
	$proj,
	$cmd_new,
	$cmd_r,
	$cmd_resgen,
	$cmd_gen_modis,
	$cmd_codegen_modis,
	$cmd_copy,
	$input,
	$start_time,
	$end_time,
	$total_time,
	$CMD,
	$FILE_LOG,
	$proj_name4db,	
);


print"Plz choose the Project:\n";
print"1.F240_CARE\n";
print"2.Z116_J510\n";

$choice = <STDIN>;
chomp($choice);
if($choice == 1){
   $proj="F240_CARE";
   $proj_name4db = "F240-CARE";
}elsif($choice ==2){
   $proj="Z116_J510";
   $proj_name4db = "Z116-J510";
}else{
exit(0);
}

my $db_file = "BPLGUInfoCustomAppSrcP_MT6261_S00_$proj_name4db";
my $db_file_d="tst\\database_classb\\";
my $db_file_name;



$FILE_LOG="e:\\Compile_log.txt";
$cmd_new="make $proj gprs new";
$cmd_r="make $proj gprs r";
$cmd_resgen="make $proj gprs resgen";
$cmd_gen_modis="make gen_modis";
$cmd_codegen_modis="make codegen_modis";
$cmd_copy = "copy /y pbp.zi tools\\pbp.exe";
print "please input:\n";
print "1.new\n";
print "2.remake\n";
print "3.resgen\n";
print "4.modis\n";

$input=<STDIN>;
chomp($input);
$start_time=time();
switch($input){
   case 0 {exit}
   case 1 {
	system($cmd_copy);
	system($cmd_new);
	{
	print"恭喜!完成!\n";
	$end_time=time();
	$total_time=$end_time-$start_time;
	$total_time=($total_time/60);
	print"共花费\n";
	print "$total_time\n";
	print"分!\n";
	$CMD="New";
	&copy_db;
	&write_record;
	}	
	next}
   case 2 {
	$start_time=time();
	system($cmd_copy);
	if(0==system($cmd_r))
	{
	print"恭喜!完成!\n";
	$end_time=time();
	$total_time=$end_time-$start_time;
	$total_time=($total_time/60);
	print"共花费\n";
	print "$total_time\n";
	print"分!\n";
	$CMD="Remake";
	&write_record;
	}
	next}
   case 3 {
	if(0==system($cmd_resgen))
	{
	print"恭喜!完成!\n";
	$end_time=time();
	$total_time=$end_time-$start_time;
	$total_time=($total_time/60);
	print"共花费\n";
	print "$total_time\n";
	print"分!\n";
	$CMD="Resgen";
	&write_record;
	}
	next}
   case 4 {
	if(0==system($cmd_gen_modis))
	{
	if(0==system($cmd_codegen_modis))
	{	
	print"恭喜!完成!\n";
	$end_time=time();
	$total_time=$end_time-$start_time;
	$total_time=($total_time/60);
	print"共花费\n";
	print "$total_time\n";
	print"分!\n";
	$CMD="Modis";
	&write_record;
	}
	}
	next}

}



sub copy_db{
my $cmd_DB_d="mkdir build\\$proj\\DB";
my $DB_d="build\\$proj\\DB";
my $del_db="del /s/q $DB_d";

	if (-e $DB_d)
	{
	 system($del_db);	
	}
	else
	{
	system($cmd_DB_d);
	}
	find(\&find_db,$db_file_d);

	system("copy $db_file_d $DB_d");
}

sub find_db{
	if(/^$db_file/)
	{
	$db_file_name = $_;
	$db_file_d=$db_file_d.$db_file_name;
	print"$db_file_d\n";
	}
}

sub write_record{
my($sec,$min,$hour,$day,$mon,$year) = localtime();
$mon++;
$year += 1900;
my $time_now = sprintf("%04d-%02d-%02d %02d:%02d:%02d",$year,$mon,$day,$hour,$min,$sec);

my @Record=($time_now,$total_time,$CMD);

open(FILE,">>$FILE_LOG") or die"open log file failed!";
print FILE "\n";
foreach (@Record){
print FILE "$_		";
}
close FILE;
}
