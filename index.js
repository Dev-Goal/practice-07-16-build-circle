// Hình tròn
const Circle = function (radius) {
  this.radius = radius;
  this.getRadius = function () {
    return radius;
  };
  this.getArea = function () {
    return Math.PI * radius * radius;
  };
};
const circle = new Circle(2);
const radius = circle.getRadius();
const areaCir = circle.getArea();

console.log(`Circle has radius: ${radius} , area: ${areaCir}`);

// Hình chữ nhật
const Rectangle = function (width, height) {
  this.widthRac = width;
  this.height = height;

  this.getWidth = function () {
    return width;
  };
  this.getHeight = function () {
    return height;
  };
  this.getArea = function () {
    return width * height;
  };

};
const rectangle = new Rectangle(5, 4);
const widthRac = rectangle.getWidth();
const height = rectangle.getHeight();
const areaRac = rectangle.getArea();

console.log(`Rectangle has width ${widthRac} , height ${height} , area ${areaRac}`);

// Hình vuông
const Square = function (width) {
  this.widthSqua = width;
  this.getWidth = function () {
    return width;
  };
  this.getArea = function () {
    return width ** 2;
  };
};
const square = new Square(2);
const widthSqua = square.getWidth();
const areaSqua = square.getArea();

console.log(`Square has width ${widthSqua} , area ${areaSqua}`);
