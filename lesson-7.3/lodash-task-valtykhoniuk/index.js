import _ from "lodash";

/*
`getActiveUsers(users)`: Returns an array of active users.
`getSortedUsersByAge(users)`: Returns an array of users sorted by age in ascending order.
`getUserNames(users)`: Returns an array of all users' names.
`getUserById(users, id)`: Returns the user object by the given id. If the user is not found, returns `null`.
`addUser(users, newUser)`: Adds a new user to the array of users. Returns the updated array of users.
`removeUserById(users, id)`: Removes the user by the given id. Returns the updated array of users.
`updateUser(users, updatedUser)`: Updates the information of a user by their id. If the user is not found, the array of users remains unchanged.
*/

export function getActiveUsers(users) {
  return _.filter(users, { active: true });
}

export function getSortedUsersByAge(users) {
  return _.sortBy(users, ["age"]);
}

export function getUserNames(users) {
  return _.map(users, "name"); //'name' is shorthand for user => user.name
}

export function getUserById(users, id) {
  return _.find(users, { id }) || null;
}

export function addUser(users, newUser) {
  return [...users, newUser];
}

export function removeUserById(users, id) {
  return _.filter(users, (user) => user.id !== id);
}

export function updateUser(users, updatedUser) {
  return _.map(users, (user) =>
    user.id === updateUser.if ? { ...user, ...updatedUser } : user
  );
}
