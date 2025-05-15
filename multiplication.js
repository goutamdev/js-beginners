function main (input) {
    const inputs = input.split(' ').map(Number);
    let mul = 1;
    for (let i = 0; i < inputs.length; i++) {
        mul *= inputs[i];
    }
   console.log("\n The Product of the "+ inputs.length + " numbers : " + mul);
     
 }
 console.log("Enter the numbers to be multiplied, separated by spaces:");
 let input = "";
 process.stdin.on('data', (chunk) => {
     input += chunk;
 });
 
 process.stdin.on('end', () => {
     main(input.trim());
 });