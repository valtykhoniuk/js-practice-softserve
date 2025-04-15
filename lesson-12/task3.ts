type Triangle = {
  type: "triangle";
  base: number;
  height: number;
};

type Rectangle = {
  type: "rectangle";
  width: number;
  height: number;
};

type Circle = {
  type: "circle";
  radius: number;
};

type Figure = Triangle | Rectangle | Circle;

function getFigureInfo(figure: Figure): string {
  switch (figure.type) {
    case "triangle":
      const triangleArea = 0.5 * figure.base * figure.height;
      return `Triangle with base ${figure.base} and height ${figure.height} has an area of ${triangleArea}`;
    case "rectangle":
      const rectangleArea = figure.width * figure.height;
      return `Rectangle with width ${figure.width} and height ${figure.height} has an area of ${rectangleArea}`;
    case "circle":
      const circleArea = Math.PI * Math.pow(figure.radius, 2);
      return `Circle with radius ${
        figure.radius
      } has an area of ${circleArea.toFixed(2)}`;
    default:
      return "Unknown figure";
  }
}
