// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// // i predict two random cars each time//
// console.log(randomCar)
// console.log(otherRandomCar)
// // i was wrong... 'randomCar' was the first index in Cars.


// // --------->EXAMPLE 2<---------//
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// // console.log(name);  didnt need this console log
// console.log(otherName); 
// // Elon


// -------->EXAMPLE 3<---------//

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
//     //const {name,age,height}=person
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);



// // -------->EXAMPLE 4<--------//

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers; =2
// const [,,,second] = numbers;=5
// const [,,,,,,,,third] = numbers;=2
// //Predict the output
// console.log(first == second); =false
// console.log(first == third);=true


// --------->EXAMPLE 5<----------//
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);








