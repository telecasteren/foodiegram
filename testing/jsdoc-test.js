/**
 * This will greet the user using their username and id
 * @param {string} userName This is the users name
 * @param {number} id This is the Noroff ID from X system
 * @returns {string} The greeting message is returned
 * @example
 * ```js
 * // Use this function to greet users when they land on the homepage
 * const result = greetUser("Ola", 10);
 * // Returns a greeting
 * // Hello Ola, you are id 10.
 * ```
 */
function greetUser(userName, id) {
  return `Hello ${userName}, you are id ${id}.`;
}

const result = greetUser("Ola", 10);
console.log(result);
