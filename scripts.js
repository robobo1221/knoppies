document.getElementById("addCharAmount").onclick = function() {;

    var inputText = document.getElementById("textAdd").value;
        inputText = inputText.replace(/[\d\s]/g,'');

    var inputTextLength = inputText.length;

    var node = document.createElement("li");
    var text = document.createTextNode(inputTextLength);
    node.appendChild(text);

    var list = document.getElementById("list");
    var isChild = document.getElementById("list").hasChildNodes();

    list.appendChild(node);

    if(isChild) list.removeChild(list.childNodes[0]);
}

document.getElementById("addReverseText").onclick = function() {;

    var inputText = document.getElementById("textAdd").value;
        inputText = inputText.replace(/[0-9]/g,'');

    //Reverse text
    var splitText = inputText.split("");
    var reverseArray = splitText.reverse();
    var joinedArray = reverseArray.join("");

    var node = document.createElement("li");
    var text = document.createTextNode(joinedArray);
    node.appendChild(text);

    var list = document.getElementById("list");
    var isChild = document.getElementById("list").hasChildNodes();

    list.appendChild(node);

    if(isChild) list.removeChild(list.childNodes[0]);
}

function isUpperCase(char){
    return char != char.toUpperCase();
}

function convertCase(string){
    var stringLength = string.length;
    var textArray = string.split("");

    for (var i = 0; i < stringLength; i++){
        var textPosition = textArray[i];

        if (isUpperCase(textPosition)){
            textArray[i] = textPosition.toUpperCase();
        } else {
            textArray[i] = textPosition.toLowerCase();
        }
    }

    return textArray.join("");
}

document.getElementById("addSwitchCases").onclick = function() {;

    var inputText = document.getElementById("textAdd").value;
        inputText = convertCase(inputText);

    var node = document.createElement("li");
    var text = document.createTextNode(inputText);

    node.appendChild(text);

    var list = document.getElementById("list");
    var isChild = document.getElementById("list").hasChildNodes();

    list.appendChild(node);

    if(isChild) list.removeChild(list.childNodes[0]);
}
