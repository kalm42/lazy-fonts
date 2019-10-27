<?php 
class MailClass
{
	function __construct() 
	{
	}
	
	public function SendEmail($To, $ToName, $Subject, $Body, $From="", $FromName="", $BCCTo = "")
	{
		$To = $this->SanitizeInput($To);
		$ToName = $this->SanitizeInput($ToName);
		$Subject = $this->SanitizeInput($Subject);
		$Body = $this->SanitizeInput($Body);
		$From = $this->SanitizeInput($From);
		$FromName = $this->SanitizeInput($FromName);
		$BCCTo = $this->SanitizeInput($BCCTo);
		
		global $DefaultFrom;
		global $DefaultFromName;
		
		global $MailHost;
		global $MailUsername;
		global $MailPassword;
		global $MailSMTPSecure;
		global $MailPort;
		
		global $IsSMTP;
		
		if($From == ""){ $From = $DefaultFrom; }
		if($FromName == ""){ $FromName = $DefaultFromName; }
		
		require_once 'system/mail/phpmailer/PHPMailerAutoload.php';
		$m = new PHPMailer();
		if($IsSMTP)
		{
			$m->isSMTP();
			$m->SMTPAuth = true;
			//$m->SMTPDebug = 2;
			
			$m->Host = $MailHost;
			$m->Username = $MailUsername;
			$m->Password = $MailPassword;
			$m->SMTPSecure = $MailSMTPSecure;
			$m->Port = $MailPort;//465, 587
		}
		
		$m->From = $From;
		$m->FromName = $FromName;
		$m->addReplyTo($From,$FromName);
		$m->addAddress($To, $ToName);//to address
		$m->addBCC($BCCTo,$FromName);//to address
		
		$m->Subject = $Subject;
		$m->Body = html_entity_decode($Body);
		$m->AltBody = html_entity_decode($Body);
		$m->IsHTML(true);

		if($m->send()){ return "Email Sent"; }
		else { return "There was an error sending email:".$m->ErrorInfo; }
	}
	public function SanitizeInput($data) 
	{
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}
}

?>