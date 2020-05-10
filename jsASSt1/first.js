const arrNums = [23,50,4,69,30,21]

console.log(arrNums);

document.getElementById("displayNums").innerHTML = arrNums;



var i, txt="";

for(var i=0; i<arrNums[0]; i++) {
  txt= arrNums[0]; 
}

console.log(txt);
document.getElementById("firstEl").innerHTML= txt;

function result() {
    if(i%2==0) {
        return true;
        
    console.log("It's not a Prime");
    document.getElementById("result").innerHTML= "It's not prime";
    }
    

    else {
        console.log("It's prime!");
        document.getElementById("result").innerHTML= "It's prime!";
        return false;
    }
}

