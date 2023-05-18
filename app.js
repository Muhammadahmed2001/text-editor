var userInput = document.getElementById("user-input");
function color() {
    var color = document.getElementById("color").value;
    userInput.style.color = color;
}
function textSize (){
    var size = document.getElementById("text-size").value;
    userInput.style.fontSize = size+"px";

}
function fontFamily(){
    var fontFamily = document.getElementById("font-family").value
    if(fontFamily === "GreatVibes-Regular"){
        userInput.style.fontFamily = "firstFont"
    }
    else if(fontFamily === "IndieFlower-Regular"){
        userInput.style.fontFamily = "secoundFont"
    }
    else if(fontFamily === "Italianno-Regular"){
        userInput.style.fontFamily = "thirdFont"
    }
    else if(fontFamily === "Pacifico-Regular"){
        userInput.style.fontFamily = "fourthFont"
    }
    else if(fontFamily === "PermanentMarker-Regular"){
        userInput.style.fontFamily = "fifthFont"
    }
    else{
        userInput.style.fontFamily = "none"
    }
    
}