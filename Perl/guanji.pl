

print"请输入关机时间（分）：\n";
$time=<STDIN>;
chomp($time);
if($time=~/\d+/)
{
$time=$time*60;
}
else{
print"输入有误\n";
exit;
}
system("shutdown -s -t $time");

