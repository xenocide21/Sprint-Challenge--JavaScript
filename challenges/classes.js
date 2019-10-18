// 1. Copy and paste your prototype in here and refactor into class syntax.
// const CuboidMaker = function(attributes){
//     this.length = attributes.length;
//     this.height = attributes.height;
//     this.width = attributes.width;
// };
// CuboidMaker.prototype.volume = function () {
//     return this.length * this.height * this.width
// };
// CuboidMaker.prototype.surfaceArea = function () {
//     return (2* (this.length * this.height * this.width));
// };
class CuboidMaker {
    constructor(attributes) {
        this.length = attributes.length;
        this.height = attributes.height;
        this.width = attributes.width;
    }
    volume(){
        return this.length * this.height * this.width;
    }
    surfaceArea() {
        return (2* (this.length * this.width + this.length * this.height + this.width * this.height));
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    height: 5,
    width: 5,
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(attributes){
        super(attributes);
    }
    surfaceAreaCube() {
        return Math.pow(this.width, 2) * 6;
    }
}

const cube = new CubeMaker({
    length: 5,
    height: 5,
    width: 5
});

console.log(cube.volume());
console.log(cube.surfaceAreaCube());