const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

class Symbol {
    constructor (x, y, fontSize, canvasHeight) {
        this.characters = '01010101000111110001010101110001110000011000100001ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678900101010001110001000100111111000100001001abcdefghijklmnopqrstuvwxyz0123456789';
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = 'A';
        this.canvasHeight = canvasHeight;
    }
    draw(context, context2){
        this.text = this.characters.charAt(Math.floor)
    }
}

