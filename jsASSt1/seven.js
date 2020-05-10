
Nos1= document.getElementById("one");
Nos2= document.getElementById("two");
function displayInput() {

Nos1.innerHTML= document.getElementById("num1").value;
Nos2.innerHTML= document.getElementById("num2").value;


}

function largerNo () {

    res="";    
    num1= document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    
    res= Math.max(num1,num2);

    document.getElementById("result7").innerHTML += res;

}