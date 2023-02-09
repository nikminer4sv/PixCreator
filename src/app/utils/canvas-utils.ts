export function drawRectangle(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, color: string, clearBeforePainting: boolean = false) {
    ctx.beginPath();
    ctx.fillStyle = color;
    if (clearBeforePainting) {
        ctx.clearRect(x, y, width, height);
    }
    ctx.rect(x, y, width, height);
    ctx.fill();
    ctx.closePath();
}

export function calculateRectangleCoords(x: number, y: number): Coords {
    return {
        x: x - x % 50, 
        y: y - y % 50
    };
}


export interface Coords {
    x: number,
    y: number
}