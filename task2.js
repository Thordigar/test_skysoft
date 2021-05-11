const sequenceOfNumbers = number => {
    if (typeof number !== "number") return "No numbers";
    const resultArray = [];
    for (let i = 1; i <= number; i++) {
      let result = "";
      if (i % 3 === 0) result += "three";
      if (i % 5 === 0) result += "five";
      if (result) resultArray.push(result);
      else resultArray.push(i);
    }
    return resultArray.toString();
  };
  
  console.log(sequenceOfNumbers("check string")); // No numbers
  console.log(sequenceOfNumbers(15)); // 1,2,three,4,five,three,7,8,three,five,11,three,13,14,threefive
  console.log(sequenceOfNumbers("5")); // No numbers
  console.log(sequenceOfNumbers(30)); // 1,2,three,4,five,three,7,8,three,five,11,three,13,14,threefive,16,17,three...29,threefive