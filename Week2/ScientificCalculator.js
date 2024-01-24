var taResult = document.getElementById('text-area-result');

function addCharacter(newChar) {
    if(taResult.value == "0" || taResult.value == "undefined")
        taResult.value=newChar;
    else
        taResult.value+=newChar;
}

function eraseCharacter(){
    taResult.value = taResult.value.substring(0, taResult.value.length - 1);
    if(taResult.value.length == 0){
        taResult.value = "0";
    }
}

function clearOutput(){
    taResult.value = "0";
}

function calculateExpression() {
    try {
        var inputExpression =  taResult.value.replaceAll("×","*").replaceAll("÷","/")
        taResult.value = eval(inputExpression);
    } catch (error) {
        console.log('Error');
    }
}

function showNotMappedMessage() {
    var infoMessage = document.getElementById('infoMessage');
    infoMessage.style.display = 'block';

    setTimeout(function () {
      infoMessage.style.display = 'none';
    }, 3000);
  }