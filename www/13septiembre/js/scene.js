let numStars = 7;
let width = 500;
let height = 500;

let stars = (function(star){
    let stars =[];
    for(let i=0; i<numStars; i++){
        let h = i * 360 / numStars;
        stars[i]= start.clone().attr({
            /*100% sombra del color y el 50% el 
            gradiente sobre el color, h separa el valor 
            de cada una de las partes de la estrella*/
            fillColor: 'hsl('+h+',100%,50%)',
            x :width/2,
            y :height/2
        })
    }
    return stars;
    /* me va a hacer una estrella de 5 puntas, porque tiene 1 vertice
    y lo va a multiplicar 5 veces */
})(new Star(width/2, height/2, 1,5));
//tamaño de la vista de
stage.length(14);

//dibujarlo
i=0;
stage.on(0,function(){
    let star = stars[i];

    star.attr({
        //escalo en 1 y lo vuelve a replicar
        scaleX:1,
        scaleY:1,
        opacity:1
    }).addTo(stage).animate(14*numStars,{
        scaleX: width *3,
        scaleY: height*3,
        opacity:0
    },{
        isTimeLineBound:false
    });
    i=(i+1)%numStars; //%--->regresa el residuo
    stage.removeChild(star[i]);
    
})