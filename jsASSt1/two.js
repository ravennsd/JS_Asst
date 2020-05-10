
var arr1 = [' annie ',' biggie ',' ',' ellie ',30,' annie ',30, ' annie ', ' annie ', 4, 9];



function Freq() {

    document.getElementById("items").innerHTML = arr1;

var freq = 1;
var m = 0;
var item;

for (var i = 0; i < arr1.length; i++) {

  for (var j = i; j < arr1.length; j++) {

    if (arr1[i] == arr1[j])
    m++;

    if (freq < m) {
      
      freq = m;
       item = arr1[i];
    }
  }

  m = 0;
}

document.getElementById("result2").innerHTML= "The most frrequent item is "+  item + ". And, it occurs " +freq + " times";


}

