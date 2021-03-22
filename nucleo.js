function bug(){
	let value; // <Linea Bloqueado /> | Permisos: Ninguno
  	document.querySelectorAll(".form__input").forEach(e => {
  		e.value === '' ? value=true : value=false
  	}) // <Linea Bloqueado /> | Permisos: Editar

  	value ? setInterval(() => {
 		alert("Se ha perdido la conexión, reconectando con servidores Unix...")
		alert("Err0r....a'12¿3¿1'2-2WAs}{.d"); 
		location.reload()
	} ,5000) : null; // <Condicional Bloqueado /> | Permisos: Ninguno

	setInterval(() => {
	 	const date = document.querySelector("#date"); // <Linea Bloqueado /> | Permisos: Ninguno
		const fechaUnix = new Date("25/12/2021") // <Linea Bloqueado /> | Permisos: Editar
	 	if(isNaN(fechaUnix)) // <Condicional Bloqueada /> | Permisos: Ninguno
	 		(() => { // < Comentario /> | Nota: Este bloque de codigo no necesita ser reparado
	 			date.innerHTML = "Date format invalid!"
			  	date.style.color="red"
			  	date.style.top="0"
			  	date.style.left="0"
			  	document.querySelectorAll(".form__input").forEach(e => e.value = '')
				setTimeout(() => {
					date.innerHTML = "-1/-1/2021"
					date.style.color="#99a4af"
					date.style.top="550px"
					date.style.left="50%"
				}, 50)
			})()
		else	// <Condicional Bloqueado /> | Permisos: editar
			setInterval(() => { 
				date.inneHTML = (Date().toLocalTimeString())
				date.style.color="#99a4af"
				date.style.top="550px"
				date.style.left="50%"
			}, 1000)

	}, 1000)
	
}
	
function mensaje(){
	document.getElementById('m').innerHTML = '';	
}

function error(){
	document.getElementById('m').innerHTML = 'Usuario y/o contraseña incorrecta.';
}

window.onload= () => {
	alert("Bienvenido al Reto Unix!\nMucha suerte corrigiendo los bugs correctamente! (Recuerda que no puedes eliminar codigo solo modificarlo)");
	let santuario = document.querySelector(".santuario"); // <Linea Bloqueada /> | Permisos: Agregar
	let lista = santuario.querySelectorAll(".unix label") // <Linea Bloqueada /> | Permisos: Agregar
	if(lista.length > 0) // <Linea Bloqueada /> | Permisos: Ninguno
		bug(); // <Linea Bloqueada /> | Permisos: No es necesario reparar nada
}
