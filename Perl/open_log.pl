

use File::Find;
use strict;


my $path_root ="D:\\Proj\\MTK52C\\";
my $path_1 = "build\\BJX_5211B\\log\\";

my $file_name = ($ARGV[0]).".log";

print $file_name,"\n";

chdir($path_root.$path_1);

if(-e $file_name)
{
    print"Searching log file...\n";}
else{
    print"Error log file Not Found!\n";
    exit(0);
}


system("c:\\windows\\system32\\notepad.exe",$path_root.$path_1.$file_name);

