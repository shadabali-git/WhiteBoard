const Free_pen=document.getElementById('free_pen');

Free_pen.addEventListener("click",()=>{
      
       Drawing=8;
       canvas.style.zIndex="1";
       canvas2.style.zIndex="10";
     
        

     
})

let Drawing_start4=false;
let initial_point_free_x;
let initial_point_free_y;

canvas2.addEventListener("mousedown",(event)=>{
      const{x,y}=getMousePosition(event);
      if(Drawing==8){
          Drawing_start4=true;
        isDrawing = true;
         initial_point_free_x=x;
         initial_point_free_y=y;
         
      }
})
canvas2.addEventListener("mousemove",(event)=>{
       const {x,y}= getMousePosition(event);
        if(Drawing==8){
            if(Drawing_start4){
                
                let x1=initial_point_free_x;
                let y1=initial_point_free_y;
                let x2=x;
                let y2=y;
                context2.lineWidth = pen_width;
                context2.stroke();
                context2.moveTo(x1,y1);
                context2.lineTo(x2,y2);
                context2.strokeStyle = setcolor;
                context2.stroke();
               
                

                drawing_Pen.push({ free_x: x1, free_y: y1,free_x2: x2,free_y2: y2,color:setcolor,free_width:pen_width });
                initial_point_free_x=x2;
                initial_point_free_y=y2;
                
                
            }
        }
})

canvas2.addEventListener("mouseup",(event)=>{
       
      Drawing_start4=false;
   
      context2.clearRect(0, 0, canvas2.width, canvas2.height);
       redrawLines();
     
})
