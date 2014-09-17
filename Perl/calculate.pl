#!/usr/bin/perl -w

use strict;
my %team_name=(
'Spurs'=>93,'Grizzlies'=>131,'Mavericks'=>101,'Rockets'=>91,'Pelicans'=>79,

'Timberwolves'=>163,'Nuggets'=>93,'Blazers'=>83,'Thunder'=>90,'Jazz'=>63,

'Kings'=>60,'Suns'=>73,'Lakers'=>66,'Clippers'=>98,'Warriors'=>121,

'Heat'=>34,'Magic'=>33,'Hawks'=>62,'Wizards'=>100,'Bobcats'=>62,

'Celtics'=>71,'76ers'=>55,'Knicks'=>67,'Nets'=>58,'Raptors'=>107,

'Pistons'=>112,'Pacers'=>62,'Cavaliers'=>90,'Bulls'=>66,'Bucks'=>56,
);
my %team_city=(
'Spurs'=>122,'Grizzlies'=>83,'Mavericks'=>49,'Rockets'=>112,'Pelicans'=>126,

'Timberwolves'=>110,'Nuggets'=>68,'Blazers'=>100,'Thunder'=>133,'Jazz'=>50,

'Kings'=>109,'Suns'=>91,'Lakers'=>109,'Clippers'=>109,'Warriors'=>122,

'Heat'=>45,'Magic'=>79,'Hawks'=>69,'Wizards'=>130,'Bobcats'=>102,

'Celtics'=>85,'76ers'=>101,'Knicks'=>111,'Nets'=>112,'Raptors'=>117,

'Pistons'=>91,'Pacers'=>52,'Cavaliers'=>78,'Bulls'=>46,'Bucks'=>100,
);

#              (w/l ,s1, s2, name1, name2, time, location, t1, t2 )
my @nba_20131120_1=( '','' ,'' ,'Timberwolves','Wizards','201311200800',$team_city{'Wizards'},$team_name{'Timberwolves'},$team_name{'Wizards'});
my @nba_20131120_2=( '','' ,'' ,'Knicks','Pistons','201311200830',$team_city{'Pistons'},$team_name{'Knicks'},$team_name{'Pistons'});
my @nba_20131120_3=( '','' ,'' ,'Hawks','Heat','201311200830',$team_city{'Heat'},$team_name{'Hawks'},$team_name{'Heat'});
my @nba_20131120_4=( '','' ,'' ,'Celtics','Rockets','201311200900',$team_city{'Rockets'},$team_name{'Celtics'},$team_name{'Rockets'});
my @nba_20131120_5=( '','' ,'' ,'Suns','Kings','201311201100',$team_city{'Kings'},$team_name{'Suns'},$team_name{'Kings'});


my @nba_20131120_All=(@nba_20131120_1,@nba_20131120_2,@nba_20131120_3,@nba_20131120_4,@nba_20131120_5
);

my @nba_season=(@nba_20131120_All
);
my $nba_games = @nba_season;
$nba_games = $nba_games /9;
print "All $nba_games Games: \n";
################################################################################################################





################################################################################################################
my( 
$G_gua, $H_gua,$D_yao,
@G_each_yao,@H_each_yao,
$G_gua_new,$H_gua_new,
$D_yao_new,
$relation,$G_wuxing,$H_wuxing,
$result,
@match,
$gua_case,$yao_case , # for debug case 
$eq_wuxing_after,
$eq_wuxing_before,
);
$eq_wuxing_after=0;
$eq_wuxing_before=0;
################################################################################################################

$gua_case = 4;
$yao_case = 2;


################################################################################################################
sub alarm{
	for(my $ii=0;$ii<1;$ii++)
	{
	printf("\7");
	}
}
my %bagua=(
1=>'111',2=>'011',3=>'101',4=>'001',
5=>'110',6=>'010',7=>'100',8=>'000',
);

my %wuxing=(
'111'=>'金','011'=>'金','101'=>'火','001'=>'木',
'110'=>'木','010'=>'水','100'=>'土','000'=>'土',
);

my %shengke=(
# ke      ,xie      , hao      , fu 	
'金木'=>2,'金水'=>-1,'金火'=>-2,'金土'=>1,
'火金'=>2,'火土'=>-1,'火水'=>-2,'火木'=>1,
'木土'=>2,'木火'=>-1,'木金'=>-2,'木水'=>1,
'水火'=>2,'水木'=>-1,'水土'=>-2,'水金'=>1,
'土水'=>2,'土金'=>-1,'土木'=>-2,'土火'=>1,
'水水'=>0,'金金'=>0,'木木'=>0,'土土'=>0,'火火'=>0,
);


sub Gua{
	# time + location + team-name
my($tmp1,$tmp2,$tmp3) = @_;
if($gua_case == 1){
return ($tmp1+$tmp2+$tmp3)%8;}
elsif(($gua_case == 2)||($gua_case == 3)){
return ($tmp1+$tmp2)%8;
}elsif($gua_case == 4){
return ($tmp1)%8};
}

sub Yao{
my($tmp1,$tmp2,$tmp3,$tmp4) = @_;
if($yao_case == 1){
return ($tmp1+$tmp2+$tmp3+$tmp4)%6;}
elsif($yao_case == 2){
return ($tmp1+$tmp2)%6;}
elsif(($yao_case == 3)||($yao_case == 4)){
return ($tmp1)%6;}

}

