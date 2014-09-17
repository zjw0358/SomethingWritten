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
my @nba_20131109_1=(1,101,91,'Knicks','Bobcats','201311090800',$team_city{'Bobcats'},$team_name{'Knicks'},$team_name{'Bobcats'});
my @nba_20131109_2=(0,84,91,'Raptors','Pacers','201311090800',$team_city{'Pacers'},$team_name{'Raptors'},$team_name{'Pacers'});
my @nba_20131109_3=(1,91,89,'Celtics','Magic','201311090800',$team_city{'Magic'},$team_name{'Celtics'},$team_name{'Magic'});
my @nba_20131109_4=(0,79,94,'Cavaliers','76ers','201311090800',$team_city{'76ers'},$team_name{'Cavaliers'},$team_name{'76ers'});
my @nba_20131109_5=(0,108,112,'Nets','Wizards','201311090800',$team_city{'Wizards'},$team_name{'Nets'},$team_name{'Wizards'});
my @nba_20131109_6=(1,119,110,'Thunder','Pistons','201311090830',$team_city{'Pistons'},$team_name{'Thunder'},$team_name{'Pistons'});
my @nba_20131109_7=(0,73,97,'Jazz','Bulls','201311090900',$team_city{'Bulls'},$team_name{'Jazz'},$team_name{'Bulls'});
my @nba_20131109_8=(0,108,116,'Mavericks','Timberwolves','201311090900',$team_city{'Timberwolves'},$team_name{'Mavericks'},$team_name{'Timberwolves'});
my @nba_20131109_9=(0,85,96,'Lakers','Pelicans','201311090900',$team_city{'Pelicans'},$team_name{'Lakers'},$team_name{'Pelicans'});
my @nba_20131109_10=(0,74,76,'Warriors','Spurs','201311090930',$team_city{'Spurs'},$team_name{'Warriors'},$team_name{'Spurs'});
my @nba_20131109_11=(0,103,114,'Nuggets','Suns','201311091000',$team_city{'Suns'},$team_name{'Nuggets'},$team_name{'Suns'});
my @nba_20131109_12=(0,91,104,'Kings','Blazers','201311091100',$team_city{'Blazers'},$team_name{'Kings'},$team_name{'Blazers'});
my @nba_20131109_All=( @nba_20131109_1, @nba_20131109_2, @nba_20131109_3, @nba_20131109_4, @nba_20131109_5, @nba_20131109_6,
	 @nba_20131109_7, @nba_20131109_8, @nba_20131109_9, @nba_20131109_10, @nba_20131109_11, @nba_20131109_12,
);

my @nba_20131110_1=(0,91,115,'jazz','raptors','201311100800',$team_city{'Raptors'},$team_name{'Jazz'},$team_name{'Raptors'});
my @nba_20131110_2=(0,94,104,'Magic','Hawks','201311100830',$team_city{'Hawks'},$team_name{'Magic'},$team_name{'Hawks'});
my @nba_20131110_3=(1,96,91,'Pacers','Nets','201311100830',$team_city{'Nets'},$team_name{'Pacers'},$team_name{'Nets'});
my @nba_20131110_4=(0,125,127,'76ers','Cavaliers','201311100830',$team_city{'Cavaliers'},$team_name{'76ers'},$team_name{'Cavaliers'});
my @nba_20131110_5=(1,111,110,'Celtics','Heat','201311100830',$team_city{'Heat'},$team_name{'Celtics'},$team_name{'Heat'});
my @nba_20131110_6=(1,107,94,'Clippers','Rockets','201311100900',$team_city{'Rockets'},$team_name{'Clippers'},$team_name{'Rockets'});
my @nba_20131110_7=(0,90,108,'Warriors','Grizzlies','201311100900',$team_city{'Grizzlies'},$team_name{'Warriors'},$team_name{'Grizzlies'});
my @nba_20131110_8=(1,91,83,'Mavericks','Bucks','201311100930',$team_city{'Bucks'},$team_name{'Mavericks'},$team_name{'Bucks'});
my @nba_20131110_9=(1,96,85,'Blazers','Kings','201311101100',$team_city{'Kings'},$team_name{'Blazers'},$team_name{'Kings'});
my @nba_20131110_All=(@nba_20131110_1,@nba_20131110_2,@nba_20131110_3,@nba_20131110_4,
	@nba_20131110_5,@nba_20131110_6,@nba_20131110_7,@nba_20131110_8,@nba_20131110_9,
);

