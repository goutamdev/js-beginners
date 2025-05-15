function main (input) {
    const inputs = input.split(' ').map(Number);
    let sum = 0;
    for (let i = 0; i < inputs.length; i++) {
        sum += inputs[i];
    }
   console.log("\n The Sum of the "+ inputs.length + " numbers : " + sum);
     
 }
 console.log("Enter the numbers to be added, separated by spaces:");
 let input = "";
 process.stdin.on('data', (chunk) => {
     input += chunk;
 });
 
 process.stdin.on('end', () => {
     main(input.trim());
 });