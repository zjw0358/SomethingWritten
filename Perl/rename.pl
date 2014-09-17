

$dir = "D:\\hd\\Perl\\number\\";

$x = 0;
opendir DIR,$dir or die;
@file_list = readdir DIR;
foreach(@file_list){
	#print $_,"\n";
	if(/\bbmp$/){
		$x = $x+1;
	print $_,"\n";
	@list = split(/\./,$_);
	
	}
}
closedir DIR;

foreach (@list){
	print $_,"\n";
}

