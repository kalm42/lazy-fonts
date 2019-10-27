<?php 
class UserClass extends Helper
{	
	function __construct() 
	{		
		$this->mysqli = $this->ConnectDB();
        
		if(!$this->DoesTableExist("users"))
		{
			$sql = "CREATE TABLE users (
            id INT NOT NULL AUTO_INCREMENT,
            PublicID VARCHAR(13) NOT NULL,
            AppName VARCHAR(100) NOT NULL,
            Name VARCHAR(100) NOT NULL,
            Email VARCHAR(100) NOT NULL,
            Activated INT(1) NOT NULL,
            DateCreated DATETIME NOT NULL,
            LastLoggedIn DATETIME NOT NULL,
            PRIMARY KEY(id)
			)";
			$this->mysqli->query($sql);
		}
        
		if(!$this->DoesTableExist("user_tokens"))
		{
			$sql = "CREATE TABLE user_tokens (
            id INT NOT NULL AUTO_INCREMENT,
            PublicID VARCHAR(13) NOT NULL,
            Token VARCHAR(64) NOT NULL,
            DateCreated DATETIME NOT NULL,
            PRIMARY KEY(id)
			)";
			$this->mysqli->query($sql);
		}
        
		if(!$this->DoesTableExist("user_api_keys"))
		{
			$sql = "CREATE TABLE user_api_keys (
            id INT NOT NULL AUTO_INCREMENT,
            PublicID VARCHAR(13) NOT NULL,
            APIKey VARCHAR(64) NOT NULL,
            DateCreated DATETIME NOT NULL,
            PRIMARY KEY(id)
			)";
			$this->mysqli->query($sql);
		}
        
		if(!$this->DoesTableExist("user_plans"))
		{
			$sql = "CREATE TABLE user_plans (
            id INT NOT NULL AUTO_INCREMENT,
            PublicID VARCHAR(13) NOT NULL,
            PlanName VARCHAR(13) NOT NULL,
            UsageDay INT(11) NOT NULL,
            UseLimit INT(11) NOT NULL,
            Status INT(1) NOT NULL,
            DateCreated DATETIME NOT NULL,
            DateReset DATETIME NOT NULL,
            DateExpired DATETIME NOT NULL,
            PRIMARY KEY(id)
			)";
			$this->mysqli->query($sql);
		}
        
		if(!$this->DoesTableExist("user_usage_history"))
		{
			$sql = "CREATE TABLE user_usage_history (
            id INT NOT NULL AUTO_INCREMENT,
            PublicID VARCHAR(13) NOT NULL,
            UsageDay INT(11) NOT NULL,
            DateCreated DATETIME NOT NULL,
            PRIMARY KEY(id)
			)";
			$this->mysqli->query($sql);
		}
	}
}

?>