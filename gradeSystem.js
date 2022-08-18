function gradeSystem(){
    var mark=parseInt(document.getElementById("marks").value);
    if(mark<=100 && mark>90){
     var result=("Your Grade is : A");
         document.getElementById("display").innerHTML=result;
    }else if(mark<=90 && mark>80)
    {
         var result=("Your Grade is : B");
         document.getElementById("display").innerHTML=result; 
    }else if(mark<=80 && mark>70)
    {
        var result=("Your Grade is : C");
        document.getElementById("display").innerHTML=result; 

    }else if(mark<=70 && mark>=60)
    {
        var result=("Your Grade is : D");
       
        document.getElementById("display").innerHTML=result; 

    }else if(mark<60)
    {
        var result=("OOH....NO......YOU ARE FAIL........TRY AGAIN!....BEST OF LUCK!..");
        document.getElementById("error").innerHTML=result; 

    }else{
        var result=("404!..result not found........please enter a valid number");
        document.getElementById("error").innerHTML=result; 
    }
        
    }
        
    
   

