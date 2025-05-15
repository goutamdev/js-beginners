function main (input) {
    const inputs = input.split('\n');
    const index = parseInt(inputs[1]);
    if (isNaN(index) || index < 0 || index >= inputs[0].length) {
        console.log("Please enter a valid index.");
        return;
    }
    const str = inputs[0];
    const char = str.charAt(index);
    console.log("The character at index " + index + " is: " + char);
     
 }
 console.log("Enter the string and index, in the separate lines:");
 let input = "";
 process.stdin.on('data', (chunk) => {
     input += chunk;
 });
 
 process.stdin.on('end', () => {
     main(input.trim());
 });