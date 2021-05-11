const isValid = string => {
    if (string.length <= 1) return false;
  
    let matchingOpeningBracket, character;
    const stack = [];
    const openingBrackets = ["[", "{", "("];
    const closingBrackets = ["]", "}", ")"];
  
    for (let i = 0; i < string.length; i++) {
      character = string[i];
      if (closingBrackets.indexOf(character) == -1) 
          stack.push(character) 
      else {
          matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(character)];
          if (stack.length === 0 || stack.pop() !== matchingOpeningBracket)  
              return 'NO'; 
      } 
    }
    return 'YES';
  };
  
  console.log(isValid(")(")); // NO
  console.log(isValid("{[()}]")); // NO
  console.log(isValid("[(){}]")); // YES
  console.log(isValid("({[]})")); // YES
  console.log(isValid("{}()[]")); // YES