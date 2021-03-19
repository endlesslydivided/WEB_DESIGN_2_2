<?php 
	$data = $_POST['json'];
	$file = '../data/test.json';
	$fp = fopen($file,'a');
	fwrite($fp, $data);
	fclose($fp);
	
?>