<?php

$boolSession = 0;

$datasUnix = array(
	"unix" => "unix",
	"qcode" => "qcode",
	"cosmic" => "universal"
);
	
$usuario = $data["usuario"];
$clave = $data["clave"];

if(array_key_exists($usuario, $datasUnix) || $datasUnix[$usuario] === $clave){
	$boolSession = "1";
}

?>