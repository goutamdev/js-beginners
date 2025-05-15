function main (input) {
    const num = parseFloat(input);
    if (isNaN(num)) {
        console.log("Please enter a valid number.");
        return;
    }
    if (num > 0) {
        console.log(num + " is Positive");
    } else if (num < 0) {
        console.log(num + " is Negative");
    } else {
        console.log(num + " is Zero");
    }
     
 }
 console.log("Enter the number:");
 let input = "";
 process.stdin.on('data', (chunk) => {
     input += chunk;
 });
 
 process.stdin.on('end', () => {
     main(input.trim());
 });