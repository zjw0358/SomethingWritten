use strict;
my @teams =(
'Spurs','Grizzlies','Mavericks','Rockets','Pelicans',

'Timberwolves','Nuggets','Blazers','Thunder','Jazz',

'Kings','Suns','Lakers','Clippers','Warriors',

'Heat','Magic','Hawks','Wizards','Bobcats',

'Celtics','76ers','Knicks','Nets','Raptors',

'Pistons','Pacers','Cavaliers','Bulls','Bucks',
);

my %maps=(
'a'=>1,'b'=>2,'c'=>3,'d'=>4,'e'=>5,
'f'=>6,'g'=>7,'h'=>8,'i'=>9,'j'=>10,
'k'=>11,'l'=>12,'m'=>13,'n'=>14,'o'=>15,
'p'=>16,'q'=>17,'r'=>18,'s'=>19,'t'=>20,
'u'=>21,'v'=>22,'w'=>23,'x'=>24,'y'=>25,
'z'=>26,
);
my $sumary = 0;

#print "Plz input character:\n";

#$input=<STDIN>;
#chomp($input);
my @character=();
my @team_data=();
my $tmp;

for(my $i=0;$i<2;$i++){
@character = split(//,$teams[$i]);
print @character;
 for(my $j=0;$j<@character;$i++){
#print "$single <==> $maps{$single}\n";
$sumary = $sumary + $maps{$character[$j]};
}
 push(@team_data,$sumary);
 print"get one\n";
}

foreach $tmp (@team_data){
print "$tmp\t";
}