my @nba_20131111_1=(1,120,89,'spurs','knicks','201311110100',$team_city{'Knicks'},'93','67');
my @nba_20131111_2=(0,105,106,'wizards','thunder','201311110800',$team_city{'Thunder'},'100','90');
my @nba_20131111_3=(0,94,101,'pelicans','suns','201311110900',$team_city{'Suns'},'79','73');
my @nba_20131111_4=(1,113,90,'timberwolves','lakers','201311111030',$team_city{'Lakers'},'163','66');
my @nba_20131111_All=(@nba_20131111_1,@nba_20131111_2,@nba_20131111_3,@nba_20131111_4,
);

my @nba_20131112_1=(1,103,94,'hawks','bobcats','201311120800','102','62','62');
my @nba_20131112_2=(0,79,95,'grizzlies','pacers','201311120800','52','131','62');
my @nba_20131112_3=(1,109,85,'spurs','76ers','201311120800','101','93','55');
my @nba_20131112_4=(0,105,120,'magic','celtics','201311120830','85','33','71');
my @nba_20131112_5=(0,81,96,'cavaliers','bulls','201311120900','46','90','66');
my @nba_20131112_6=(0,104,110,'raptors','rockets','201311120900','112','107','91');
my @nba_20131112_7=(1,100,81,'nuggets','jazz','201311121000','50','93','63');
my @nba_20131112_8=(0,103,109,'pistons','trail blazers','201311121100','100','112','143');
my @nba_20131112_9=(0,107,109,'timberwolves','clippers','201311121130','109','163','98');
my @nba_20131112_All=(@nba_20131112_1,@nba_20131112_2,@nba_20131112_3,@nba_20131112_4,
	@nba_20131112_5,@nba_20131112_6,@nba_20131112_7,@nba_20131112_8,@nba_20131112_9,
);

my @nba_20131113_1=(0,95,118,'bucks','heat','201311130830','45','56','34');
my @nba_20131113_2=(0,95,105,'wizards','mavericks','201311130930','49','100','101');
my @nba_20131113_3=(0,95,113,'pistons','warriors','201311131130','122','112','121');
my @nba_20131113_4=(0,95,116,'pelicans','lakers','201311131130','109','79','66');
my @nba_20131113_All=(@nba_20131113_1,@nba_20131113_2,@nba_20131113_3,@nba_20131113_4,
);


