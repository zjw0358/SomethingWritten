# @author huangda
# 2015.4.10
# let's have a rest ^_^

#use strict;


print"1.Create Project\n";
print"2.Del Project\n";
$choice=<STDIN>;
chomp($choice);

if($choice == 1)
{
	print"Plz Input the New project name:\n";
	$proj_name=<STDIN>;
	chomp($proj_name);
	print"Input the src project name:\n";
	$src_prj_name =<STDIN>;
	chomp($src_prj_name);
	print"Working ...\n";

}elsif($choice ==2){
	print"Plz Input the Delete project name:\n";
	$proj_name=<STDIN>;
	chomp($proj_name);
	print"Delete ... \n";
}else{

exit(0);
}





$cmd_codegen_d="mkdir custom\\codegen\\$proj_name";
$cmd_system_d="mkdir custom\\system\\$proj_name";

$cmd_audio_d="mkdir plutommi\\Customer\\Audio\\$proj_name";
$cmd_mmi_d="mkdir plutommi\\Customer\\CustResource\\${proj_name}_MMI";
$cmd_image_d="mkdir plutommi\\Customer\\Images\\$proj_name";

$cmd_make = "copy make\\${src_prj_name}_GPRS.mak make\\${proj_name}_GPRS.mak";
$cmd_bld="copy make\\Verno_$src_prj_name\.bld make\\Verno_$proj_name\.bld";

$cmd_codegen_f= "copy custom\\codegen\\$src_prj_name\\codegen_$src_prj_name\.dws custom\\codegen\\$proj_name\\codegen_$proj_name\.dws";
$cmd_system_f="copy custom\\system\\$src_prj_name\\custom_MemoryDevice_$src_prj_name\.h custom\\system\\$proj_name\\custom_MemoryDevice_$proj_name\.h";

$cmd_audio_f="copy plutommi\\Customer\\Audio\\$src_prj_name\\audio_$src_prj_name\.zip plutommi\\Customer\\Audio\\$proj_name\\audio_$proj_name\.zip";
$cmd_image_f="copy plutommi\\Customer\\Images\\$src_prj_name\\mainlcd_image_$src_prj_name\.zip plutommi\\Customer\\Images\\$proj_name\\mainlcd_image_$proj_name\.zip";

$cmd_mmi_f_reflist="copy plutommi\\Customer\\CustResource\\${src_prj_name}_MMI\\ref_list_$src_prj_name\.txt plutommi\\Customer\\CustResource\\${proj_name}_MMI\\ref_list_$proj_name\.txt";

$cmd_mmi_f_plmlist="copy plutommi\\Customer\\CustResource\\${src_prj_name}_MMI\\plmnlist_$src_prj_name\.txt plutommi\\Customer\\CustResource\\${proj_name}_MMI\\plmnlist_$proj_name\.txt";

$cmd_mmi_f_features="copy plutommi\\Customer\\CustResource\\${src_prj_name}_MMI\\MMI_features_switch$src_prj_name\.h plutommi\\Customer\\CustResource\\${proj_name}_MMI\\MMI_features_switch$proj_name\.h";

$del_codegen_d="del /s/q custom\\codegen\\$proj_name";
$del_codegen="rmdir custom\\codegen\\$proj_name";

$del_system_d="del /s/q custom\\system\\$proj_name";
$del_system="rmdir custom\\system\\$proj_name";

$del_audio_d="del /s/q plutommi\\Customer\\Audio\\$proj_name";
$del_audio="rmdir plutommi\\Customer\\Audio\\$proj_name";

$del_image_d="del /s/q plutommi\\Customer\\CustResource\\${proj_name}_MMI";
$del_image="rmdir plutommi\\Customer\\CustResource\\${proj_name}_MMI";

$del_mmi_d="del /s/q plutommi\\Customer\\Images\\$proj_name";
$del_mmi="rmdir plutommi\\Customer\\Images\\$proj_name";

$del_make="del make\\${proj_name}_GPRS.mak";
$del_bld="del make\\Verno_$proj_name\.bld";


if($choice == 1){
if(0==system($cmd_codegen_d)){	print"......codegen dir OK!\n";} else{print "Create codegen dir Failed!\n";}

if(0==system($cmd_system_d)){	print"......system dir OK!\n";} else{print "Create system dir Failed!\n";}

if(0==system($cmd_audio_d)){	print"......audio dir OK!\n";} else{print "Create audio dir Failed!\n";}

if(0==system($cmd_mmi_d)){	print"......custResource dir OK!\n";} else{print "Create custResource dir Failed!\n";}

if(0==system($cmd_image_d)){	print"......image dir OK!\n";} else{print "Create image dir Failed!\n";}

if(0==system($cmd_make)){	print"......make file OK!\n";} else{print "Create make file Failed!\n";}

if(0==system($cmd_bld)){	print"......bld file OK!\n";} else{print "Create bld file Failed!\n";}

if(0==system($cmd_codegen_f)){	print"......codegen_f file OK!\n";} else{print "Create codegen_f file Failed!\n";}

if(0==system($cmd_system_f)){	print"......system_f file OK!\n";} else{print "Create system_f file Failed!\n";}

if(0==system($cmd_audio_f)){	print"......audio_f file OK!\n";} else{print "Create audio_f file Failed!\n";}

if(0==system($cmd_image_f)){	print"......image_f file OK!\n";} else{print "Create image_f file Failed!\n";}

if(0==system($cmd_mmi_f_reflist)){	print"......mmi_f_reflist file OK!\n";} else{print "Create mmi_f_reflist file Failed!\n";}

if(0==system($cmd_mmi_f_plmlist)){	print"......mmi_f_plmlist file OK!\n";} else{print "Create mmi_f_plmlist file Failed!\n";}

if(0==system($cmd_mmi_f_features)){	print"......mmi_f_features file OK!\n";} else{print "Create mmi_f_features file Failed!\n";}

}

if($choice == 2){

		system($del_codegen_d);
		system($del_system_d);
		system($del_audio_d);
		system($del_image_d);
		system($del_mmi_d);
		system($del_make);
		system($del_bld);
		system($del_codegen);
		system($del_system);
		system($del_audio);
		system($del_image);
		system($del_mmi);

}
