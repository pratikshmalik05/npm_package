// Test all String Toolkit functions

const tools = require("./index");

console.log("1. Capitalize:", tools.capitalize("hello"));
console.log("2. Capitalize words:", tools.capitalizeWords("hello world"));
console.log("3. Reverse:", tools.reverse("hello"));
console.log("4. Count words:", tools.countWords("hello world"));
console.log("5. Camel case:", tools.toCamelCase("hello_world-example"));
console.log("6. Kebab case:", tools.toKebabCase("helloWorld Example"));
console.log("7. Snake case:", tools.toSnakeCase("helloWorld Example"));
console.log("8. Remove extra spaces:", tools.removeExtraSpaces("  hello   world  "));
console.log("9. Is palindrome:", tools.isPalindrome("madam"));
console.log("10. Truncate:", tools.truncate("JavaScript Toolkit", 10));
console.log("11. Count occurrences:", tools.countOccurrences("banana", "an"));
console.log("12. Slugify:", tools.slugify("Hello World!"));
console.log("13. Is blank:", tools.isBlank("   "));
