
document.getElementById("circle").addEventListener("click",()=>{
      Drawing=5;
      canvas.style.zIndex="1";
      canvas2.style.zIndex="10";

})

class Circle{
    constructor(x,y,radius,color){
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color
    }
    drawCircle(ctx){
         ctx.strokeStyle=this.color;
         ctx.beginPath();
         ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
         ctx.closePath();
         ctx.stroke();

    }
}

function drawMainCircle(x1,y1,radius,color){
    if(Drawing_start==1){

        let Circle1=new Circle(x1,y1,radius,color);
         
        Circle1.drawCircle(context2);
 
         
       

      }
      else if(Drawing_start==3){

        let Circle1=new Circle(x1,y1,radius,color);
         
        Circle1.drawCircle(context2);

        Array_circle.push(Circle1);

      }

}

let intial_point_x;
let intial_point_y;
let final_point_x;
let final_point_y;
let radius;
let Drawing_start=0;



canvas2.addEventListener("mousedown",(event)=>{
   const {x , y} = getMousePosition(event);
  if(Drawing==5){
    Drawing_start=1;
    // console.log("down")
     intial_point_x=x;
     intial_point_y=y;

  }
    
})


canvas2.addEventListener("mousemove",(event)=>{
    redrawLines();
      if(Drawing==5){
       
      if(Drawing_start==1){

           
        //   console.log("moving")
            //    Drawing_start=2;
        const {x,y}=getMousePosition(event);

            let centrex=(x+intial_point_x)/2;
            let centrey=(y+intial_point_y)/2;
            final_point_x=centrex;
            final_point_y=centrey;

            radius=(Math.sqrt(((x-intial_point_x)*(x-intial_point_x))+(y-intial_point_y)*((y-intial_point_y))))/2;
            
            context2.clearRect(0, 0, canvas2.width, canvas2.height);
            
            drawMainCircle(centrex,centrey,radius,"black");
            
         

           
      }
    }

    
       
})

canvas2.addEventListener("mouseup",(event)=>{
    if(Drawing==5){
       
       

                 Drawing_start=3;
                 const { x, y } = getMousePosition(event);
                 context2.clearRect(0, 0, canvas2.width, canvas2.height);
                 drawMainCircle(final_point_x,final_point_y,radius,"black");
               


                
               

        
    }
    redrawLines();

})
// console.log("woring");
// console.log(Array_circle);

