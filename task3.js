const checkAnagrams = (firstValue, secondValue) => {
    sortedFirstValue = firstValue
      .toString()
      .toLowerCase()
      .split("")
      .filter(value => /[a-zA-Z0-9]/.test(value))
      .sort()
      .join();
  
    sortedSecondValue = secondValue
      .toString()
      .toLowerCase()
      .split("")
      .filter(value => /[a-zA-Z0-9]/.test(value))
      .sort()
      .join();

    return sortedFirstValue === sortedSecondValue;
  };
  console.log(checkAnagrams("fin2der", "friend2")); // true
  console.log(checkAnagrams("check", "check false")); // false
  console.log(checkAnagrams("f.1.r s t", "1 . frs t")); // true
  console.log(checkAnagrams(5, 5)); // true
  console.log(checkAnagrams(28, 82)); // true
  console.log(checkAnagrams(145, 155)); // false
