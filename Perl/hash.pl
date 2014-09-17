

$fm_name{"huangda"}=119;
$fm_name{"abc"}=110;

print $fm_name{"abc"},"\n";
print %fm_name,"\n";
print reverse %fm_name,"\n";

%new_one=(
'fred' =>120,
'book' =>113,
'time' =>898,
);

print "\nnew_one is \n",$new_one{'book'};
