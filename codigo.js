
var numero1 = parseInt (prompt('ingrese un numero'));
var numero2 = parseInt (prompt('ingrese otro numero'));
var operacion = prompt('ingrese tipo de operacion a realizar')
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



 

