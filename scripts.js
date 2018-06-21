document.getElementById("addCharAmount").onclick = function() {
    //First things first, we need our text:
    var text = document.getElementById("textAdd").value; //.value gets input values

    //Now construct a quick list element
    var li = "<li>" + text + "</li>";

    //Now use appendChild and add it to the list!
    document.getElementById("list").appendChild(li);
}