my @nba_20131114_1=(0,91,94,'Bucks','Magic','201311140800',$team_city{'Magic'},$team_name{'Bucks'},$team_name{'Magic'});
my @nba_20131114_2=(0,117,123,'Rockets','76ers','201311140800',$team_city{'76ers'},$team_name{'Rockets'},$team_name{'76ers'});
my @nba_20131114_3=(1,89,83,'Bobcats','Celtics','201311140830',$team_city{'Celtics'},$team_name{'Bobcats'},$team_name{'Celtics'});
my @nba_20131114_4=(1,103,87,'Raptors','Grizzlies','201311140900',$team_city{'Grizzlies'},$team_name{'Raptors'},$team_name{'Grizzlies'});
my @nba_20131114_5=(0,95,124,'Cavaliers','Timberwolves','201311140900',$team_city{'Timberwolves'},$team_name{'Cavaliers'},$team_name{'Timberwolves'});
my @nba_20131114_6=(1,95,91,'Knicks','Hawks','201311140900',$team_city{'Hawks'},$team_name{'Knicks'},$team_name{'Hawks'});
my @nba_20131114_7=(0,79,92,'Wizards','Spurs','201311140930',$team_city{'Spurs'},$team_name{'Wizards'},$team_name{'Spurs'});
my @nba_20131114_8=(0,99,111,'Lakers','Nuggets','201311141000',$team_city{'Nuggets'},$team_name{'Lakers'},$team_name{'Nuggets'});
my @nba_20131114_9=(0,105,111,'Pelicans','Jazz','201311141000',$team_city{'Jazz'},$team_name{'Pelicans'},$team_name{'Jazz'});
my @nba_20131114_10=(0,89,90,'Suns','Blazers','201311141100',$team_city{'Blazers'},$team_name{'Suns'},$team_name{'Blazers'});
my @nba_20131114_11=(0,96,107,'Nets','Kings','201311141100',$team_city{'Kings'},$team_name{'Nets'},$team_name{'Kings'});
my @nba_20131114_12=(0,103,111,'Thunder','Clippers','201311141130',$team_city{'Clippers'},$team_name{'Thunder'},$team_name{'Clippers'});
my @nba_20131114_All=(@nba_20131114_1,@nba_20131114_2,@nba_20131114_3,@nba_20131114_4,@nba_20131114_5,@nba_20131114_6,@nba_20131114_7,@nba_20131114_8,@nba_20131114_9,@nba_20131114_10,@nba_20131114_11,@nba_20131114_12,
);

my @nba_20131115_1=(1,109,106,'Rockets','Knicks','201311150900',$team_city{'Knicks'},$team_name{'Rockets'},$team_name{'Knicks'});
my @nba_20131115_2=(0,115,116,'Thunder','Warriors','201311151130',$team_city{'Warriors'},$team_name{'Thunder'},$team_name{'Warriors'});
my @nba_20131115_All=(@nba_20131115_1,@nba_20131115_2
);

my @nba_20131116_1=( 1,96,80 ,'Bulls','Raptors','201311160800',$team_city{'Raptors'},$team_name{'Bulls'},$team_name{'Raptors'});
my @nba_20131116_2=( 0,103 ,113 ,'76ers','Hawks','201311160830',$team_city{'Hawks'},$team_name{'76ers'},$team_name{'Hawks'});
my @nba_20131116_3=( 1,109 ,96 ,'Blazers','Celtics','201311160830',$team_city{'Celtics'},$team_name{'Blazers'},$team_name{'Celtics'});
my @nba_20131116_4=( 1,86 ,80 ,'Bobcats','Cavaliers','201311160830',$team_city{'Cavaliers'},$team_name{'Bobcats'},$team_name{'Cavaliers'});
my @nba_20131116_5=( 0,104 ,110 ,'Mavericks','Heat','201311160830',$team_city{'Heat'},$team_name{'Mavericks'},$team_name{'Heat'});
my @nba_20131116_6=( 0,113 ,117 ,'Timberwolves','Nuggets','201311160900',$team_city{'Nuggets'},$team_name{'Timberwolves'},$team_name{'Nuggets'});
my @nba_20131116_7=( 1,100 ,98 ,'Nets','Suns','201311161000',$team_city{'Suns'},$team_name{'Nets'},$team_name{'Suns'});
my @nba_20131116_8=( 1,89 ,86 ,'Grizzlies','Lakers','201311161130',$team_city{'Lakers'},$team_name{'Grizzlies'},$team_name{'Lakers'});
my @nba_20131116_9=( 1,97 ,90,'Pistons','Kings','201311161130',$team_city{'Kings'},$team_name{'Pistons'},$team_name{'Kings'});
my @nba_20131116_10=( 0,77 ,104 ,'Bucks','Pacers','201311160800',$team_city{'Pacers'},$team_name{'Bucks'},$team_name{'Pacers'});
my @nba_20131116_11=( 1,91 ,82 ,'Spurs','Jazz','201311161000',$team_city{'Jazz'},$team_name{'Spurs'},$team_name{'Jazz'});
my @nba_20131116_All=(@nba_20131116_1,@nba_20131116_2,@nba_20131116_3,@nba_20131116_4,@nba_20131116_5,@nba_20131116_6,@nba_20131116_7,@nba_20131116_8,@nba_20131116_9,@nba_20131116_10,@nba_20131116_11
);

