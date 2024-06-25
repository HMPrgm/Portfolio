import { DotObj } from "./dotObj";
import { MousePos } from "./dotObj";

const minDistance = 300;
const magnitude = 1;
const clamp = (x:number,max:number,min:number) => Math.max( min, Math.min(x, max) );
export function NewDot(width:number,height:number,context:CanvasRenderingContext2D , dotObj:DotObj,mousePos:MousePos) {
    let dot = new Dot(dotObj); 
    dot.draw(context);
    dotObj.x += dotObj.vx;
    if (dotObj.x>width || dotObj.x<0) {
        dotObj.vx = -dotObj.vx;
    }
    dotObj.y += dotObj.vy;
    if (dotObj.y>height || dotObj.y<0) {
        dotObj.vy = -dotObj.vy;
    }
    const distance:number = (mousePos.x - dotObj.x)*(mousePos.x - dotObj.x) + (mousePos.y - dotObj.y)*(mousePos.y - dotObj.y)
    if (distance<minDistance*minDistance) {
        // console.log("Distance: "+(mousePos.x - dotObj.x)*(mousePos.x - dotObj.x) + (mousePos.y - dotObj.y)*(mousePos.y - dotObj.y))
        // console.log(`Before:(${dotObj.vx},${dotObj.vy})`)
        dotObj.vx += magnitude/distance *(dotObj.x - mousePos.x)
        dotObj.vx = clamp(dotObj.vx,1,-1)
        dotObj.vy += magnitude/distance *(dotObj.y - mousePos.y)
        dotObj.vy = clamp(dotObj.vy,1,-1)
        // console.log(`After:(${dotObj.vx},${dotObj.vy})`)
    }
    
}

class Dot {
    x: number;
    y: number;
    radius: number;
    color:string;
    constructor(dotObj:DotObj) {
        this.x = dotObj.x;
        this.y = dotObj.y;
        this.radius = dotObj.radius
        this.color = '#52796F';
    }

    draw(context:CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
    }
}