


function javas() {

    str ='JAVASCRIPT';
    res = '';
    
var PRI= document.getElementById("result9");

for (var x of str) {
     
    str.slice(0,1)
    res+= str[x];

    console.log(x);
    PRI.innerHTML += x;
  }

    
    
    // swapcase = function swapcase(str) {
    //     return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
    //         return chr ? match.toUpperCase() : match.toLowerCase();
    //     });
    // }


// PRI.innerHTML += res;
console.log(res);

}
