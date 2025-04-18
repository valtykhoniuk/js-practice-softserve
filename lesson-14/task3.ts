function withEmploymentData(constructor: Function) {
  constructor.prototype.employmentData = "2024-04-12";
}
class Manager {
  task: string = "Simple task";
  project: string = "Simple project";

  constructor() {
    console.log("Initializing the Manager class");
  }
}
