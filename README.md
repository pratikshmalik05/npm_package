# String Toolkit

A beginner-friendly JavaScript package with 13 useful string functions. The code uses basic loops, conditions, and built-in string methods.

## Installation

```bash
npm install
```

## Try the functions

```js
const tools = require("./index");

console.log(tools.capitalize("hello")); // Hello
console.log(tools.reverse("hello")); // olleh
console.log(tools.countWords("hello world")); // 2
console.log(tools.toCamelCase("hello_world")); // helloWorld
console.log(tools.toKebabCase("helloWorld")); // hello-world
console.log(tools.toSnakeCase("helloWorld")); // hello_world
console.log(tools.removeExtraSpaces("  hello   world ")); // hello world
console.log(tools.isPalindrome("madam")); // true
console.log(tools.truncate("JavaScript Toolkit", 10)); // JavaSc...
console.log(tools.countOccurrences("banana", "an")); // 2
console.log(tools.slugify("Hello World!")); // hello-world
console.log(tools.isBlank("   ")); // true
```

## All available functions

1. `capitalize(text)` - Makes the first letter uppercase.
2. `capitalizeWords(text)` - Makes the first letter of each word uppercase.
3. `reverse(text)` - Reverses the text.
4. `countWords(text)` - Counts words.
5. `toCamelCase(text)` - Converts text to camelCase.
6. `toKebabCase(text)` - Converts text to kebab-case.
7. `toSnakeCase(text)` - Converts text to snake_case.
8. `removeExtraSpaces(text)` - Removes extra spaces at the beginning, end, and between words.
9. `isPalindrome(text)` - Checks whether text reads the same forwards and backwards, ignoring spaces and letter case.
10. `truncate(text, maxLength, suffix)` - Shortens text when it exceeds the maximum length.
11. `countOccurrences(text, search)` - Counts non-overlapping occurrences of a smaller string.
12. `slugify(text)` - Converts text into a simple URL-friendly slug.
13. `isBlank(text)` - Checks whether text contains only spaces or is empty.

## Run the examples

```bash
npm test
```

## Publish to npm

1. Create an account at https://www.npmjs.com/
2. Check that the package name `string-toolkit-simple-pratiksh` is available.
3. Replace `YOUR NAME` in `package.json` with your name.
4. Run these commands:

```bash
npm login
npm test
npm publish
```

## License

MIT
