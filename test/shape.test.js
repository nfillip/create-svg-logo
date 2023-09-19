const svgSyntax = require('../lib/svgSyntax');
const shape = new svgSyntax.Shape("NMF","white","blue");
const circle = new svgSyntax.Circle("NMF","white","blue", "circle");
const triangle = new svgSyntax.Triangle("NMF","white","blue", "triangle");
const square = new svgSyntax.Square("NMF","white","blue", "square");

describe('TESTING', () =>{


describe('Test Shape Color', () => {
    it('Circle Shape Color', () => {
        const expected = `<circle cx="150" cy="100" r="80" fill="blue" />`;
        const actual = circle.testShapeColor();
        expect(actual).toEqual(expected);
    })
    it('Triangle Shape Color', () => {
        const expected = `<polygon points="0,200 300,200 150,0" style="fill:blue;stroke:black;stroke-width:1" />`;
        const actual = triangle.testShapeColor();
        expect(actual).toEqual(expected);
    })
    it('Square Shape Color', () => {
        const expected = `<rect x="50" y="0" width="200" height="200" fill = "blue"/>`;
        const actual = square.testShapeColor();
        expect(actual).toEqual(expected);
    })
})
describe('Test Text', () => {
    it('Shape Initials', () => {
        const expected = "NMF";
        const actual = shape.text;
        expect(actual).toEqual(expected);
    })
})
describe('Test Full Output String', () => {
    it('Circle SVG String', () => {
        const expected = `
        <svg version="1.1"
    width="300"
    height="200">
    <circle cx="150" cy="100" r="80" fill="blue" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">NMF</text>
</svg>`;
        const actual = circle.getSVGString();
        expect(actual).toEqual(expected);
    })
    it('Triangle SVG String', () => {
        const expected = `
        <svg version="1.1"
    width="300"
    height="200">
    <polygon points="0,200 300,200 150,0" style="fill:blue;stroke:black;stroke-width:1" />
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="white">NMF</text>
</svg>`;
        const actual = triangle.getSVGString();
        expect(actual).toEqual(expected);
    })
    it('Square SVG String', () => {
        const expected = `
        <svg version="1.1"
    width="300"
    height="200">
    <rect x="50" y="0" width="200" height="200" fill = "blue"/>
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="white">NMF</text>
</svg>`;
        const actual = square.getSVGString();
        expect(actual).toEqual(expected);
    })
})
})