################################################################################################################
#
#$nba_games = 1;
for(my $i=0;$i<$nba_games;$i++)
{
	my $j = $i +1;
	print "$j *****  $nba_season[$i*9+3] @ $nba_season[$i*9+4]:\n\n";
	# Guest
	if($gua_case == 1){
	$G_gua = &Gua($nba_season[$i*9+5] , $nba_season[$i*9+6] , $nba_season[$i*9+7]);}   #天时 + 地利 + 人和
	elsif($gua_case == 2){
	$G_gua = &Gua($nba_season[$i*9+5] , $nba_season[$i*9+7]);}   # 天时 + 人和
	elsif($gua_case == 3){
	$G_gua = &Gua($nba_season[$i*9+6] , $nba_season[$i*9+7]);}  # 地利 + 人和
	elsif($gua_case == 4){
	$G_gua = &Gua($nba_season[$i*9+7]);}	# 人和

	if ($G_gua==0) { $G_gua = 8;}
	print "客 ==> $G_gua ==> $bagua{$G_gua} ==> $wuxing{$bagua{$G_gua}}\n";
	@G_each_yao = split(//,$bagua{$G_gua});

	# Host
	if($gua_case == 1){
	$H_gua = &Gua($nba_season[$i*9+5] , $nba_season[$i*9+6] , $nba_season[$i*9+8]);}  #天时 + 地利 + 人和
	elsif($gua_case == 2){
	$H_gua = &Gua($nba_season[$i*9+5] , $nba_season[$i*9+8]);}   # 天时 + 人和
	elsif($gua_case == 3){
	$H_gua = &Gua($nba_season[$i*9+6] , $nba_season[$i*9+8]);}   # 地利 + 人和
	elsif($gua_case == 4){
	$H_gua = &Gua($nba_season[$i*9+8]);}   # 人和

	if ($H_gua==0) { $H_gua = 8;}
	print "主 ==> $H_gua ==> $bagua{$H_gua} ==> $wuxing{$bagua{$H_gua}} \n";
	@H_each_yao = split(//,$bagua{$H_gua});

	if($wuxing{$bagua{$G_gua}} eq $wuxing{$bagua{$H_gua}})
	{
		print"先天先天先天先天先天先天先天先天先天先天先天\n";
		$eq_wuxing_before++;
	}
	
	# Dong Yao
	if($yao_case == 1){
	$D_yao = &Yao($nba_season[$i*9+5] , $nba_season[$i*9+6] , $nba_season[$i*9+7] ,$nba_season[$i*9+8]);} #天时 + 地利 + 人和
	elsif($yao_case == 2){
	$D_yao = &Yao($nba_season[$i*9+5] , $nba_season[$i*9+6] );}   # 天时 + 地利
        elsif($yao_case == 3){
	$D_yao = &Yao($nba_season[$i*9+5] );} 	#天时
	elsif($yao_case == 4){
	$D_yao = &Yao($nba_season[$i*9+6] );}	#地利


	if($D_yao==0) { $D_yao = 6;}
	print "动 ==> $D_yao\n";

	# Change 
	if($D_yao < 4)
	{
	 # Host change
	 $D_yao = $D_yao - 1 ;
	 if($D_yao==0){ $D_yao_new = 2;}
	 if($D_yao==1){ $D_yao_new = 1;}
	 if($D_yao==2){ $D_yao_new = 0;}

 	 if($H_each_yao[$D_yao_new] == 0){
	 $H_each_yao[$D_yao_new] = 1;
	 }else{
	 $H_each_yao[$D_yao_new] = 0;
	 }
	 
	  $G_gua_new = join('',@G_each_yao);
	  $H_gua_new = join('',@H_each_yao);

	  print"客   ==> $G_gua_new ==> $wuxing{$G_gua_new}\n";
	  print"主变 ==> $H_gua_new ==> $wuxing{$H_gua_new}\t";
	  $G_wuxing = $wuxing{$G_gua_new};
	  $H_wuxing = $wuxing{$H_gua_new};

	  $relation = $G_wuxing.$H_wuxing;
          if($G_wuxing eq $H_wuxing){
#	  print"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!$relation \n";
	  print"后天后天后天后天后天后天后天后天后天\n";
	  $eq_wuxing_after++;
  	 }
	  
	}else{
	 # Guest change
	  $D_yao = $D_yao - 4 ;
	 if($D_yao==0){ $D_yao_new = 2;}
	 if($D_yao==1){ $D_yao_new = 1;}
	 if($D_yao==2){ $D_yao_new = 0;}

 	  if($G_each_yao[$D_yao_new] == 0){
	  $G_each_yao[$D_yao_new] = 1;
	  }else{
	  $G_each_yao[$D_yao_new] = 0;
	  }

	  $G_gua_new = join('',@G_each_yao);
	  $H_gua_new = join('',@H_each_yao);

	  print"客变 ==> $G_gua_new ==> $wuxing{$G_gua_new}\n";
	  print"主   ==> $H_gua_new ==> $wuxing{$H_gua_new}\t";
	  $G_wuxing = $wuxing{$G_gua_new};
	  $H_wuxing = $wuxing{$H_gua_new};

	  $relation = $G_wuxing.$H_wuxing;
	  if($G_wuxing eq $H_wuxing){
#	  print"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!$relation \n";
	  print"后天后天后天后天后天后天后天后天后天后天后天\n";
	   $eq_wuxing_after++;
 	  }
	}

	if($shengke{$relation} > 0){
	$result = 1 ; # Guest win
	push(@match,1);
	}else{
	$result = 0 ; # Host win
	push(@match,0);
	}

	print"\n-------------------\n";
}
print "先天 $eq_wuxing_before\n";
print "后天 $eq_wuxing_after\n";

	for(my $tt=0;$tt<@match;$tt++)
	{
	printf("(%d)\t",$tt+1);	
	print "$match[$tt]\n";
	}



