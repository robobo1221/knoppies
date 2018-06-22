/* Functions by Robin Stikfort */

function intergrateResult(inputText){
    // Create li node
    var node = document.createElement("li");

    // Create input text node
    var text = document.createTextNode(inputText);

    // Add li infront of the input text
    node.appendChild(text);

    // Get list information
    var list = document.getElementById("list");

    // Add input text to the list
    list.appendChild(node);
}

document.getElementById("addCharAmount").onclick = function() {;

    // get the input text
    var inputText = document.getElementById("textAdd").value;
    // Only keep letters
        inputText = inputText.replace(/[\d\s]/g,'');

    // add input to the list
    intergrateResult(inputText.length);
}

document.getElementById("addReverseText").onclick = function() {;

    // get the input text
    var inputText = document.getElementById("textAdd").value;
    // Remove all numbers
        inputText = inputText.replace(/[0-9]/g,'');

    //Reverse text
    var splitText = inputText.split("");
    var reverseArray = splitText.reverse();
    var joinedArray = reverseArray.join("");

    // add input to the list
    intergrateResult(joinedArray);
}

// Check if the current text contains any uppercases
function isUpperCase(char){
    return char != char.toUpperCase();
}


// Convert all uppercases of the input to lowercase and vise versa
function convertCase(string){
    var stringLength = string.length;

    //Create array from text
    var textArray = string.split("");

    // Loop through the array to see wich char is an uppercase or lowrcase
    // Then inverse the uppercase to lowercase and vise versa
    for (var i = 0; i < stringLength; i++){
        var textPosition = textArray[i];

        if (isUpperCase(textPosition)){
            textArray[i] = textPosition.toUpperCase();
        } else {
            textArray[i] = textPosition.toLowerCase();
        }
    }

    // Convert the array to string
    return textArray.join("");
}

document.getElementById("addSwitchCases").onclick = function() {;

    // get the input text
    var inputText = document.getElementById("textAdd").value;
    // Convert all uppercases of the input to lowercase and vise versa
        inputText = convertCase(inputText);

    // add input to the list
    intergrateResult(inputText);
}
