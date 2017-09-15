/*new Rect(10,10,100,100)
.addTo(stage)
.attr('fillColor', 'cyan')


.animate ('8s',{
    x:600,
    y:400
})*/


/*new Circle (500, 500, 100)
.addTo(stage)
.attr ('fillColor', 'red');


contextoCanvas.arc(0.5, 0.5 ,6 , 0, Math.PI*2, false);
arc(0.5, 0.5, 6, 25, 30, false);
*/
var ctx = cargaContextoCanvas('micanvas');
if(ctx){
   //primer camino, en negro
   ctx.beginPath();
   ctx.arc(0.5,.5,6,Math.PI,Math.PI*0.5,false);
   ctx.arc(0.5,0.5,6,Math.PI*0.5,Math.PI*1,false);
   ctx.closePath()
   ctx.fill();

   //segundo camino, en naranja
   ctx.fillStyle = '#ff8800';
   ctx.beginPath();
   ctx.arc(0.5,0.5,6,0,Math.PI*2,false);
   ctx.fill();
}