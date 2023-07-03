class Circle {
    constructor (radius) {
        this.r = radius;

    }

    get radius() {
        return this.r;
    }

    set radius(value) {
        this.r = value;
    }

    get diameter() {
       return this.r * 2;
    } 

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    length() {
        return Math.PI * this.diameter;
    }
}

