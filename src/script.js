
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
 context2.setLineDash([5, 5]);




 const pen_value= document.getElementById('input');

 const pen_color=document.getElementById('pen_color');
 
 const select_color=document.getElementById("select_one");
 


let a=[];
let Array_Rectangle=[];
let Array_circle=[];
let drawing_Pen = [];
let eraser=[];
let Drawing=8;
let mousedown=false;
let pen_width=5;
let setcolor="black";




const blue=document.getElementById('color1');
const black=document.getElementById('color2');
const Yellow=document.getElementById('color3');
const Green=document.getElementById('color4');
const Pink=document.getElementById('color5');
const Brown=document.getElementById('color6');


// pen width 
 
pen_value.addEventListener("change",()=>{
     pen_width=parseFloat(pen_value.value);
})


//  pen color 

pen_color.addEventListener('click',()=>{

      select_color.style.display="flex";

      setInterval(()=>{
        select_color.style.display="none";
      },10000)
      
})



const Remove_eraser=document.getElementById('Delete_Eraser');

Remove_eraser.addEventListener("click",()=>{
     
        eraser=[]
        redrawLines();
})

   


blue.addEventListener("click",()=>{
     
         setcolor="blue";
})
black.addEventListener("click",()=>{
         setcolor="black";
})
Yellow.addEventListener("click",()=>{
    setcolor="yellow";
})

Green.addEventListener("click",()=>{
    setcolor="green";
})

Pink.addEventListener("click",()=>{
    setcolor="pink";
})

Brown.addEventListener("click",()=>{
    setcolor="brown";
})




function getMousePosition(event) {
    
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }



  document.getElementById('Line').addEventListener("click",()=>{
      
    Drawing=1;
    canvas.style.zIndex="1";
    canvas2.style.zIndex="10";


     
})



function redrawLines() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
         
    for (let i=0;i<a.length;i++) {
      let ob=a[i];
      let Line1=new Line(ob.x, ob.y,ob.x2, ob.y2,ob.color,ob.width);
         
      Line1.draw(context);
      
    
  
      
       
    }
  
    for (let i=0;i<Array_circle.length;i++) {
      let ob=Array_circle[i];
     
      let Circle1=new Circle(ob.x,ob.y,ob.radius,ob.color,ob.width);
         
      Circle1.drawCircle(context);
  
  
  
       
    }
  
  
    for (let i=0;i<Array_Rectangle.length;i++) {
      let ob=Array_Rectangle[i];
     
      let Rectangle1=new Rectangle(ob.x_react,ob.y_react,ob.x2_react,ob.y2_react,ob.color,ob.width);
         
       Rectangle1.drawRectangle(context);
  
  
  
       
    }
  
    for(let i=0;i<drawing_Pen.length;i++){
           
      let obj=drawing_Pen[i];

      let free_pen=new Line(obj.free_x,obj.free_y,obj.free_x2,obj.free_y2,obj.color,obj.free_width);
         
      free_pen.draw(context);



  
        
  
    }
  
    for(let i=0;i<eraser.length;i++){
           
      let obj=eraser[i];
      context.strokeStyle = "white";
      context.lineWidth = 10;
      context.moveTo(obj.free_x,obj.free_y);
      context.lineTo(obj.free_x2,obj.free_y2);
      context.stroke();
      context.beginPath();
  
        
  
    }
    
  
    
  }

 const eraseAll= document.querySelector('#clear_Board');

 eraseAll.addEventListener("click",()=>{

        eraser.length=0;
        a.length=0;
        Array_Rectangle.length=0;
        Array_circle.length=0;
        drawing_Pen.length=0;
       
          redrawLines();

  })

  
const closeNavbarButton = document.getElementById('close-nav');
const openNavbarButton = document.getElementById('open-nav');
const navbar = document.getElementById('nav-bar');

  closeNavbarButton.addEventListener('click', () => {
    navbar.style.display = 'none';
    openNavbarButton.style.display = 'block';
  });
  openNavbarButton.addEventListener('click', () => {
    navbar.style.display = 'flex';
    openNavbarButton.style.display = 'none';
    
  });
     