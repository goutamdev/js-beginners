function main (input) {
    const number = parseInt(input);
    if (isNaN(number)) {
        console.log("Please enter a valid number.");
        return;
    }
   let square = number * number;
    console.log("The square of " + number + " is: " + square);
 }
 console.log("Enter a number to deduce square:");
 let input = "";
 process.stdin.on('data', (chunk) => {
     input += chunk;
 });
 
 process.stdin.on('end', () => {
     main(input.trim());
 });