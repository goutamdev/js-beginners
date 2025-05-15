function main (input) {
    const minute = parseInt(input);
    if (isNaN(minute)) {
        console.log("Please enter a valid number.");
        return;
    }
   const seconds = minute * 60;
    console.log(minute + " minutes is equal to " + seconds + " seconds");
     
 }
 console.log("Enter minute:");
 let input = "";
 process.stdin.on('data', (chunk) => {
     input += chunk;
 });
 
 process.stdin.on('end', () => {
     main(input.trim());
 });