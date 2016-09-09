function mostrarMensaje(mensaje) {
    alert(mensaje);
}

var mensajeBienvenida = 'hola';
var mensajeDespedida = 'chau';

mostrarMensaje(mensajeBienvenida);


//Suma 
function sumar(operandoA, operandoB) {
    alert(operandoA + operandoB);
}

sumar(5 , 6);

//Otra funcion
var numerosPrimos = [1,2,3,5,7];
sumarArray(numerosPrimos);

function sumarArray(numeros) {
    var resultado = 0;

    for (var index = 0; index < numeros.length; index++) {
        var resultado = resultado + numeros[index];
        
    }
    console.log(resultado);
    
    return resultado; //esto le asigna un valor a la funcion que llamamos y la devuelve fuera de la misma. 
}

var resuladoDeLaSumaDelArray = sumarArray; //esto se puede hacer solamente por haber recibido un return dentro de la funcion


function ingresaNombre(consultaNombre) {
    (consultaNombre);
}
function ingresaApellido(consultaApellido) {
    (consultaApellido);
}
var nombre = prompt ('Ingresar nombre');
var apellido = prompt ('Ingresar apellido');
ingresaNombre(nombre);
ingresaApellido(apellido);
console.log (nombre + apellido);


var diasHabiles = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
var finDeSemana = ['sabado', 'domingo'];
/*var dia = (prompt ('ingrese dia de la semana'));
var diasHabiles = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
var finDeSemana = ['sabado', 'domingo'];
for (var i = 0; i < diasHabiles.length; i++) {
  if (diasHabiles[i] === dia) {
      alert('Hoy es un dia habil');
      break;
}
} ;*/

var diasHabiles = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
var finDeSemana = ['sabado', 'domingo'];
var dia = prompt ('ingrese que tipo de dia quiere ver "habil" o "fin de semana"');
function diasAMostrar(dias) {
    for (i = 0; i < dias.length; i++)
    alert (dias[i]);
} 
if (dia=='habil'){
    diasAMostrar(diasHabiles)
}
else {
    diasAMostrar(finDeSemana);
}


var numero1 = parseInt (prompt('ingrese un numero'));
var numero2 = parseInt (prompt('ingrese otro numero'));
var operacion = prompt ('ingrese tipo de operacion')
function suma(operandoA, operandoB) {
        console.log(operandoA + operandoB);
}
function resta(operandoA, operandoB) {
        console.log(operandoA - operandoB);
    } 
function multiplicacion(operandoA, operandoB) {
    console.log(operandoA * operandoB);
    }
function division(operandoA, operandoB) {
        console.log(operandoA / operandoB);
        }
switch (operacion) {
    case ('suma'):{
        suma((numero1), (numero2));
        break;}
    case ('resta'):{
        resta((numero1), (numero2));
        break;}
    case ('multiplicacion'):{
    multiplicacion((numero1), (numero2));
     break;}
    case ('division'):{
        division((numero1), (numero2));
        break;}
}





if (operacion=='suma'){
function suma(operandoA, operandoB) {
    console.log(operandoA + operandoB);
}    
}
function resta(operandoA, operandoB) {
    console.log(operandoA - operandoB);
}
function multiplicacion(operandoA, operandoB) {
    console.log(operandoA * operandoB);
}
function division(operandoA, operandoB) {
    console.log(operandoA / operandoB);
}




if (dia=='habil'){
for (var i = 0; i < diasHabiles.length; i++){
    alert(diasHabiles[i]);
    }
}
else {
    for (var i = 0; i < finDeSemana.length; i++){
    alert(finDeSemana[i]);
   }
}


function muestraFinDeSemana(){
   for (var index = 0; index < finDeSemana.length; index++) {
   alert (array[index]);
}  
function muestra(dias) {
    var diasAMostrar = prompt('Que tipo de dias queres ver?');    
    if (diasAMostrar == 'habil') {
        dias(muestraHabiles);
    }
    else {
        dias(muestraFinDeSemana);
    };
};


