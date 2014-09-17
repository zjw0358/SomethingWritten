

use strict;
my $count=0;

open(FILE_HANDLE,"url_list.txt") or die;
open(Dest_FILE,">url_sorted_list.txt") or die;
while(<FILE_HANDLE>)
{
   if(/^http/i)
   {
     print Dest_FILE "$_";
     $count++;
   }
}

close(FILE_HANDLE);
close(Dest_FILE);
print "Real link is $count";
