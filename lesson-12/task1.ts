// rewrite this code in TypeScript

// const employee = {
// 	name: "Alex Brown",
// 	profession: "doctor",
// 	worworkingHoursPerDay: 10
// };

type Employee = {
  name: string;
  profession: string;
  worworkingHoursPerDay: number;
};

type PremiumData = {
  isPremium: true;
  premium: 1000;
};

const employee: Employee = {
  name: "Alex Brown",
  profession: "doctor",
  worworkingHoursPerDay: 10,
};

const premiumData: PremiumData = {
  isPremium: true,
  premium: 1000,
};

// const payPerHour = 32;
// const worworkingDays = 14;
const payPerHour: number = 32;
const worworkingDays: number = 14;

// const experienceСoefficients = [1, 1.1, 1.2, 1.3, 1.5];
const experienceСoefficients: number[] = [1, 1.1, 1.2, 1.3, 1.5];

const getSalaryInfo = (
  employeeData: Employee,
  premiumData: PremiumData,
  payPerHour: number,
  worworkingDays: number,
  experienceСoefficients: number
) => {
  let salary: number;
  if (premiumData.isPremium) {
    salary =
      employeeData.worworkingHoursPerDay *
        payPerHour *
        worworkingDays *
        experienceСoefficients +
      premiumData.premium;
  } else {
    salary =
      employeeData.worworkingHoursPerDay *
      payPerHour *
      worworkingDays *
      experienceСoefficients;
  }
  return `${employee.profession} ${employee.name} has a salary of ${salary}$ this month`;
};

const salaryInfo = getSalaryInfo(
  employee,
  premiumData,
  payPerHour,
  worworkingDays,
  experienceСoefficients[2]
);
