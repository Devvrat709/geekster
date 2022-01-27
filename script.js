// 25th Jan 2022

// Assingment 1 - Number is greater 2han 10

// var number = 11
// if(number>=10) console.log("Greater than 10")
// else if(number===10) console.log("Equal to 10")
// else console.log("Less than 10")

// Assignment 2- Find the greatest number among three numbers.
// var number1 = 1154
// var number2 = 200
// var number3 = 304

// if(number1 > number2 && number1> number3) console.log(number1 + " is greatest number")
// if(number2 > number1 && number2> number3) console.log(number2 + " is greatest number")
// if(number3 > number1 && number3> number2) console.log(number3 + " is greatest number")

// 26 Jan 2022

// Assingment 1 - Minimum number between 3 numbers using promt

// var num1 = prompt("enter the first number")
// var num2 = prompt("enter the second number")
// var num3 = prompt("enter the third number")
// parseInt(num1)
// parseInt(num2)
// parseInt(num3)

// if(num1 < num2 && num1< num3) alert(num1 + " is minimum number")
// if(num2 < num1 && num2< num3) alert(num2 + " is minimum number")
// if(num3 < num1 && num3< num2) alert(num3 + " is minimum number")


// Assingment 2 - check letter is vowel or consonent

// var letter = prompt("Enter the letter")

// if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") alert("letter is vowel")
// else alert("letter is consonent")


// 27th Jan 2022 

// Assignment 1
var inputArray = prompt("size");
 var elements = []

for(var i=0; i<inputArray; i++) {
	elements[i] = prompt('Enter Element ');
}
elements.sort((a,b)=>{
    return a-b
})
console.log('maximun number is:- ',elements[elements.length-1])