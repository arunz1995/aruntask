var buttons=document.getElementsByTagName("button");
var inputString="";
var outputString="";
var operantsArray=[];
var operatorsArray=[];
var isLastOperator=true;
for(var i=0; i<buttons.length;i++){
    buttons[i].addEventListener("click",callAction);
}
function callAction(event){
    var button=event.target;
    var value=button.innerHTML;
    var actionType=button.classList[0] === "red-text"?"operator":"operant";
    if(value === "=")
    {
        calculateAnswer()
    }
    else{
        addInput(actionType,value)
        inputString += value
    }
    console.log(operantsArray,operatorsArray)
    printInput();
    printOutput();
}
function printInput(){
    document.getElementsByClassName("input-container")[0].innerHTML=inputString || 0;

    // if(inputString==""){
        // document.getElementsByClassName("input-container")[0].innerHTML=0;
    // }else
    // {
        // document.getElementsByClassName("input-container")[0].innerHTML=inputString;
    // }
}
function printOutput(){
    document.getElementsByClassName("output-container")[0].innerHTML=outputString || 0;
}
function addInput(actionType,value){
    if(actionType === "operator"){
        if(isLastOperator)return;
        operatorsArray.push(value);
        isLastOperator = true;
        return
    }
    if(isLastOperator){
        operantsArray.push(value)
        isLastOperator = false;
        return
    }
    operantsArray[operantsArray.length - 1] +=value;
}

function calculateAnswer(){
}