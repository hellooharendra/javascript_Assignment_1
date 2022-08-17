function sortElement(){
var x= parseInt(document.getElementById('num1').value);
var y=parseInt(document.getElementById('num2').value);
var z=parseInt(document.getElementById('num3').value);
if (x>y && x>z)
{
        if (y>z)
        {
            result=((x + ", " + y + ", " +z))
        
          document.getElementById("display").innerHTML=result;

        }
        else
        {
            result=(x + ", " + z + ", " +y);
            document.getElementById("display").innerHTML=result;
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
             result=(y + ", " + x + ", " +z);
             document.getElementById("display").innerHTML=result;
        }
        else
        {
             result=(y + ", " + z + ", " +x);
             document.getElementById("display").innerHTML=result;
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            var result=(z + ", " + x + ", " +y);
            document.getElementById("display").innerHTML=result;
        }
        else
        {
            result=(z + ", " + y + ", " +x);
            document.getElementById("display").innerHTML=result;
        }
}        

}