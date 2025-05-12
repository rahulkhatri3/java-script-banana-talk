var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output");

var server = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return server + "?"+"text=" + text
}
function errorhandler (){
    alert("Server have some issue please try again after sometime")
}



function clickhandler(){
 var inputText = txtInput.value;
fetch(getTranslationURL(inputText))
.then(response => response.json())
.then(json=>{
    var translatedText = json.contents.translated;
    outputDiv.innetText=translatedText;
})
 .catch(errorhandler)

};
btnTranslate.addEventListener("click",clickhandler)