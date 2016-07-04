use strict;
use File::Find;
use Cwd;
my (    $dir_root,
    $dest_root,
    $c_count,    
    $h_count,
    $d_count,
    $f_count,
    $mak_count,
    $file_name,
    $path,
    $dest_file,
    $src_file,
   );
my $debug_flag= 0;          # 0 É¾³ý 1 ½âÃÜ
$dir_root="D:\\Old_proj\\6252_11B_6432\\6252_11B_6432\\";

$c_count=0;
$h_count=0;
$d_count=0;
$f_count=0;

my ($t1,$t2,$sec,$min);
$t1=time();

sub dir{
if ($File::Find::name)
{
    $f_count++;
  if(/(.*)(\.cx$)/i)
  {
if($debug_flag==0)	
{
      system("del /q/s $_");
}else{      
	  
    $path=getcwd;
    $src_file=$path."/".$_;
    $file_name=$1;
    $dest_file=$path."/".$file_name.".c";


    $c_count++;
#    print "SRC FILE is -----",$src_file,"\n";
#    print "DEST FILE is ====",$dest_file,"\n";
    &get_src($src_file,$dest_file);
    }
  }
   elsif(/(.*)(\.hx$)/i)
  {
if($debug_flag==0)
{
	  system("del /q/s $_");
}else{
 
    $path=getcwd;
    $src_file=$path."/".$_;
    $file_name=$1;
    $dest_file=$path."/".$file_name.".h";

    $h_count++;
#    print "SRC FILE is -----",$src_file,"\n";
#    print "DEST FILE is ====",$dest_file,"\n";
    &get_src($src_file,$dest_file);    
}
  }
  elsif(/(.*)(\.mx$)/i)
  {
	  if($debug_flag==0)
	  {
	   system("del /q/s $_");
   }else{

    $path=getcwd;
    $src_file=$path."/".$_;
    $file_name=$1;
    $dest_file=$path."/".$file_name.".mak";
   
    $mak_count++;
#    print "SRC FILE is -----",$src_file,"\n";
#    print "DEST FILE is ====",$dest_file,"\n";
    &get_src($src_file,$dest_file); 
}
  }
}
}
find(\&dir,$dir_root);
print $f_count,"\n",$c_count,"\n",$h_count,"\n",$mak_count;
        $t2=time();
        $sec=$t2-$t1;
        $min=($sec/60);
        printf("\n%10.5d Ãë\n",$sec);
        printf("\n%10.5d ·Ö\n",$min);


sub get_src{

my($src,$dest)=@_;

open(FILE,$src) or die("Error in open src file");
open(DEST,">".$dest) or die("Error in open dest file");

while(<FILE>)
{
print DEST $_;
}
close(FILE);
close(DEST);

}
