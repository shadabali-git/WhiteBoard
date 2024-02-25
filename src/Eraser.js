const Free_Eraser=document.getElementById('eraser');
const warning=document.querySelector('.arrow');

Free_Eraser.addEventListener("click",()=>{
      
       Drawing=10;
       canvas.style.zIndex="1";
       canvas2.style.zIndex="10";
       warning.style.display='flex';
      setInterval(()=>{
        warning.style.display='none';

      },(3000));
     
        

     
})

let Drawing_start6=false;
let initial_point_eraser_x;
let initial_point_eraser_y;

canvas2.addEventListener("mousedown",(event)=>{
      const{x,y}=getMousePosition(event);
      if(Drawing==10){
          Drawing_start6=true;
        isDrawing = true;
         initial_point_eraser_x=x;
         initial_point_eraser_y=y;
         
      }
})
canvas2.addEventListener("mousemove",(event)=>{
      redrawLines();
       const {x,y}= getMousePosition(event);
        if(Drawing==10){
            if(Drawing_start6){
                
                let x1=initial_point_eraser_x;
                let y1=initial_point_eraser_y;
                let x2=x;
                let y2=y;

                context2.moveTo(x1,y1);
                context2.lineTo(x2,y2);
                context2.strokeStyle = "white";
                context2.lineWidth = 10;
                // context2.lineCap = 'round';
                // context2.lineJoin = 'round';
                context2.stroke();
                context2.beginPath();
                

                eraser.push({ free_x: x1, free_y: y1,free_x2: x2,free_y2: y2 });
                initial_point_eraser_x=x2;
                initial_point_eraser_y=y2;
                
                
            }
        }
})

canvas2.addEventListener("mouseup",(event)=>{
       
      Drawing_start6=false;
      context2.beginPath();
      context2.clearRect(0, 0, canvas2.width, canvas2.height);
      
      redrawLines();
     
})

// console.log(eraser);