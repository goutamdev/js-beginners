function main (input) {
    const lines = input.split('\n');
    const str = lines[0];
    const searchWord = lines[1];
    if (str.includes(searchWord)) {
        console.log("The word is present in the sentence.");
    } else {
        console.log("The word is not present in the sentence.");
    }
    console.log("The sentence is: " + str);
    console.log("The searched word is: " + searchWord);
    
 }
 console.log("Enter the sentence and searched word in two separate lines:");
 let input = "";
 process.stdin.on('data', (chunk) => {
     input += chunk;
 });
 
 process.stdin.on('end', () => {
     main(input.trim());
 });