<?php
//get actual url
$ActualURL = $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
//remove base from it
$URLData = str_replace($BaseURL."/", "", $ActualURL);
//cut into url data and get data
if(strpos($URLData, '?') !== false) 
{
    $URLData = explode('?',$URLData);
    $GETData = $URLData[1];
    $URLData = $URLData[0];
}
//make URLData array
$URLData = explode('/',$URLData);
$serverurl = $URLData;
if(!$serverurl[0]) { $serverurl[0] = "index"; }

//make GETData Array
if(isset($GETData)) 
{
    $_GET = array();
    $GETData = explode('&',$GETData);
    foreach($GETData as $GETDataItem)
    {
        $GETDataItem = explode('=',$GETDataItem);
        $_GET[$GETDataItem[0]] = $GETDataItem[1];
    }
}
//formated base url for head file
$BaseURLForHead = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http")."://".$BaseURL."/";
?>