
var newArr=[1,2,3,4,5,6,7,8,9,10]
document.getElementById("displayNums4").innerHTML= newArr;

var showArray= document.getElementById("result4");

function square() {

    var sum=0;

    for(var i=0;i<newArr.length;i++) 
    {
        sum+= Math.pow(newArr[i], 2);

        console.log(sum);
        
    }

    showArray.innerHTML += sum;
    
}


    
    // arrNums.map (function (el) {
    //                                                                         console.log(sq); 
        
    //  sq=el
    //     // for(i=el;i<=newArr.length;i++){
            
    //     //      sq=[];
    //     //      sq=el*el;

    //     //   res= sq[i];  
    //     // } 
    //     // el[i]=newArr[i++];
    // } ) 
    
// fin= res+sq[++i];
  

    // showArray.innerHTML += sq;







