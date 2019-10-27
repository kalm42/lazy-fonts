<?php 
class CoreClass extends Helper
{
	function __construct() 
	{
		//Start Session (only need to start once)
		session_start();
	}
}

?>