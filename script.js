function simpleIntrest(){
     var a=parseFloat(document.getElementById("p").value);
     var b=parseFloat(document.getElementById("r").value);
     var c=parseFloat(document.getElementById("y").value);
    // var result=(principle*rate)*year/ 100;
    var result=(a*b*c)/100;
    document.getElementById("display").innerHTML=result;
}
