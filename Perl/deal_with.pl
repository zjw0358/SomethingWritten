

use strict;

my $source_file="simpleweixiao.txt";  #源文件名
my $dest_file="simpleweixiao_OK.txt"; #目标文件名
my @dest=();
my $one;
my $number= 1;

open(SOURCE_FILE,"<$source_file") or die;
while(<SOURCE_FILE>)
{

s/[\d]|[\.\,\%\*]//g;      # let them to be space'_' 
push(@dest,$_);

}
close(SOURCE_FILE);

open(DEST,">$dest_file") or die;

foreach $one (@dest){
unless($one=~/^\s$/)  #剔除空白行
{
print DEST "$number $one";
$number++;
}
}

close(DEST);
