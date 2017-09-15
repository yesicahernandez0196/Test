var suma = 5 + 7;
var base = 5; 
var altura = 7;
var radio = 2.5;
var pi = 3.1416;
var area = base * altura;
var areaCirculo = pi * radio * radio;
var areaRect = area / 2;
var volEsfera = (4/3) * pi * radio * radio * radio;
console.log("El area de mi rectangulo es igual: " + area); //!--"35"-->
console.log("El area de mi circulo es = " + areaCirculo); //<!--"19.635"-->
console.log("El area de mi triangulo es = " + areaRect); //<!--"17.5"-->
console.log("El volumen de mi esfera es = " + volEsfera); //<!--"65.45"-->;


function saludo (){
    
        console.log("Hola "+ nombre);
        
    }
    nombre = "Yesica"; 
    saludo();




var nom = "Alonso";
    function saludar (){

if (true){
    var nom = "Erick";
    
}
console.log(`Hola ${nom}`);
}
saludar();


function saludar10(){
    let i = 0;
    for( i; i<10; i++){
        console.log(`Hola ${nom}`);
    }
     console.log(`el valor de i es ${i}`)
}
saludar10();