





class Shape {
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor, shape){
        super(text, textColor, shapeColor);
        this.shape = shape;
    }
    getSVGString() {
        return `
        <svg version="1.1"
    width="300"
    height="200">
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    }
    testShapeColor() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor, shape){
        super(text, textColor, shapeColor);
        this.shape = shape;
    }
    getSVGString() {
        return `
        <svg version="1.1"
    width="300"
    height="200">
    <polygon points="0,200 300,200 150,0" style="fill:${this.shapeColor};stroke:black;stroke-width:1" />
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    }
    testShapeColor() {
        return `<polygon points="0,200 300,200 150,0" style="fill:${this.shapeColor};stroke:black;stroke-width:1" />`
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor, shape){
        super(text, textColor, shapeColor);
        this.shape = shape;
    }
    getSVGString() {
        return `
        <svg version="1.1"
    width="300"
    height="200">
    <rect x="50" y="0" width="200" height="200" fill = "${this.shapeColor}"/>
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    }
    testShapeColor() {
        return `<rect x="50" y="0" width="200" height="200" fill = "${this.shapeColor}"/>`
    }
}


module.exports = {
    Shape,
    Square,
    Circle,
    Triangle,


};