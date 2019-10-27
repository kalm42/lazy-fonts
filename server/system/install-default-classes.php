<?php
    
	//Get Base
	include("database-config.php");

	//Helper
	include("system/helper/helper.class.php");
	
	//Core
	include("system/core.class.php");
	$Core = new CoreClass;
	
	//font-folder
	include("components/font-folder/fontfolder.class.php");
	$FontFolder = new FontFolderClass;

	//users
	include("components/users/user.class.php");
	$User = new UserClass;

	//plans
	include("components/plans/plan.class.php");
	$Plan = new PlanClass;

	//fonts
	include("components/fonts/fonts.class.php");
	$Font = new FontsClass;
?>