my @nba_20131117_1=( 1,97 ,81 ,'Heat','Bobcats','201311170800',$team_city{'Bobcats'},$team_name{'Heat'},$team_name{'Bobcats'});
my @nba_20131117_2=( 0,108,100 ,'Mavericks','Magic','201311170800',$team_city{'Magic'},$team_name{'Mavericks'},$team_name{'Magic'});
my @nba_20131117_3=( 1,103,96 ,'Cavaliers','Wizards','201311170800',$team_city{'Wizards'},$team_name{'Cavaliers'},$team_name{'Wizards'});
my @nba_20131117_4=( 1,110,90 ,'Hawks','Knicks','201311170830',$team_city{'Knicks'},$team_name{'Hawks'},$team_name{'Knicks'});
my @nba_20131117_5=( 0,94,110 ,'Pacers','Bulls','201311170900',$team_city{'Bulls'},$team_name{'Pacers'},$team_name{'Bulls'});
my @nba_20131117_6=( 0,111,122,'Nuggets','Rockets','201311170900',$team_city{'Rockets'},$team_name{'Nuggets'},$team_name{'Rockets'});
my @nba_20131117_7=( 0,88,106,'Celtics','Timberwolves','201311170900',$team_city{'Timberwolves'},$team_name{'Celtics'},$team_name{'Timberwolves'});
my @nba_20131117_8=( 0,98,135 ,'76ers','Pelicans','201311170900',$team_city{'Pelicans'},$team_name{'76ers'},$team_name{'Pelicans'});
my @nba_20131117_9=( 1,92,79,'Thunder','Bucks','201311170930',$team_city{'Bucks'},$team_name{'Thunder'},$team_name{'Bucks'});
my @nba_20131117_10=( 0,88,102,'Jazz','Warriors','201311171130',$team_city{'Warriors'},$team_name{'Jazz'},$team_name{'Warriors'});
my @nba_20131117_11=( 0,103,110,'Nets','Clippers','201311171130',$team_city{'Clippers'},$team_name{'Nets'},$team_name{'Clippers'});
my @nba_20131117_All=(@nba_20131117_1,@nba_20131117_2,@nba_20131117_3,@nba_20131117_4,@nba_20131117_5,@nba_20131117_6,@nba_20131117_7,@nba_20131117_8,@nba_20131117_9,@nba_20131117_10,@nba_20131117_11);

my @nba_20131118_1=(1,118,110,'Blazers','Raptors','201311180200',$team_city{'Raptors'},$team_name{'Blazers'},$team_name{'Raptors'});
my @nba_20131118_2=(1,97,86,'Grizzlies','Kings','201311180700',$team_city{'Kings'},$team_name{'Grizzlies'},$team_name{'Kings'});
my @nba_20131118_3=(0,99,114,'Pistons','Lakers','201311181030',$team_city{'Lakers'},$team_name{'Pistons'},$team_name{'Lakers'});
my @nba_20131118_All=(@nba_20131118_1,@nba_20131118_2,@nba_20131118_3
);

my @nba_20131119_1=( 0,113 ,115 ,'Nuggets','Thunder','201311190900',$team_city{'Thunder'},$team_name{'Nuggets'},$team_name{'Thunder'});
my @nba_20131119_2=( 0,94 ,97 ,'76ers','Mavericks','201311190930',$team_city{'Mavericks'},$team_name{'76ers'},$team_name{'Mavericks'});
my @nba_20131119_3=( 1,98 ,87 ,'Warriors','Jazz','201311191000',$team_city{'Jazz'},$team_name{'Warriors'},$team_name{'Jazz'});
my @nba_20131119_4=( 1,106 ,102 ,'Grizzlies','Clippers','201311191130',$team_city{'Clippers'},$team_name{'Grizzlies'},$team_name{'Clippers'});
my @nba_20131119_5=( 1,108 ,98 ,'Blazers','Nets','201311190830',$team_city{'Nets'},$team_name{'Blazers'},$team_name{'Nets'});
my @nba_20131119_6=( 0,81 ,86 ,'Bobcats','Bulls','201311190900',$team_city{'Bulls'},$team_name{'Bobcats'},$team_name{'Bulls'});


