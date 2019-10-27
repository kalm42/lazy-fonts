<?php 
class FontsClass extends Helper
{	
	function __construct() 
	{		
		$this->mysqli = $this->ConnectDB();
        
		if(!$this->DoesTableExist("fonts"))
		{
			$sql = "CREATE TABLE fonts (
            id INT NOT NULL AUTO_INCREMENT,
            FontName VARCHAR(100) NOT NULL,
            Characters VARCHAR(1000) NOT NULL,
            Designer VARCHAR(100) NOT NULL,
            About VARCHAR(1000) NOT NULL,
            Styles VARCHAR(1000) NOT NULL,
            CSSFontFamily VARCHAR(100) NOT NULL,
            Taxonomy VARCHAR(1000) NOT NULL,
            PRIMARY KEY(id)
			)";
			$this->mysqli->query($sql);
            
            $this->processSQL("
			INSERT INTO fonts (FontName, Characters, Designer, About, Styles, CSSFontFamily, Taxonomy) 
			VALUES ('Roboto', 'A B C', 'Christian Robertson', 
            'About Text', 
            'Thin, Thin Italic, Light, Light Italic, Regular, Regular Italic, Medium, Medium Italic, Bold, Bold Italic, Black, Black Italic',
            'Roboto', 'Sans Serif')
			");
		}
	}
}

?>