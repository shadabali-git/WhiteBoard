
document.getElementById("Rectangle").addEventListener("click",()=>{
    Drawing=7;
    // window.alert(Drawing);
    canvas.style.zIndex="1";
      canvas2.style.zIndex="10";


})

class Rectangle{
  constructor(x_react,y_react,x2_react,y2_react,color){
      this.x_react=x_react;
      this.y_react=y_react;
      this.x2_react = x2_react
      this.y2_react= y2_react
      this.color=color
  }
  drawRectangle(ctx){
       ctx.strokeStyle="black";
       ctx.beginPath();
       ctx.rect(this.x_react,this.y_react,this.x2_react,this.y2_react);
       ctx.closePath();
       ctx.stroke();

  }
}

function drawMainRectangle(x1,y1,x2,y2){
  if(Drawing_start3==1){

      let Circle1=new Rectangle(x1,y1,x2,y2,"black");
       
      Circle1.drawRectangle(context2);

       
     

    }
    else if(Drawing_start3==3){

      let Circle1=new Rectangle(x1,y1,x2,y2,"black");
       
      Circle1.drawRectangle(context2);

      Array_Rectangle.push(Circle1);

    }

}
console.log(Array_Rectangle);

let intial_point_x_Rect;
let intial_point_y_Rect;
let final_point_x_Rect;
let final_point_y_React;
let Drawing_start3=0;



canvas2.addEventListener("mousedown",(event)=>{
 const {x , y} = getMousePosition(event);
if(Drawing==7){
  Drawing_start3=1;
     
   intial_point_x_Rect=x;
   intial_point_y_Rect=y;

}
  
})


canvas2.addEventListener("mousemove",(event)=>{
 
    if(Drawing==7){
     
    if(Drawing_start3==1){

         
     
      const {x,y}=getMousePosition(event);


          final_point_x_Rect=(x-intial_point_x_Rect);
          final_point_y_React=(y-intial_point_y_Rect);

          
          context2.clearRect(0, 0, canvas2.width, canvas2.height);
          
          drawMainRectangle(intial_point_x_Rect,intial_point_y_Rect,final_point_x_Rect,final_point_y_React);
          
       

         
    }
  }
  
  redrawLines();

  
     
})

canvas2.addEventListener("mouseup",(event)=>{
  redrawLines();
  if(Drawing==7){
     
     

               Drawing_start3=3;
               const { x, y } = getMousePosition(event);
               context2.clearRect(0, 0, canvas2.width, canvas2.height);
               final_point_x_Rect=x-intial_point_x_Rect;
               final_point_y_React=y-intial_point_y_Rect;

               drawMainRectangle(intial_point_x_Rect,intial_point_y_Rect,final_point_x_Rect,final_point_y_React);
              


              
             

      
  }
  redrawLines();

})

