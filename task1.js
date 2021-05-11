const checkVowel = string => {
    if (typeof string !== "string") return "No string";
    
    const vowels = ["a", "e", "i", "o", "u"];
    const ResultArray = [];
    let total = 0;
    
    vowels.forEach(vowel => {
        const lettersCount = string
        .toLowerCase()
        .split("")
        .filter(el => el == vowel).length;
        
        if (lettersCount) {
            total += lettersCount;
            ResultArray.push(`${[vowel]}:${[lettersCount]}`);
        }
    });

    if (!total) 
        return "No vowels"
    else 
    return `${ResultArray.join(", ")}, total:${total}`;

};

console.log(checkVowel("hello")); // e:1 o:1 total:2
console.log(checkVowel("why not")); // o:1 total:1
console.log(checkVowel(111)); // no string
console.log(checkVowel("jst n vwls")); // no vowels
console.log(checkVowel("check all vowels: a a e i o o o u u u")); // a:3 e:2 i:1 o:4 u:3 total:14