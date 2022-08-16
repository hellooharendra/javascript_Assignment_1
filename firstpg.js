function myFunction(){
    var num=parseInt(document.getElementById("inputnum").value);
    
    if(num<=0){ 
        var result="true";
        document.getElementById(
            "display").innerHTML= result ;
     }else{
        var result="false";
        document.getElementById(
            "display").innerHTML= result ;
       
     }
    

}