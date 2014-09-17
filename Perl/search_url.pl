
use encoding 'gbk',Filter=>1;
use FILE::Find;
$source="baidu.txt";
open(FILE,"<$source") or die;
$count=0;
$failed=0;
$bytes=sysread(FILE,$content,-s $source);
print "$content\n";

=cut
while($content)
{
if(/href=/i)
{
$count++;
}else
{
#print"failed\n";
$failed++;
}
}
=cut

print "$count \n";
print "$failed \n";
close(FILE);
