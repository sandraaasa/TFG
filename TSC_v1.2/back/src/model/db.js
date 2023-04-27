const mysql = require('mysql');
const conexion = mysql.createConnection({
	host:'db4free.net',
	user:'sandra',
	password:'Lacontrasena2002',
	database:'sandra'
});
conexion.connect((error)=>{
	if(error) {
		console.log(error);
	} else {
		console.log('Database Connected Successfully..!!');
	}
});

module.exports = conexion;