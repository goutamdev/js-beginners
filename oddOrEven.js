function main (input) {
    const num = parseInt(input);
    if (isNaN(num)) {
        console.log("Please enter a valid number.");
        return;
    }
    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
     
 }
 console.log("Enter the numbers to know if it's Odd or Even:");
 let input = "";
 process.stdin.on('data', (chunk) => {
     input += chunk;
 });
 
 process.stdin.on('end', () => {
     main(input.trim());
 });