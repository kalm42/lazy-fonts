<?php 
class PlanClass extends Helper
{	
	function __construct() 
	{		
		$this->mysqli = $this->ConnectDB();
        
		if(!$this->DoesTableExist("plans"))
		{
			$sql = "CREATE TABLE plans (
            id INT NOT NULL AUTO_INCREMENT,
            PlanName VARCHAR(13) NOT NULL,
            UseLimit INT(11) NOT NULL,
            Price VARCHAR(100) NOT NULL,
            Published VARCHAR(3) NOT NULL,
            PRIMARY KEY(id)
			)";
			$this->mysqli->query($sql);
            
            $this->processSQL("
			INSERT INTO plans (PlanName, UseLimit, Price, Published) 
			VALUES ('free', '240', '0', 'yes')
			");
		}
	}
}

?>