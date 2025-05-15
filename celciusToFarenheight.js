function main (input) {
    const celcius = parseFloat(input);
    if (isNaN(celcius)) {
        console.log("Please enter a valid number.");
        return;
    }
    const farenheit = (celcius * 9/5) + 32;
    console.log(celcius + "°C is equal to " + farenheit + "°F");
     
 }
 console.log("Enter the temperature in Celcius:");
 let input = "";
 process.stdin.on('data', (chunk) => {
     input += chunk;
 });
 
 process.stdin.on('end', () => {
     main(input.trim());
 });