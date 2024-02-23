
document.getElementById("circle").addEventListener("click",()=>{
      Drawing=5;

})

class Circle{
    constructor(x,y,radius,color){
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color
    }
    drawCircle(){

         

    }
}


canvas2.addEventListener("mousedown",()=>{

    if(Drawing==5){

    let centerX = canvas2.width / 2;
    let centerY = canvas2.height / 2;

    context2.beginPath();
    let i=20
    while(true){
        if(i==800){
            break;
        }
        context2.arc(centerX, centerY, i, 0, Math.PI*2, false);
        i=i+20;


    }
    
    // context2.arc(centerX, centerY, 50, 0, Math.PI*2, false);
    context2.closePath();
    context2.stroke(); // To draw the outline of the circle, use fill() to fill it
    
    }
})