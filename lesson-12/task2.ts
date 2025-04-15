function processData(
  param: string | number | boolean | number[]
): string | number | boolean | number[] {
  if (Array.isArray(param)) {
    if (param.length === 0) {
      return "Empty array: []";
    } else {
      return param.map((num) => num * num);
    }
  }
  switch (typeof param) {
    case "string":
      return param.toUpperCase();
    case "number":
      return param * param;
    case "boolean":
      return !param;
    default:
      throw new Error("Unsupported type");
  }
}
