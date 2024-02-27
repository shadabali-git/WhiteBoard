class Rectangle{

    constructor(x_react,y_react,x2_react,y2_react,color,width){
        this.x_react=x_react;
        this.y_react=y_react;
        this.x2_react = x2_react
        this.y2_react= y2_react
        this.color=color
        this.width=width;
    }
    drawRectangle(ctx){
         ctx.strokeStyle=this.color;
         ctx.lineWidth=this.width;
         ctx.beginPath();
         ctx.rect(this.x_react,this.y_react,this.x2_react,this.y2_react);
         ctx.closePath();
         ctx.stroke();
  
    }
  }

  class Circle{
    constructor(x,y,radius,color,width){
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color
        this.width=width;
    }
    drawCircle(ctx){
         ctx.strokeStyle=this.color;
         ctx.lineWidth=this.width;
         ctx.beginPath();
         ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
         ctx.closePath();
         ctx.stroke();

    }
}