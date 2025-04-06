// task 1
function sumSliceArray(arr, first, second) {
  if (isNaN(first) || isNaN(second)) {
    throw new TypeError("Arguments should be numbers");
  }
  if (first < 0 || second < 0 || first > arr.length || second > arr.length) {
    throw new RangeError("Indixes are larger than arr length");
  }
  return arr[first - 1] + arr[second - 1];
}

// task 2
function checkAge() {
  let name = prompt("Write name");
  let age = prompt("Write age");
  let status = prompt("Write status");

  const consts = {
    statuses: ["admin", "moderator", "user"],
    minAge: 18,
    maxAge: 70,
  };

  if (!name || !age || !status) {
    throw new Error("Field is empty");
  }

  if (isNaN(age)) {
    throw new TypeError("Age must be a number");
  }

  if (age < consts.minAge || age > consts.maxAge) {
    throw new RangeError("You can watch a movie");
  }

  if (!consts.statuses.includes(status)) {
    throw new EvalError("Invalid status");
  }
  alert("You can watch a movie");
}

// task 3
function calcRectangleArea(width, height) {
  if (!Number.isFinite(width) || !Number.isFinite(height)) {
    throw new TypeError("Not correct type.");
  }
  return width * height;
}

// task 4
function getUser(id) {
  if (id < 0) {
    throw new Error("ID is negative");
  }
  return { id: id };
}

function getUsers(ids) {
  let users = [];

  ids.forEach(function (id) {
    try {
      let user = getUser(id);
      users.push(user);
    } catch (error) {
      alert(error.message);
    }
  });
  return users;
}

// task 5
class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = "MonthException";
  }
}

function showMonthName(month) {
  month--;
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[month] !== undefined) {
    return months[month];
  } else {
    throw new MonthException("incorrect number");
  }
}

// advanced task
class NegativeNumberError extends Error {
  constructor(message) {
    super(message);
    this.name = "NegativeNumberError";
  }
}

class ZeroNumberError extends Error {
  constructor(message) {
    super(message);
    this.name = "ZeroNumberError";
  }
}

function processData(arr) {
  let processedArr = [];
  try {
    arr.forEach(function (number) {
      if (number > 0) {
        processedArr.push(number * number);
      }
      if (number < 0) {
        throw new NegativeNumberError("negative numbers are not allowed");
      }
      if (number === 0) {
        throw new ZeroNumberError("zero is not allowed");
      }
      return processedArr;
    });
  } catch (error) {
    if (error instanceof NegativeNumberError) {
      return "negative numbers are not allowed";
    }
    if (error instanceof ZeroNumberError) {
      return "zero is not allowed";
    } else {
      return "unknown error occurred";
    }
  }
}

//new commit
