<?php 
$return = array();
//localhost/lazyfonts/css?api=123&family=roboto
//http://test1.cwds2.com/css?api=a18a8481b81d894c9e9fff24b366561bb29da5f12f7e26447b9951e081f71562&family=roboto
if(!isset($_GET['api']) && !isset($_GET['family']))
{
    $return[] = "Error: Please include your API Key and Font Families";
}
else
{
    $APIInfo = $User->processSQL("SELECT PublicID FROM user_api_keys WHERE APIKey = '".$_GET['api']."'");
    if(!isset($APIInfo[0]))
    {
        $return[] = "Error: Invalid API Key";
    }
    else
    {
        //reset all plans that need reset
        $PlansToReset = $User->processSQL("SELECT id FROM user_plans 
        WHERE PublicID = '".$APIInfo[0]['PublicID']."'
        AND DateReset < '".date("Y-m-d H:i:s",time()-86400)."'
        AND DateExpired > '".date("Y-m-d H:i:s",time())."'
        ");
        if(isset($PlansToReset[0]))
        {
            foreach($PlansToReset as $PlanToReset)
            {
                $User->processSQL("UPDATE user_plans SET UsageDay = '0', DateReset = '".date("Y-m-d H:i:s",time())."' WHERE id = '".$PlanToReset['id']."'");
            }
        }
        
        //get all usable plans
        $UsablePlans = $User->processSQL("SELECT id, PlanName, UsageDay, UseLimit FROM user_plans 
        WHERE PublicID = '".$APIInfo[0]['PublicID']."'
        AND DateExpired > '".date("Y-m-d H:i:s",time())."'
        ");
        //test limit against uses
        foreach($UsablePlans as $key => $UsablePlan)
        {
            if($UsablePlan['UsageDay'] >= $UsablePlan['UseLimit'])
            {
                array_splice($UsablePlans, $key, 1);
            }
        }
        
        if(!isset($UsablePlans[0]))
        {
            $return[] = "Error: You have used all of your calls today.";
        }
        else
        {
            $UsablePlans[0]['UsageDay'] = $UsablePlans[0]['UsageDay'] + 1;
            $User->processSQL("UPDATE user_plans SET UsageDay = '".$UsablePlans[0]['UsageDay']."' WHERE id = '".$UsablePlans[0]['id']."'");
        }
        
    }
}

if(!$return)
{
    //get font folder
    $FontFolder = $Font->processSQL("SELECT * FROM font_folder_name WHERE id = '1'");
    $FontFolder = $FontFolder[0]['FontFolderName'];
    $FontInfo = $Font->processSQL("SELECT FontName, CSSFontFamily FROM fonts WHERE FontName = '".$_GET['family']."'");
    if(!isset($FontInfo[0]))
    {
        $return[] = "Error: Invalid Font Name.";
        echo json_encode($return);
    }
    else
    {
        header('Content-Type: text/css');
        header('Access-Control-Allow-Origin: *');
        header('Timing-Allow-Origin: *');
        echo "
/* latin */
@font-face {
  font-family: '".$FontInfo[0]['FontName']."';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('".$FontInfo[0]['FontName']."'), url(".$BaseURLForHead."fonts/".$FontFolder."/".$FontInfo[0]['FontName'].".woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
          ";
    }
}
else
{
    echo json_encode($return);
}

?>