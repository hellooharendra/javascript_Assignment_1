function myFunction(){
 
    const ages = [3, 10, 18, 20];
document.getElementById("display").innerHTML = ages.some(checkAdult);

function checkAdult(age) {
    // var num=parerseInt(document.getElementById("num").value);
  return age >18;
}
}