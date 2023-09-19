//Install packages for app fs and inquirer
const inquirer = require("inquirer");
const fs = require("fs");
const svgSyntax = require("./lib/svgSyntax");
let inputValues;

// FUNCTIONS
//function init: build command line questions
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "what text do you want (ONLY 3 CHARACTERS): ",
        name: "text",
        validate: isThreeOrLess,
      },
      {
        type: "input",
        message: "what color text do you want? : ",
        name: "textColor",
        validate: isHex,
      },
      {
        type: "input",
        message: "what color shape do you want? : ",
        name: "shapeColor",
        validate: isHex,
      },
      {
        type: "rawlist",
        message: "Which shape do you want?: ",
        choices: ["circle", "triangle", "square"],
        name: "shape",
      },
    ])
    .then((data) => {
      const svgString = buildSVG(data);
      inputValues = data;
      fs.writeFile("./examples/randomLogo.svg", svgString, (err) =>
        err ? console.error(err) : console.log("Generated randomLogo.svg!")
      );
    });
}
//function: tests if input value is too large
const isThreeOrLess = async (input) => {
  if (input.length > 3) {
    console.log(" \033[91m Please Only Input 3 or Less Characters\033[0m");
    return false;
  } else {
    return true;
  }
};
//function: tests if input value has numbers and a # for hexadec colors
const isHex = async (input) => {
  const hasNumber = new RegExp("^(?=.*\\d).+$");
  const hasHash = input.indexOf("#");
  if (hasNumber.test(input) && hasHash === -1) {
    console.log(" \033[91m Please use a # before your HexDec Number\033[0m");
    return false;
  } else {
    return true;
  }
};

//function: tests what the shape input was from user and builds a constructor function from this value then calls its prototype method
function buildSVG(data) {
  const { text, textColor, shapeColor, shape } = data;

  if (shape === "circle") {
    const circle = new svgSyntax.Circle(text, textColor, shapeColor, shape);
    return circle.getSVGString();
  } else if (shape === "triangle") {
    const triangle = new svgSyntax.Triangle(text, textColor, shapeColor, shape);
    return triangle.getSVGString();
  } else if (shape === "square") {
    const square = new svgSyntax.Square(text, textColor, shapeColor, shape);
    return square.getSVGString();
  } else {
    console.log("ERROR: shape variable not within edge conditions");
  }
}
//CALL TO FUNCTIONS
init();

module.exports = {
  isThreeOrLess,
  isHex,
};
