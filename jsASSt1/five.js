


function oddEven() {

    
    
var PRI= document.getElementById("result5");

for(i=1; i<=15; i++)
{
    if(i%2==0){
        PRI.innerHTML+= "EVEN";
    }
    else 
    {
        PRI.innerHTML+= "ODD";
    }
}


    
    
    // swapcase = function swapcase(str) {
    //     return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
    //         return chr ? match.toUpperCase() : match.toLowerCase();
    //     });
    // }


// PRI.innerHTML += res;
// console.log(res);

}
