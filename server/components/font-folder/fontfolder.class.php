<?php 
class FontFolderClass extends Helper
{	
	function __construct() 
	{		
		$this->mysqli = $this->ConnectDB();
        
		if(!$this->DoesTableExist("font_folder_name"))
		{
			$sql = "CREATE TABLE font_folder_name (
            id INT NOT NULL AUTO_INCREMENT,
            FontFolderName VARCHAR(64) NOT NULL,
            LastUpdated DATETIME NOT NULL,
            PRIMARY KEY(id)
			)";
			$this->mysqli->query($sql);
            
			$this->processSQL("
			INSERT INTO font_folder_name (FontFolderName, LastUpdated) 
			VALUES ('".hash('sha256', uniqid())."', '".date("Y-m-d H:i:s",time())."')
			");
		}
        
        $this->UpdateFontFolder();
	}
    public function UpdateFontFolder() 
	{
        //get font folder name entry
        $result = $this->processSQL("SELECT * FROM font_folder_name WHERE id = '1'");
        //echo date("Y-m-d H:i:s", strtotime('-5 minutes'))." | ".$result[0]['LastUpdated'];
        if(strtotime($result[0]['LastUpdated']) < strtotime('-5 minutes'))
        {
            //update font folder
            $NewFontFolder = hash('sha256', uniqid());
            $this->processSQL("UPDATE font_folder_name SET FontFolderName = '".$NewFontFolder."', LastUpdated = '".date("Y-m-d H:i:s",time())."' WHERE id = '1'");
            $CurrentFontFolder = array_filter(glob('fonts/*'), 'is_dir');
            //print_r($CurrentFontFolder[0]);
            rename($CurrentFontFolder[0], "fonts/".$NewFontFolder);
            
        }
    }
}

?>