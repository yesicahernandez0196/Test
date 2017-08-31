const nombre = "Yesica";
//Arreglo, no esta definido, puedo ponerle lo que me de la gana, cada elemento debe estar separado por una ,
const dias = [ 
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
]
function promedioCorrer (){
const min = 5;
const max = 15;

return Math.round(Math.random ()*(max-min)+min)
}
let totalKms =0;
//lenght regresa el valor del arreglo
const lenght = dias.length;
for (let i = 0; i<lenght; i++){
const kms = promedioCorrer()    ;
totalKms += kms //totalKms = totalKms + kms <--- es lo mismo
console.log(`El dia ${dias[i]}, ${nombre} corrio ${kms} kms`)
}
const promedioKms = totalKms / lenght
console.log(`En promedio, ${nombre} corrio ${promedioKms} kms, en la semana`)