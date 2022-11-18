// Write a program that requests a number from a user and finds the summation
// of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10.
// let number = parseInt(prompt('Enter a number: '));
// let sum = 0;
// for(let i=1; i<=number; i++){
//     sum+=i;
// }
// console.log(sum);



// Request two numbers and find only their largest common divisor.
// let num1 = parseInt(prompt('Enter first number: '));
// let num2 = parseInt(prompt('Enter second number: '));
// while(num2) {
//   let temp = num2;
//   num2 = num1 % num2;
//   num1 = temp;
// }
// console.log('largest common divisor: '+num1);



// Request a number and display all the divisors of it. For example, for number
// 8 it would be 2, 4, and 8.
// let num = parseInt(prompt('Enter a number: '));
// for(let i=2;i<=num;i++){
//     if(num%i==0){
//         console.log(i);
//     }
// }


// Define the number of digits in a requested number.
// For example, there are 4 digits in the number 6834.
// let num = parseInt(prompt('enter a number: '));
// if(num>=0 && num<10){
//     console.log('one digit');
// }
// else if(num>=10 && num<100){
//     console.log('two digit');
// }
// else if(num>=100 && num<1000){
//     console.log('three digit');
// }
// else if(num>=1000 && num<10000){
//     console.log('four digit');
// }
// else console.log('5+ digits');


// Request 10 numbers from a user and count, how many are positive, negative, or zero.
// Also, count odd and even. Display the statistics. There’s only one variable (not 10)
// needed for input by a user. 
// let i=1;
// let neg =0;
// let poz = 0;
// let zero = 0;
// let odd = 0;
// let even =0;
// while(i<=10){
//     let num = parseInt(prompt('Enter num: '));
//     if(num<0){
//         neg++;
//     }
//     else if(num>0){
//         poz++;
//     }
//     else{
//         zero++;
//     }
//     if(num % 2==0){
//         even++;
//     }else{
//         odd++;
//     }
//     i++;
// }
// console.log('Negative numbers are: '+ neg);
// console.log('Pozitive numbers are: '+ poz);
// console.log('Zero numbers are: '+ zero);
// console.log('Odd numbers are: '+ odd);
// console.log('Even numbers are: '+ even);


// Loop a calculator. Request 2 numbers and a sign, solve the problem, display the
// result and ask if the user wants one more. The loop continues until the user refuses. 
// let continueExecution = true;
// while(continueExecution){
//     let con  = prompt(`Enter true or false`);
//     con="true" ? continueExecution=true : continueExecution=false;
//     let num1 = parseInt(prompt('Enter num: ')); 
//     let num2 = parseInt(prompt('Enter num: '));
//     let operation = parseInt(prompt('Enter op: '));
//     let result=0;
//     switch(operation){
//         case '+':
//             result = num1+num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1*num2;
//             break;
//         case '/':
//             result=num1/num2;
//             break;
//         default:
//             console.log('Wrong operation');            
//     }
// }
//  console.log(result);


// Request a number from a user and ask by how many digits to move it. Move the digits and display the result (if the number 123456 needs to be moved by 2 digits, the result will be 345612).
// Loop day input like this: «Day of the week. Would you like to see the next one?»
// which continues as long as the user clicks OK.
// Display the multiplication table of all numbers from 2 to 9. Every number has to be
// multiplied by 1 to 10. 
// for(let i=2;i<=9;i++){
//     for(let k=1;k<=10;k++){
//         console.log(`Mul table with ${i} ${i*k}`);
//     }
// }
// “Guess the number” game. Suggest a user to think of a number from 0 to 100 and guess it in the following way: every loop iteration needs to divide the range of numbers in half, you represent the result as N and ask the user “Your number > N, < N or == N?” Depending on what the user said, narrow down the range. So the starting range is 0 to 100, divided in half is 50. If the user said the number is > 50, the next range is 51 to 100, and so on, until the user chooses == N. 