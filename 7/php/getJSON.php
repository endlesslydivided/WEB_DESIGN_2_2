<?php 
	$response="";
	$file = '../data/test.json';
	$data = file_get_contents($file);
	$response = $data;
	echo $response
?>