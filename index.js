// String Toolkit
// All functions use simple JavaScript methods and basic loops.

function capitalize(text) {
  if (text.length === 0) return "";
  return text[0].toUpperCase() + text.slice(1);
}

function capitalizeWords(text) {
  let words = text.split(" ");
  let result = [];

  for (let word of words) {
    if (word.length === 0) {
      result.push("");
    } else {
      result.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
  }

  return result.join(" ");
}

function reverse(text) {
  let result = "";

  for (let i = text.length - 1; i >= 0; i--) {
    result = result + text[i];
  }

  return result;
}

function countWords(text) {
  let words = text.trim().split(" ");
  let count = 0;

  for (let word of words) {
    if (word !== "") {
      count++;
    }
  }

  return count;
}

function toCamelCase(text) {
  let words = text.split(/[-_ ]+/);
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();

    if (word.length > 0) {
      if (i === 0) {
        result = result + word;
      } else {
        result = result + word[0].toUpperCase() + word.slice(1);
      }
    }
  }

  return result;
}

function toKebabCase(text) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let character = text[i];

    if (character === " " || character === "_") {
      if (result.length > 0 && result[result.length - 1] !== "-") {
        result = result + "-";
      }
    } else {
      if (character === character.toUpperCase() &&
          character !== character.toLowerCase() &&
          i > 0 &&
          result[result.length - 1] !== "-") {
        result = result + "-";
      }

      result = result + character.toLowerCase();
    }
  }

  return result;
}

function toSnakeCase(text) {
  return toKebabCase(text).split("-").join("_");
}

function removeExtraSpaces(text) {
  let words = text.trim().split(" ");
  let result = [];

  for (let word of words) {
    if (word !== "") {
      result.push(word);
    }
  }

  return result.join(" ");
}

function isPalindrome(text) {
  let cleaned = "";

  for (let character of text.toLowerCase()) {
    if (character !== " ") {
      cleaned = cleaned + character;
    }
  }

  return cleaned === reverse(cleaned);
}

function truncate(text, maxLength, suffix = "...") {
  if (maxLength < 0) {
    throw new Error("Maximum length cannot be negative");
  }

  if (text.length <= maxLength) {
    return text;
  }

  if (maxLength <= suffix.length) {
    return suffix.slice(0, maxLength);
  }

  return text.slice(0, maxLength - suffix.length) + suffix;
}

function countOccurrences(text, search) {
  if (search === "") return 0;

  let count = 0;
  let position = 0;

  while (true) {
    let foundAt = text.indexOf(search, position);

    if (foundAt === -1) {
      break;
    }

    count++;
    position = foundAt + search.length;
  }

  return count;
}

function slugify(text) {
  let result = "";
  let previousWasDash = false;

  text = text.toLowerCase();

  for (let character of text) {
    let isLetter = character >= "a" && character <= "z";
    let isNumber = character >= "0" && character <= "9";

    if (isLetter || isNumber) {
      result = result + character;
      previousWasDash = false;
    } else if (!previousWasDash && result.length > 0) {
      result = result + "-";
      previousWasDash = true;
    }
  }

  if (result[result.length - 1] === "-") {
    result = result.slice(0, result.length - 1);
  }

  return result;
}

function isBlank(text) {
  return text.trim().length === 0;
}

module.exports = {
  capitalize,
  capitalizeWords,
  reverse,
  countWords,
  toCamelCase,
  toKebabCase,
  toSnakeCase,
  removeExtraSpaces,
  isPalindrome,
  truncate,
  countOccurrences,
  slugify,
  isBlank
};
