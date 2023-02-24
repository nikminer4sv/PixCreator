export function drawRectangle(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, color: string) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.rect(x, y, width, height);
    ctx.fill();
    ctx.closePath();
}

export function calculateRectangleCoords(x: number, y: number, cellSize: number): Coords {
    return {
        x: x - x % cellSize, 
        y: y - y % cellSize
    };
}


export interface Coords {
    x: number,
    y: number
}

export function fillMap(ctx: CanvasRenderingContext2D, color: string) {
    drawRectangle(ctx, 0, 0, 900, 900, color);
}

export function randomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

export function randomColor(): string {
    return `rgb(${randomInt(256)}, ${randomInt(256)}, ${randomInt(256)})`
}