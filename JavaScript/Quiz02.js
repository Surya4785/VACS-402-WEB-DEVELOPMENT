// write a program to find the vowels in the given array as well as count the number of vowels in that array using
//  function in javaScript. let arr = ["Hello Java Script World"]

function findVowels(arr) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    let vowelLetters = [];

    arr.forEach(str => {
        for (let char of str.toLowerCase()) {
            if (vowels.includes(char)) {
                vowelLetters.push(char);
                vowelCount++;
            }
        }
    });

    return {
        vowels: vowelLetters,
        count: vowelCount
    };
}

let arr = ["Hello Java Script World"];
let result = findVowels(arr);

console.log("Vowels in the array: " + result.vowels.join(', '));
console.log("Number of vowels: " + result.count);
