import { DotObj } from "./dotObj";
import { MousePos } from "./dotObj";

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
}

class Dot {
    x: number;
    y: number;
    radius: number;
    constructor(dotObj:DotObj) {
        this.x = dotObj.x;
        this.y = dotObj.y;
        this.radius = dotObj.radius
    }

    draw(context:CanvasRenderingContext2D ) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = '#52796F';
        context.fill();
    }
}