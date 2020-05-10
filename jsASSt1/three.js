


function brownFox() {

    str ='The Quick Brown Fox';
    res = '';
    
var sen= document.getElementById("result3");

for (var i = 0; i < str.length; ++i) {
     
    var c = str[i];
    
    if (c == c.toUpperCase()) {
    res += c.toLowerCase();
    } 

    else if (c == c.toLowerCase()) {
    res += c.toUpperCase();
    } 

    else {
    res += c;
  }
}
    
    
    // swapcase = function swapcase(str) {
    //     return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
    //         return chr ? match.toUpperCase() : match.toLowerCase();
    //     });
    // }


sen.innerHTML += res;
console.log(res);


}





