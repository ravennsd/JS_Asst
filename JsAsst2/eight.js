var stringobj=[];
stringobj= [
    {firstName:document.getElementById("text1").value ,lastName:document.getElementById("texta").value},
    {firstName:document.getElementById("text2").value ,lastName:document.getElementById("textb").value},
    {firstName:document.getElementById("text3").value ,lastName:document.getElementById("textc").value},
]

var inArr = [];
inArr= stringobj;

function sortArr(property)
{
    for (var order in stringobj) {
        
        inArr.sort(function(a,b)  {

            const fNamea =a.firstName.toUpperCase();
            const fNameb =b.firstName.toUpperCase();

            if(fNamea[order]>fNameb[order])
            {
                
                return 1;

            }
            
            else if (fNamea[property]<fNameb[property]) {
         
            return -1;
            
           
            }
            else
            return 0;
                    
                
        })

        }
    
    document.getElementById("result8a").innerHTML= +inArr;  
    console.log(inArr);
      
        
    }
    
    


// function displayinput() {
//     document.getElementById("inputs").innerHTML= document.getElementById("text").value; 
// }