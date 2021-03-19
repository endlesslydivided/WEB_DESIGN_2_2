<?php
$users = array (array("sitin","02081971","Батурель Евгений"),
				array("Alex_1999","staysalive","Александр Ковалев"),
				array("masha_2002","bobobibi","Мария Вербицкая"),
				array("dima_amib","privet_2020","Дима Аполлоник"),
				array("_lesha_","boring","Алексей Михалькевич")
				);

$login = preg_replace("/[\. \(\)\-]/", "", $_REQUEST['login']);
$password = preg_replace("/[\. \(\)\-]/", "", $_REQUEST['pas']);

$response="";

if (strlen($login) > 0 && strlen($password) > 0)
{
	for($i = 0; $i<count($users); $i++)
	{	
		if ($users[$i][0] == $login && $users[$i][1] == $password)
			{
			$response=$users[$i][2];
			}
	}
}
echo $response;
?>