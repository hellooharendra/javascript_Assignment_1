function cToF() 
{
    var celsius=parseInt(document.getElementById("celcius").value);
//   var cTemp = celsius;
  var cToFahr = celsius * 9 / 5 + 32;
  var message = celsius+'\xB0C is ' + cToFahr + ' \xB0F.';
    alert(message);
}

function fToC() 
{
    var fahrenheit=parseInt(document.getElementById("fahrenheit").value);
//   var fTemp = fahrenheit;
  var fToCel = (fahrenheit - 32) * 5 / 9;
  var message = fahrenheit+'\xB0F is ' + fToCel + '\xB0C.';
    alert(message);
} 
cToF(60);
fToC(45);
