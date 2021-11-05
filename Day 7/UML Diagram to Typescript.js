//Converting UML Diagram to Typescript
class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }

    getRadius(){return this.radius;}
    setRadius(){this.radius = radius;}
    getColor(){return this.color;}
    setColor(){this.color = color;}
    toString(){
        return `Circle [radius: ${this.radius}, color: ${this.color}]`;
    }
    getArea(){
        return 3.14159 * this.radius * this.radius;
    }
    getCircumference(){
        return 2 * 3.14159 * this.radius;
    }
}

let diagram = new Circle(1, "red");
console.log(diagram.getRadius());
console.log(diagram.getColor());
console.log(diagram.toString());
console.log(diagram.getArea());
console.log(diagram.getCircumference());
