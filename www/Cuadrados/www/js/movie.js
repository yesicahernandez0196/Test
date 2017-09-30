var rect1=new Rect(10,10,100,100)
.addTo(stage)
.attr('fillColor', 'blue')
.animate(new KeyframeAnimation('5000ms',{
    from:{x: 10, y: 10},
    to: {x: 800, y: 100}
}
))

var rect2= new Rect(10,10,100,100)
.addTo(stage)
.attr('fillColor', 'pink')

.animate(new KeyframeAnimation('5000ms', {
        from:{x: 800, y:500},
        to: {x: 10, y: 500}
}
))
 
var rect3=new Rect(10,10,100,100)
.addTo(stage)
.attr('fillColor', 'cyan')
.animate(new KeyframeAnimation('5000ms', {
        from:{x: 100, y:500},
        to: {x: 800, y: 100}
}
))

stage.addChild(rect1);
rect1.animate('5s',{
        rotation: Math.PI*2
})
stage.addChild(rect2);
rect2.animate('5s',{
        rotation: Math.PI*2
})
stage.addChild(rect3);
rect3.animate('5s',{
        rotation: Math.PI*2
})
