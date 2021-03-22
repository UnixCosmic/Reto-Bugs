<?php
session_start();
?>

<!DOCTYPE html>
<html>
<head>
	<title>Server Unix</title>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="../css/root.css">
	<link rel="icon" href="../img/qc.png">
</head>

<?php

if(!isset($_SESSION["unixLog"]) && (isset($_SESSION["unixLog"]) !== "root")){

	echo "<div class='denied'><span class='warning'>No tiene permiso</span> para acceder al <span class='tag'>Servidor Unix</span>.<div>";
	die();

}

?>

<body class="align">
	<div class="grid-unix">
		<div class="unix-gif"></div>
	</div>
	<div class="grid server">
		<h3>Bienvenido a <span class="tag">Unix Server <span class="pasion">♥</span></span></h3>
	</div>

	<form action="cerrarSession.ph">
		<input type="submit" id="cerrarSession" name="cerrarSession" class="cerrarSession" value="Cerrar Sesión">
	</form>
	
</body>
</html>
