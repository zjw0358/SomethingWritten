

sub timer{
$sec=10;	
while($sec)
{
$sec=$sec -1;
print"Timer_1 go\n";
sleep(1);
}
print"\n Timer 1 finished!\n";
}

sub timer2{
$sec2=5;	
while($sec2)
{
$sec2=$sec2 -1;
print"Timer_2 go\n";
sleep(1);
}
print"\nTimer 2 finished!\n";
}

$pid=fork();
if($pid)
{
print"Parent here\n";
timer();
}else{
	print"Children here\n";
	timer2();
}
