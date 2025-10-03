class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    if (!Number.isInteger(width) || width <= 0) {
      throw new Error(`Width must be a positive integer. Received: ${width}`);
    }
    if (!Number.isInteger(height) || height <= 0) {
      throw new Error(`Height must be a positive integer. Received: ${height}`);
    }
    this.#width = width;
    this.#height = height;
  }

  get width() {
    return this.#width;
  }

  get height() {
    return this.#height;
  }

  getArea() {
    return this.#width * this.#height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    if (!Number.isInteger(side) || side <= 0) {
      throw new Error(`Side must be a positive integer. Received: ${side}`);
    }
    super(side, side);
  }

  getPerimeter() {
    return 4 * this.width;
  }
}

// Example usage
try {
  const rectangle = new Rectangle(5, 10);
  console.log(rectangle.width); // Output: 5
  console.log(rectangle.height); // Output: 10
  console.log(rectangle.getArea()); // Output: 50

  const square = new Square(7);
  console.log(square.width); // Output: 7
  console.log(square.height); // Output: 7
  console.log(square.getArea()); // Output: 49
  console.log(square.getPerimeter()); // Output: 28

  // Testing invalid input
  const invalidRectangle = new Rectangle(-5, 10); // Should throw an error
} catch (error) {
  console.error(error.message);
}