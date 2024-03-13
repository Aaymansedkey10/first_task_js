// start task Eng/Basmala
// 1- Calculate the sum of numbers within an array with 5 element
document.write("1. sum within an array"  + "<br>");
let numbers2 = [1,3,4,2,1,5,6];
let sum = 0 ;
for (i=0 ; i<numbers2.length ; i++){
        sum+=numbers2[i];
        document.write (sum + "<br>");
}
// 2-Using built in Function Remove the spaces found in a string
// the function is trim ();
document.write("2. the result of trim"  + "<br>");
let name = "      aymansedkey        ";
document.write ("the result without trim =>" + name + "<br>"); 
document.write ("the result with trim =>" + name.trim() + "<br>");

// 3-Return a Boolean if a number is divisible by 10
document.write("3. divisible by 10"  + "<br>");
let num1 = Number (prompt("Please, Enter Number?"));
if (num1%10 == 0) {
        document.write ("Your"+ " " +num1+" " + "is divisible by 10 "+ "<br>");
}else {
        document.write ("Your"+ " " +num1+" " + "is not divisible by 10 "+ "<br>");       
}

// 4- Using Function to return the max between 2 numbers (ternary operator : search)
// the function is max
document.write("4. max number"  + "<br>"); 
let numbers1 = [1,2,5,90,40,30,50];
document.write(Math.max(...numbers1)+ "<br>");

// part 2 
// 1- What is the data type of “Hello world”? => string
// 2- what happen when you put + between string and number? => concatenation 
document.write("2. concatenation"  + "<br>");
let num = 10 ;
let string = "hello";
let sum1 = num+string;
document.write(sum1+ "<br>");

// 3- what is the && operator represent in JS => and 

// Part 3: Search
// 1- How I can Access all data in array without using index
document.write("1. Access all data in array "  + "<br>");
let numbers = [ 4 , 9 , 16 , 25];
 document.write("A. For In" + "<br>");
for(index in numbers) {
        // document.write("the result of forIn is" + " " + index + "<br>") //index 0 , 1 , 2  
        document.write("the result of forIn is" + " " + numbers + "<br>") //contant 
}

document.write("B. For Of"  + "<br>");
for(index of numbers) {
     document.write("the result of forOf is" + " " + index + "<br>")   
}
// // End Task For Eng/Basmala