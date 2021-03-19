<?php
// Инициализация массива названий стран
$a[]="Беларусь";
$a[]="Россия";
$a[]="Бразилия";
$a[]="США";
$a[]="Нидерланды";
$a[]="ЮАР";
$a[]="Польша";
$a[]="Австралия";
$a[]="Германия";
$a[]="Великобритания";
$a[]="Испания";

//получение параметра s из URL
$s = preg_replace("/[\. \(\)\-]/", "", $_REQUEST['s']);
$s = iconv("UTF-8", "WINDOWS-1251", $s);

$response="";

if (strlen($s) > 0)
{
	for($i = 0; $i<count($a); $i++)
  	{
  		if (strtolower($s) == strtolower(substr($a[$i],0,strlen($s))))
    	{
    		if ($response == "")
      		{
      			$response=$a[$i];
      		}
    		else
      		{
      			$response=$response." , ".$a[$i];
      		}
    	}
  	}
}

$response=iconv("UTF-8", "WINDOWS-1251", $response);
//вывод результата
echo $response;
?>