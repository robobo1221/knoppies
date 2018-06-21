function isDigit(str) {
    return str && !/[^\d]/.test(str);
}

document.getElementById("addCharAmount").onclick = function() {;

    var inputText = document.getElementById("textAdd").value;
    var inputTextLength = inputText.length;

    var charCount = 0;

    for( var i = 0; i < inputTextLength; i++ )
    {
        if( isDigit(inputText) )
            charCount++;
    }

    var node = document.createElement("li");
    var text = document.createTextNode(inputTextLength - charCount);
    node.appendChild(text);

    var list = document.getElementById("list");
    var isChild = document.getElementById("list").hasChildNodes();

    list.appendChild(node);

    if(isChild) list.removeChild(list.childNodes[0]);
}
