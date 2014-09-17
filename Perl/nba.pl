#!/usr/bin/perl -w

use strict;

my @Year=(
'子=>1','丑=>2','寅=>3','卯=>4','辰=>5','巳=>6',
'午=>7','未=>8','申=>9','酉=>10','戍=>11','亥=>12',
);
foreach my $year(@Year){
print "$year\t";
}
print"\n\n";
#=============================================
my @bagua=(
'乾=>1','兑=>2','离=>3','震=>4',
'巽=>5','坎=>6','艮=>7','坤=>8',
);

foreach my $gua(@bagua){
print "$gua\t";
}
print"\n\n";
#=============================================
my(@SouthWest,@NorthWest,@Pacific,
   @SouthEast,@Atlantic,@Middle,
);

my $team_name;

@SouthWest=(
'Spurs','Grizzlies','Mavericks','Rockets','Pelicans',
);

@NorthWest=(
'Timberwolves','Nuggets','Trail Blazers','Thunder','Jazz'
);

@Pacific=(
'Kings','Suns','Lakers','Clippers','Warriors',
);

@SouthEast=(
'Heat','Magic','Hawks','Wizards','Bobcats',
);

@Atlantic=(
'Celtics','76ers','Knicks','Nets','Raptors',
);

@Middle=(
'Pistons','Pacers','Cavaliers','Bulls','Bucks',
);

#=====================================
=comment
@SouthWest=(
'Spurs','Grizzlies','Mavericks','Rockets','Pelicans',
);

@NorthWest=(
'Timberwolves','Nuggets','Trail Blazers','Thunder','Jazz'
);

@Pacific=(
'Kings','Suns','Lakers','Clippers','Warriors',
);

@SouthEast=(
'Heat','Magic','Hawks','Wizards','Bobcats',
);

@Atlantic=(
'Celtics','76ers','Knicks','Nets','Toronto Raptors',
);

@Middle=(
'Pistons','Pacers','Cavaliers','Bulls','Bucks',
);
=cut
#=====================================

#my @All_team=(@SouthWest,@NorthWest,@Pacific,
#   @SouthEast,@Atlantic,@Middle );
print"西南区\t";
foreach $team_name (@SouthWest){	
print "$team_name\t";
}
print"\n\n";
print"西北区\t";
foreach $team_name (@NorthWest){	
print "$team_name\t";
}
print"\n\n";
print"太平洋区\t";
foreach $team_name (@Pacific){	
print "$team_name\t";
}
print"\n\n";
print"东南区\t";
foreach $team_name (@SouthEast){	
print "$team_name\t";
}
print"\n\n";
print"大西洋区\t";
foreach $team_name (@Atlantic){	
print "$team_name\t";
}
print"\n\n";
print"中部区\t";
foreach $team_name (@Middle){	
print "$team_name\t";
}
print"\n";
