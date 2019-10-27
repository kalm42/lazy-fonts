<?php 
//Helper class version as of 05/11/19
class Helper
{
	function __construct() 
	{
		
	}
	
	public function ConnectDB()
	{
		//Find database config
		if(file_exists ('database-config.php'))
		{
			require('database-config.php');
		}
		else
		{
			require('../database-config.php');
		}
		
		//See if were using a database
		if($dbname != '')
		{
			// Create connection
			$this->mysqli = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
			
			// Check connection
			if ($this->mysqli->connect_error) 
			{
				echo 'Connect Error (' . $this->mysqli->connect_errno . ') '. $this->mysqli->connect_error;
			}
			else 
			{
				return $this->mysqli;
			}
		}
		else
		{
			echo "No Database Selected";
		}
	}
	
	public function processSQL($query)
	{
		
		//SQL Refernce Examples
		
		//INSERT: INSERT INTO MyGuests (firstname, lastname, email) VALUES ('John', 'Doe', 'john@example.com')
		//UPDATE: UPDATE MyGuests SET firstname = 'John' , lastname = 'Doe' WHERE id = '12' AND (name = 'bob' OR score > '12')
		//DELETE: DELETE FROM MyGuests WHERE id = '12' AND (name = 'bob' OR score > '12')
		//SELECT: SELECT id, firstname, lastname FROM MyGuests WHERE id = '12' AND (name = 'bob' OR score > '12')
		//SELECT: SELECT * FROM MyGuests
		//COUNT: SELECT COUNT(id) FROM MyGuests WHERE id = '12' AND (name = 'bob' OR score > '12')
		
		//Run SQL
		$result = $this->mysqli->query($query);
		if(!$result)
		{
			return("Error description: " . $this->mysqli->error); //$this->mysqli
		}
		else
		{
			//If no errors see what kind of sql was done and return accordingly
			if (strpos($query, 'INSERT INTO') !== false) 
			{
				return $this->mysqli->insert_id;
			}
			else if(strpos($query, 'UPDATE') !== false)
			{
				return "Update Success";
			}
			else if(strpos($query, 'DELETE FROM') !== false)
			{
				return "Delete Success";
			}
			else if(strpos($query, 'SELECT') !== false)
			{
				//format the sql data
				$SQLArray = array();
				
				while($row = mysqli_fetch_assoc($result))
				{
					$SQLArray[] = $row;
				}
				return $SQLArray;
			}
			else
			{
				return "Success";
			}	
		}
	}
	
	public function DoesTableExist($table)
	{
		//retunr true if table exists
		if ($result = $this->mysqli->query("SHOW TABLES LIKE '".$table."'")) 
		{
			if($result->num_rows == 1) 
			{
				return true;
			}
			else { return false; }
		}
		else { return false; }
	}
	public function GetColumnNames($table)
	{
		//if table exists return all columns
		if ($result = $this->mysqli->query("SHOW COLUMNS FROM ".$table)) 
		{
			$columnsArray = array();
			if (mysqli_num_rows($result) > 0) {
				while ($row = mysqli_fetch_assoc($result)) {
					$columnsArray[] = $row['Field'];
				}
			}
			return $columnsArray;
		}
		else { return "Could not get Column Names"; }
	}
	public function SanitizePOST($POST) 
	{
		$CleanPOST = array();
		foreach ($POST as $POSTItem)
		{
			$CleanPOST[] = $this->SanitizeInput($POSTItem);
		}
		return $CleanPOST;
	}
	public function SanitizeInput($data)
	{
		//sanatize anytime coming in
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		$data = mysqli_real_escape_string($this->mysqli, $data);
		return $data;
	}
	public function NiceDate($date, $time = "false")
	{
		//take in a date and format it to mm/dd/yyyy add time at end it optional
		if($time == "false")
		{
			return date("m/d/Y", strtotime($date));
		}
		else
		{
			return date("m/d/Y h:i A", strtotime($date));
		}
	}
	public function stringURLSafe($string)
    {
        //remove any '-' from the string they will be used as concatonater
        $str = str_replace('-', ' ', $string);
        $str = str_replace('_', ' ', $string);

        //$lang =& JFactory::getLanguage();
        //$str = $lang->transliterate($str);

        // remove any duplicate whitespace, and ensure all characters are alphanumeric
        $str = preg_replace(array('/\s+/','/[^A-Za-z0-9\-]/'), array('-',''), $str);

        // lowercase and trim
        $str = trim(strtolower($str));
        return $str;
    }
	public function IsActive($ServerURL, $MenuItem)
	{
		if($ServerURL == $MenuItem) { return "active"; }
	}
	public function SlugToText($Slug, $Capitalize = "no")
	{
		$Text = str_replace("-", " ", $Slug);
		if($Capitalize == "no")
		{
			return ucfirst($Text);
		}
		else
		{
			return ucwords($Text);
		}
	}
	public function TextToSlug($Text)
	{
		return str_replace(" ", "-", strtolower($Text));
	}
}

?>