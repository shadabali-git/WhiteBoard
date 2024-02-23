
const canvas = document.getElementById('whiteboard');
const context = canvas.getContext('2d');

const canvas2 = document.getElementById('current');
const context2= canvas2.getContext('2d');
const rect = canvas2.getBoundingClientRect();

 let Canvas_width=window.innerWidth;
 let Cavas_height=window.innerHeight;

 canvas.width=Canvas_width;
 canvas.height=Cavas_height;
 canvas2.width=Canvas_width;
 canvas2.height=Cavas_height;



let a=[];
let Drawing=0;
let mousedown=false;




document.getElementById('Line').addEventListener("click",()=>{
      
         Drawing=1;
         canvas.style.zIndex="1";
         canvas2.style.zIndex="10";


          
})



function getMousePosition(event) {
    
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }




class Line {
    constructor(x, y,x2,y2,color) {
        this.x = x
        this.y = y
        this.x2 = x2
        this.y2= y2
        this.color = color
        
    }

    draw(ctx) {
        ctx.lineWidth=5;
        ctx.strokeStyle=this.color;
        ctx.beginPath()
        ctx.moveTo(this.x,this.y);
        ctx.lineTo(this.x2,this.y2);
        ctx.stroke();
        
        
    }
    
}

// draw line on convas2

function drawLine(x1,y1,x,y){


      if(LineDraw==1){
        let Line1=new Line(x1,y1,x,y,"black");
         
        Line1.draw(context2);
 
         
       

      }
      else if(LineDraw==2){

        let Line1=new Line(x1,y1,x,y,"black");
         
        Line1.draw(context2);

        a.push(Line1);

      }

        
       
}


// canvas even listner 


let LineDraw=0;
let x1=0;
let y1=0;
      //  canvas.addEventListener("mousedown",()=>{
      //     mousedown=true;
      //  })
      //  canvas.addEventListener("mouseup",()=>{
      //     mousedown=false;
      //  })

      canvas2.addEventListener("mousedown",(event)=>{
          mousedown=true;
            if(Drawing==1){

                LineDraw=1;

               const { x, y } = getMousePosition(event);
               x1=x
               y1=y
            }
          
      })
      canvas2.addEventListener("mousemove",(event)=>{
        // okkey();
        redrawLines();
           if(LineDraw==1){
            
                const { x, y } = getMousePosition(event);
                context2.clearRect(0, 0, canvas2.width, canvas2.height);
                drawLine(x1,y1,x,y);
                redrawLines();
                // context2.clearRect(0,0,canvas2.width, canvas2.height);

                
                
           }

           else if(Drawing==4){


     
  
                  const { x, y } = getMousePosition(event);
                
                  context2.clearRect(0, 0, canvas.width, canvas.height);
                  context2.beginPath();
                      
                  var dx = x - draggingLinex;
                  var dy = y - draggingLiney;
  
                  // Update the line coordinates
                  draggingLinex += dx;
                  draggingLiney += dy;
                  draggingLinex2 += dx;
                  draggingLiney2 += dy;

                  context2.moveTo(draggingLinex,draggingLiney);
                  context2.lineTo(draggingLinex2,draggingLiney2);
                  context2.stroke();




     



           }
               
      })
      
      canvas2.addEventListener("mouseup",(event)=>{
            // Drawing=0;
            mousedown=false;
          if(LineDraw==1){
            LineDraw=2;

             const { x, y } = getMousePosition(event);
             context2.clearRect(0, 0, canvas2.width, canvas2.height);
             drawLine(x1,y1,x,y);

             
             }
             else if(Drawing==4){
               Drawing=3;
              //  let New_o={draggingLinex,draggingLiney,draggingLinex2,draggingLiney2};
               
                 let Line_new=new Line(draggingLinex,draggingLiney,draggingLinex2,draggingLiney2,"black");
                 Line_new.draw(context);
                 a.push(Line_new);
              
               canvas.style.zIndex="10";
               canvas2.style.zIndex="1";

               redrawLines();

               

                   
             }
             redrawLines();

      })

      


      //   canvas 2 drawing Done Now 




      //   Edit line to move 

document.getElementById('Restore').addEventListener('click',()=>{
         canvas.style.zIndex="10";
         canvas2.style.zIndex="1";
          Drawing=3;
        
          context2.clearRect(0, 0, canvas2.width, canvas2.height);
})
 



  

  let draggingLinex;
  let draggingLiney;
  let draggingLinex2;
  let draggingLiney2;
  let line_index;
  let diff=-1;

  



canvas.addEventListener('mousemove', (event) => {



if(Drawing==3){
    
  const { x, y } = getMousePosition(event);

            

  for (let i=0;i<a.length;i++) {
       redrawLines();
       let o=a[i]
      o.color="black";
  if((o.x<=x && x<o.x2 && o.y<y && y<o.y2)
                   || (o.x>x && x>o.x2 && o.y<=y && y<o.y2)
                   ||  (o.x<=x && x<o.x2 && o.y>y && y>o.y2)
                   ||  (o.x>x && x>=o.x2 && o.y>y && y>o.y2)
                   
              ){
            


             let line_slope=(o.y2-o.y)/(o.x2-o.x);
             let line_point_slope=(o.y2-y)/(o.x2-x);

                
             diff= Math.floor(Math.abs(line_slope-line_point_slope));


      draggingLinex = o.x;
      draggingLiney= o.y;
      draggingLinex2=o.x2;
      draggingLiney2=o.y2;
      line_index=i;
                  
                
              }
            
             else{ 
              diff=-1;
             }

          

    const tolerance= 0.2;
    

    if ( diff < tolerance &&  diff!=-1) {


       a[i].color="red";

       if(diff==-1){
        a[i].color="black";
           
       }
      
        break;






    
    }

    
  }
}
});

canvas.addEventListener("mousedown",()=>{
      console.log(Drawing)
      Drawing=4;
      console.log(Drawing)
      a.splice(line_index,1);
      redrawLines();

      redrawLines2(draggingLinex,draggingLiney,draggingLinex2,draggingLiney2);

})





function redrawLines() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  // context2.clearRect(0, 0, canvas2.width, canvas2.height)
       
  for (let i=0;i<a.length;i++) {
    let ob=a[i];
    context.strokeStyle=ob.color;
    context.setLineDash([]);
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(ob.x, ob.y);
    context.lineTo(ob.x2, ob.y2);
    
   
    context.stroke();


     
  }
}


function redrawLines2(a,b,c,d){
  
  context2.clearRect(0, 0, canvas2.width, canvas2.height);
       
    context2.strokeStyle="red";
    
    context2.setLineDash([]);
    context2.beginPath();
    context2.moveTo(a,b);
    context2.lineTo(c, d);
    context2.stroke();
  
    canvas.style.zIndex="1";
    canvas2.style.zIndex="10";


}
   
    
    
  