my @nba_20131119_All=(@nba_20131119_1,@nba_20131119_2,@nba_20131119_3,@nba_20131119_4,@nba_20131119_5,@nba_20131119_6,
);
#===================================

my @nba_season=( @nba_20131109_All,@nba_20131110_All,@nba_20131111_All, @nba_20131112_All,@nba_20131113_All,@nba_20131114_All,@nba_20131115_All,@nba_20131116_All,@nba_20131117_All,@nba_20131118_All,@nba_20131119_All
);
#my @nba_season = @nba_20131118_All;

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
$eq_wuxing_after,$eq_wuxing_before,
@relation,
);
$eq_wuxing_after=0;
$eq_wuxing_before=0;
@relation=();
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
		print"先天先天先天先天先天先天先天先天先天先天先天先天先天先天先天先天先天先天先天先天先天先天先天先天先天先天先天先天\n";
		$eq_wuxing_before++;
	}
	print" relation Before is $shengke{$wuxing{$bagua{$G_gua}}.$wuxing{$bagua{$H_gua}}}\n";
	
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
	  print" relation After is $shengke{$relation}\n";

	  if(
		 ( ($shengke{$wuxing{$bagua{$G_gua}}.$wuxing{$bagua{$H_gua}}} > 0) && ($shengke{$relation}<0) ) ||
		 ( ($shengke{$wuxing{$bagua{$G_gua}}.$wuxing{$bagua{$H_gua}}} < 0) && ($shengke{$relation}>0) )
	   )
	   {
		   push(@relation,0);
	   }{ push(@relation,1)}

          if($G_wuxing eq $H_wuxing){
	  print"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!$relation \n";
	  print "$shengke{$relation}\n";
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
	  print" relation After is $shengke{$relation}\n";

	  if(
		 ( ($shengke{$wuxing{$bagua{$G_gua}}.$wuxing{$bagua{$H_gua}}} > 0) && ($shengke{$relation}<0) ) ||
		 ( ($shengke{$wuxing{$bagua{$G_gua}}.$wuxing{$bagua{$H_gua}}} < 0) && ($shengke{$relation}>0) )
	   )
	   {
		   push(@relation,0);
	   }else{ push(@relation,1)}

	  if($G_wuxing eq $H_wuxing){
	  print"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!$relation \n";
	  print "$shengke{$relation}\n";
	   $eq_wuxing_after++;
 	  }
	}

	if($shengke{$relation} > 0){
	$result = 1 ; # Guest win
	}else{
	$result = 0 ; # Host win
	}
	if($result == $nba_season[$i*9]){
	push(@match,1);
	}else{
	push(@match,0);
	}
	print"\n-------------------\n";
}


my $z = 0;
my $jj =0;
#=comment
for($jj= 0;$jj<@relation;$jj++)
{
  my $nu = $jj +1;
  if(($nu % 6)==0){ print"\n";}  
  if($relation[$jj] == 0){
  $z =$z +1;	  
  print "($nu)  O\t";
  }else{
  print "($nu)  X\t";
  }
}
#cut
=comment
for($jj= 0;$jj<@relation;$jj++)
{
  my $nu = $jj +1;
  if(($nu % 6)==0){ print"\n";}  

  print "($nu)  $relation[$jj]\t";

}
=cut
$jj = $z / $nba_games;
print "\n$z / $nba_games ========== $jj%\n";
print "先天 $eq_wuxing_before\n";
print "后天 $eq_wuxing_after\n";

