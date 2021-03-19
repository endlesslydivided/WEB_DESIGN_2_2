<?php 
	$data = $_POST['json'];
	$file = '../data/test.json';
	$fp = fopen($file,'w+');
	fwrite($fp, $data);
	fclose($fp);
	
?>

