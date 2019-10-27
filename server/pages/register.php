<?php 
$return = array();
//localhost/lazyfonts/register?appname=app&name=wade&email=admin@lostwake.com
//test1.cwds2.com/register?appname=app&name=wade&email=admin@lostwake.com
if(!isset($_GET['appname']) && !isset($_GET['name']) && !isset($_GET['email']))
{
    $return[] = "Error: Please include your Name, App Name, and Email";
}
else
{
    $DoesEmailExist = $User->processSQL("SELECT id FROM users WHERE Email = '".$_GET['email']."'");
    if(isset($DoesEmailExist[0]))
    {
        $return[] = "Error: Email already exists try logging in.";
    }
    else
    {
        $PublicID = uniqid();
        
        $User->processSQL("
        INSERT INTO users (PublicID, AppName, Name, Email, Activated, DateCreated, LastLoggedIn) 
        VALUES ('".$PublicID."', '".$_GET['appname']."', '".$_GET['name']."', '".$_GET['email']."', '1', '".date("Y-m-d H:i:s",time())."', '".date("Y-m-d H:i:s",time())."')
        ");
        
        $APIKey = hash('sha256', uniqid());
        
        $User->processSQL("
        INSERT INTO user_api_keys (PublicID, APIKey, DateCreated) 
        VALUES ('".$PublicID."', '".$APIKey."', '".date("Y-m-d H:i:s",time())."')
        ");
        
        $FreePlanInfo = $User->processSQL("SELECT * FROM plans WHERE PlanName = 'free'");
        
        $User->processSQL("
        INSERT INTO user_plans (PublicID, PlanName, UsageDay, UseLimit, Status, DateCreated, DateReset, DateExpired) 
        VALUES ('".$PublicID."', '".$FreePlanInfo[0]['PlanName']."', '0', '".$FreePlanInfo[0]['UseLimit']."', '1', '".date("Y-m-d H:i:s",time())."', '".date("Y-m-d H:i:s",time())."', '".date("Y-m-d H:i:s",strtotime('+5 years'))."' )
        ");
        
        $return[] = "Success: You are registered";
        $return[] = $APIKey;
        
    }
}

echo json_encode($return);
?>