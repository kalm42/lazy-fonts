<?php
$PageFound = 0;
//if look in pages
	//get all files in pages
	$pageNames = glob('pages/*.php');
	//public pages
	if (in_array('pages/'.$serverurl[0].'.php', $pageNames)) 
	{
		$PageFound = 1;
		include('pages/'.$serverurl[0].'.php');
	}
//else if look in users
	if($PageFound == 0)
	{
		//get all files in system/users
		$pageNames = glob('system/users/*.php');
		if (in_array('system/users/'.$serverurl[0].'.page.php', $pageNames)) 
		{
			$PageFound = 1;
			include('system/users/'.$serverurl[0].'.page.php');
		}
	}
//else if look in each component top level folder
	if($PageFound == 0)
	{
		//get all folders in components
		$folders = array_filter(glob('components/*'), 'is_dir');
		//get all php files in that folder and test for page or submit
		foreach ($folders as $folder)
		{
			//get all files in
			$pageNames =  glob($folder.'/*.php');
			if (in_array($folder.'/'.$serverurl[0].'.page.php', $pageNames)) 
			{
				$PageFound = 1;
				include($folder.'/'.$serverurl[0].'.page.php');
			}
		}
	}
//else if look in each component folders sub-folder
	if($PageFound == 0)
	{
		//get all folders in components
		$folders = array_filter(glob('components/*'), 'is_dir');
		foreach ($folders as $folder)
		{
			//get all subfolders in folder
			$subfolders = array_filter(glob($folder.'/*'), 'is_dir');
			foreach ($subfolders as $subfolder)
			{
				//get all files in
				$pageNames =  glob($subfolder.'/*.php');if (in_array($subfolder.'/'.$serverurl[0].'.page.php', $pageNames)) 
				{
					$PageFound = 1;
					include($subfolder.'/'.$serverurl[0].'.page.php');
				}
			}
		}
	}
//if nothing found
	if($PageFound == 0)
	{
		include("404.php");
	}
//is active for menu
	function IsActive($firstServerURL, $menuItem)
	{
		if($firstServerURL == $menuItem)
		{
			return 'class="active"';
		}
	}
?>