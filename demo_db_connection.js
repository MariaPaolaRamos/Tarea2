var mysql = require('mysql');

/*Aqui se crea la conexion con la base de datos*/
var con = mysql.createConnection({
  host: "localhost",
  user: "estudiante",
  password: "123456",
  database: "practica2"
});

var usr="dcopalupe"
var psw="123456";

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT nombre FROM practica2 WHERE usuario="+"'"+usr+"'", function (err, result, fields) {
    if (err) throw err;
    if(result=="")
    {
        console.log("No existe el usuario.");        
    }else{
        console.log(result[0].nombre);
        con.query("SELECT apellido FROM practica2 WHERE password="+"'"+psw+"'", function (err, result1, fields) {
            if (err) throw err;
            if(result1=="")
            {
                console.log("Contraseña incorrecta.");
            }else
            {
                console.log(result1);
            }
        });
    }
    con.end();
  });
});