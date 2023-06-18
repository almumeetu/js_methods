//  array reduce ()

var numbers = [1,2,3,4,5,6];

var sum = numbers.reduce((preValue, currentValue) => {
    return preValue + currentValue;
}, 0)

console.log(sum); // 21


////////////////////
///////////////////////////
///////////

var numbers = [1,2,3,4,5,6];

var sum = numbers.reduce((preValue, currentValue, currentIndex, mainArray) => {
    return preValue + currentValue;
}, 0)

console.log(sum); // 21


// array.map ()

var numbers = [1,2,3,4,5,6,7];

 const result = numbers.map((num) => {
    return 2 + num;
})
console.log(numbers);
console.log(result);