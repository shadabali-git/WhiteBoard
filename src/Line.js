class Line {
    constructor(x, y,x2,y2,color,width) {
        this.x = x
        this.y = y
        this.x2 = x2
        this.y2= y2
        this.color = color
        this.width=width
        
    }

    draw(ctx) {

        ctx.lineWidth=this.width;
        ctx.strokeStyle=this.color;
        ctx.beginPath()
        ctx.moveTo(this.x,this.y);
        ctx.lineTo(this.x2,this.y2);
        ctx.stroke();
        
        
    }
    
}

function drawLine(x1,y1,x,y,setcolor,pen_width){


      if(LineDraw==1){
        let Line1=new Line(x1,y1,x,y,setcolor,pen_width);
         
        Line1.draw(context2);
 
         
       

      }
      else if(LineDraw==2){

        let Line1=new Line(x1,y1,x,y,setcolor,pen_width);
         
        Line1.draw(context2);

        a.push(Line1);

      }

        
       
}

console.log(a);




let LineDraw=0;
let x1=0;
let y1=0;
    

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
                drawLine(x1,y1,x,y,setcolor,pen_width);
                redrawLines();
               

                
                
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
                  context2.lineWidth=pen_width;
                  context2.strokeStyle=setcolor;
                  context2.moveTo(draggingLinex,draggingLiney);
                  context2.lineTo(draggingLinex2,draggingLiney2);
                  context2.stroke();




     



           }
               
      })
      
      canvas2.addEventListener("mouseup",(event)=>{
            
            mousedown=false;
          if(LineDraw==1){
            LineDraw=2;

             const { x, y } = getMousePosition(event);
             context2.clearRect(0, 0, canvas2.width, canvas2.height);
             drawLine(x1,y1,x,y,setcolor,pen_width);

             
             }
             else if(Drawing==4){
               Drawing=3;
             
               
                 let Line_new=new Line(draggingLinex,draggingLiney,draggingLinex2,draggingLiney2,setcolor,pen_width);
                 Line_new.draw(context);
                 a.push(Line_new);
              
               canvas.style.zIndex="10";
               canvas2.style.zIndex="1";

              
               

               

                   
             }
             redrawLines();

      })


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
  let draggingLine_color;
  let draggingLine_width;
  let diff=-1;

canvas.addEventListener("mousedown",()=>{
    // console.log(Drawing)
    Drawing=4;
    // console.log(Drawing)
    a.splice(line_index,1);
    redrawLines();
    let obj1=a[line_index];
    redrawLines2(obj1.x, obj1.y,obj1.x2, obj1.y2,obj1.color,obj1.pen_width);

     
    
})  
  



canvas.addEventListener('mousemove', (event) => {

   redrawLines();
 

if(Drawing==3){
    
  const { x, y } = getMousePosition(event);

            

  for (let i=0;i<a.length;i++) {
      //  redrawLines();
       let o=a[i]
      // o.color="black";
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
      draggingLine_color=o.color;
      draggingLine_width=o.pen_width;
      line_index=i;
                  
                
              }
            
             else{ 
              diff=-1;
             }

          

    const tolerance= 1;
    let getcolor=o.color;
    

    if ( diff < tolerance &&  diff!=-1) {
     
      getcolor=o.color;

       a[i].color="red";
       
       if(diff==-1){

        a[i].color=getcolor;
           
       }
      
        break;






    
    }
    else{
      a[i].color=getcolor;

    }

    
  }
}
});


canvas.addEventListener("mouseup",(even)=>{
  
        if(Drawing==4){
           
          let Line1=new Line(draggingLinex,draggingLiney,draggingLinex2,draggingLiney2,draggingLine_color,draggingLine_width);
         
          Line1.draw(context2);
          a.push(Line1);
           
        }
        redrawLines();
})






function redrawLines2(a,b,c,d,e,f){
  
  context2.clearRect(0, 0, canvas2.width, canvas2.height);
       
    context2.strokeStyle=e;
    context2.lineWidth=f;
    context2.setLineDash([]);
    context2.beginPath();
    context2.moveTo(a,b);
    context2.lineTo(c, d);
    context2.stroke();
  
    canvas.style.zIndex="1";
    canvas2.style.zIndex="10";


}






const Remove_eraser=document.getElementById('Delete_Eraser');

Remove_eraser.addEventListener("click",()=>{
     
       eraser.length=0;
        redrawLines();
})

   
    
    
  
