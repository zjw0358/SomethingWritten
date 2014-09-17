print "请输入定时器时间（分钟）：\n";

$time = <STDIN>;
if(!($time=~/\d+/)) #代码要健壮，这种判断不能少
{
    print"输入错误\n";
    exit();
}
chomp($time);

$time2sleep = $time *60;
if($time2sleep==0) #防止输入 ww2，这样的字符。还有更好的匹配检查方式吗？
{
    print"输入错误\n";
    exit();
}
while($time2sleep)
{
sleep(1);
print("定时器剩余 $time2sleep 秒\n");
$time2sleep--;
}
for($i=0;$i<10;$i++)
{
printf("\7");
}
print("定时器结束\n");

