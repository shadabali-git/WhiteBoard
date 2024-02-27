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
        ctx.beginPath()
        ctx.lineWidth=this.width;
        ctx.strokeStyle=this.color;
        
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

                  let Line1=new Line(draggingLinex,draggingLiney,draggingLinex2,draggingLiney2,draggingLine_color,draggingLine_width);
         
                  Line1.draw(context2);
           

                  



     



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
          // console.log(a);
          redrawLines();
          
          
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
    
    if(Drawing==4){
   
    a.splice(line_index,1);

    canvas.style.zIndex="1";
    canvas2.style.zIndex="10";
    
    redrawLines();

    }
     
    
     
    
})  
  



canvas.addEventListener('mousemove', (event) => {

  // a[line_index].color=getcolor;
   redrawLines();
 

if(Drawing==3){
    
  const { x, y } = getMousePosition(event);

 

  for (let i=0;i<a.length;i++) {
     
       let o=a[i];
    
  if((o.x<=x && x<o.x2 && o.y<y && y<o.y2)
                   || (o.x>x && x>o.x2 && o.y<=y && y<o.y2)
                   ||  (o.x<=x && x<o.x2 && o.y>y && y>o.y2)
                   ||  (o.x>x && x>=o.x2 && o.y>y && y>o.y2)
                   
              ){
            

      
             let line_slope=(o.y2-o.y)/(o.x2-o.x);
             let line_point_slope=(o.y2-y)/(o.x2-x);

                
             diff=Math.abs(line_slope-line_point_slope);


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

          

    const tolerance= 2;
    let getcolor=o.color;
    

    if ( diff < tolerance &&  diff!=-1) {

      

      redrawLines2(draggingLinex,draggingLiney,draggingLinex2,draggingLiney2,draggingLine_color,draggingLine_width);
       
      getcolor=o.color;
       
       a[i].color="red";

       Drawing=4;
       

      
        break;






    
    }
   
    

   


    
    

    
  }
}
});


canvas.addEventListener("mouseup",(even)=>{
  
        if(Drawing==4){
           
          let Line1=new Line(draggingLinex,draggingLiney,draggingLinex2,draggingLiney2,getcolor,draggingLine_width);
         
          Line1.draw(context2);
          a.push(Line1);
           
        }
        redrawLines();
})






function redrawLines2(a,b,c,d,e,f){
  
    context2.clearRect(0, 0, canvas2.width, canvas2.height);
       
    
    let move_line=new Line(a,b,c,d,f);
    
    move_line.draw(context2);


}




    
    
  
