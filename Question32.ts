// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// Make a list of current_users (case insensitive)
const current_users: string[] = ['John', 'Alice', 'Bob', 'Eve', 'Carol'];

// Make a list of new_users
const new_users: string[] = ['Alice', 'David', 'John', 'frank', 'Grace'];

// Function to check if a username is already in use (case insensitive)
function isUsernameTaken(username: string): boolean {
  return current_users.some((currentUsername) => currentUsername.toLowerCase() === username.toLowerCase());
}

// Loop through new_users
for (const newUser of new_users) {
  if (isUsernameTaken(newUser)) {
    console.log(`Username '${newUser}' is already taken. Please choose a different username.`);
  } else {
    console.log(`Username '${newUser}' is available.`);
  }
}
