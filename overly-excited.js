// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray, char, multiplier) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) { //For each word...
        buildMeUp += theWordArray[i]; //Add it to the string.
        if((i + 1) % 3 === 0){ // If it's on the third word...
            for(let j = 0; j < multiplier; j++){ //Add the desired character a number of times.
            buildMeUp += char
            }
        }
        buildMeUp += " " // Add a space
        console.log(buildMeUp);
    }

}

// Invoke the function and pass in the array
addExcitement(sentence, "?", 4)