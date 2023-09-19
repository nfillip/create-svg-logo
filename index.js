//Install packages for app fs and inquirer
const inquirer = require('inquirer');
const fs = require('fs');
const svgSyntax = require('./lib/svgSyntax');
let inputValues;
// FUNCTIONS
//function init: build command line questions
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'what text do you want (ONLY 3 CHARACTERS): ',
            name: 'text'
        },
        {
            type: 'input',
            message: 'what color text do you want? : ',
            name: 'textColor'
        },
        {
            type: 'input',
            message: 'what color shape do you want? : ',
            name: 'shapeColor'
        },
        {
            type: 'rawlist',
            message: 'Which shape do you want?: ',
            choices: ["circle", "triangle", "square"],
            name: 'shape',
        }
    ]).then((data) => {
        const svgString = buildSVG(data);
        inputValues = data;
        fs.writeFile('randomLogo.svg', svgString, (err) => err ? console.error(err) : console.log('added svg file successfully!'));  
        })

    }

    
function buildSVG(data) {
    const {text,textColor,shapeColor, shape} = data;
    
    if(shape === "circle"){
        const circle = new svgSyntax.Circle(text,textColor,shapeColor, shape);
        return circle.getSVGString();
    }else if (shape === "triangle"){
        const triangle = new svgSyntax.Triangle(text,textColor,shapeColor, shape);
        return triangle.getSVGString();
    }else if (shape === "square"){
        const square = new svgSyntax.Square(text,textColor,shapeColor, shape);
        return square.getSVGString();
    }else {
        console.log("ERROR: shape variable not within edge conditions")
    }
    

}
//CALL TO FUNCTIONS
init();

module.exports = {
    inputValues
};




// function: choose which class to go to
// function buildSVG(data) {
//     const {text,textColor,shapeColor, shape} = data;
    
//     if(shape === "circle"){
//         const circle = new Circle(text,textColor,shapeColor, shape);
//         return circle.getSVGString();
//     }else if (shape === "triangle"){
//         const triangle = new Triangle(text,textColor,shapeColor, shape);
//         return triangle.getSVGString();
//     }else if (shape === "square"){
//         const square = new Square(text,textColor,shapeColor, shape);
//         return square.getSVGString();
//     }else {
//         console.log("ERROR: shape variable not within edge conditions")
//     }
    

// }
// //class constructors
// class Shape {
//     constructor(text, textColor, shapeColor){
//         this.text = text;
//         this.textColor = textColor;
//         this.shapeColor = shapeColor
//     }
// }

// class Circle extends Shape {
//     constructor(text, textColor, shapeColor, shape){
//         super(text, textColor, shapeColor);
//         this.shape = shape;
//     }
//     getSVGString() {
//         return `
//         <svg version="1.1"
//     width="300"
//     height="200">
//     <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
//     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
// </svg>`
//     }
// }

// class Triangle extends Shape {
//     constructor(text, textColor, shapeColor, shape){
//         super(text, textColor, shapeColor);
//         this.shape = shape;
//     }
//     getSVGString() {
//         return `
//         <svg version="1.1"
//     width="300"
//     height="200">
//     <polygon points="0,200 300,200 150,0" style="fill:${this.shapeColor};stroke:black;stroke-width:1" />
//     <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
// </svg>`
//     }
// }

// class Square extends Shape {
//     constructor(text, textColor, shapeColor, shape){
//         super(text, textColor, shapeColor);
//         this.shape = shape;
//     }
//     getSVGString() {
//         return `
//         <svg version="1.1"
//     width="300"
//     height="200">
//     <rect x="50" y="0" width="200" height="200" fill = "${this.shapeColor}"/>
//     <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
// </svg>`
//     }
// }