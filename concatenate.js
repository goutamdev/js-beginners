function main (input) {
    const words = input.trim().split(",").map(String);
    if (words.length <= 2) {
        console.log("Please enter at least two words.");
        return;
    }
    let concatenatedString = "";
    for (let i = 0; i < words.length; i++) {
        concatenatedString += " "+words[i];
    }
    console.log("Concatenated String: " + concatenatedString);
    console.log("Concatenated String Length: " + concatenatedString.length);
    console.log("Concatenated String in Uppercase: " + concatenatedString.toUpperCase());
    console.log("Concatenated String in Lowercase: " + concatenatedString.toLowerCase());
     
 }
 console.log("Enter words separated by comma:");
 let input = "";
 process.stdin.on('data', (chunk) => {
     input += chunk;
 });
 
 process.stdin.on('end', () => {
     main(input.trim());
 });