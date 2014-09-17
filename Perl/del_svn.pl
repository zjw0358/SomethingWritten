
use File::Find;


$dir_9630 = "D:\\50_12864_FTE2\\MTK6250_12864_FTE2_11B_V2\\";
$count = 0;

find(\&del_svn,$dir_9630);
print "Total svn directory is ",$count,"\n";

sub del_svn
{

if(-d $File::Find::name)
{
	if($_ eq ".svn")
	{
	system("rmdir /q/s $_");
	$count++;
	print $count,"\n";
	}

}

}





