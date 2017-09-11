let vidaGoku = 100;
let vidaSuperman = 100;

const MIN_POWER =5;
const MAX_POWER =12;
//Generamos rounds con variable que va a estar cambiando
let round = 0;

const gokuSigueVivo = ()=> vidaGoku >0;

//Debe regresar un true si estan vivos para que siga el juego, si no un false 
const ambosSiguenVivos = ()=>vidaGoku > 0 && vidaSuperman > 0;

//EMPATE
const ambosMuertos = ()=>vidaGoku === 0 && vidaSuperman === 0;

//== compara que el valor sea igual pero no compara el tipo
//===compara tipo y elemento, es mejor para comparar
//!== compara que sean diferentes el objeto y el tipo
//Math.round para redondear el valor
const calcularGolpe =()=>Math.round(Math.random()*(MAX_POWER - MIN_POWER) + MIN_POWER)

while (ambosSiguenVivos()){
    round++;
    console.log(`Round ${round}`);
    const golpeGoku = calcularGolpe();
    const golpeSuperman = calcularGolpe();
//if para hacer que le quite vida
    if(golpeGoku>golpeSuperman){
        console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`)
        vidaSuperman -= golpeGoku;
        console.log(`Superman queda en ${vidaSuperman} de vida`)

    }else{
        console.log(`Superman ataca a Goku con un golpe de ${golpeSuperman}`)
        vidaGoku -= golpeSuperman;
        console.log(`Goku queda en ${vidaGoku} de vida`)

    }


}
if(gokuSigueVivo()){
    console.log(`Goku gano la pelea. Su vida es de ${vidaGoku}`)
} else{
    console.log(`Superman gano la pelea. Su vida es de ${vidaSuperman}`)
}