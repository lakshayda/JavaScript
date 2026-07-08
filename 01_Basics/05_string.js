const name = "John Doe";
const repoCount = 56;

//console.log(name + repoCount + " Value");

// We use Backticks to create a template string in JavaScript. Template strings are also called template literals. Template strings are enclosed by backticks (` `) instead of double or single quotes. Template strings can contain placeholders. Placeholders are indicated by the dollar sign and curly braces (${expression}).
// The expressions in the placeholders and the text between the backticks (` `) get passed to a function.

console.log(`Hello, my dog is ${repoCount} years old.`);


const gameName = new String("Call of Duty ");

console.log(gameName[4]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(8));
console.log(gameName.indexOf("y"));

