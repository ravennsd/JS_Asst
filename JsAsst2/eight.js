function sortArr(property)
{
    var stringobj=[];
    stringobj= [
        {firstName:document.getElementById("text1").value ,lastName: document.getElementById("texta").value},
        {firstName:document.getElementById("text2").value , lastName:document.getElementById("textb").value},
        {firstName:document.getElementById("text3").value , lastName:document.getElementById("textc").value},
    ]

console.log(stringobj);
   

    for (var property in stringobj) {
         

         var inArr = [];
         inArr= stringobj;
        console.log(inArr);

        inArr.sort(function(a,b)  {

            const fNamea =a.firstName.toUpperCase();
            const fNameb =b.firstName.toUpperCase();

            if(fNamea[property]>fNameb[property])
            {
                
                return 1;
                
                
            }
            
            else if (fNamea[property]<fNameb[property]) {
                // console.log(inArr);
            return -1;
            
            // console.log((b.firstName)- (a.firstName) );
            }
            else
            return 0;
                    
                    // else if (a(property)<b(property) {
                    //     return 1;
                    // }
                    // else {
                    // return false; }
        
                })

        }
        console.log(inArr);
            
        
        
      
        
    }
    
    // document.getElementById("result8").innerHTML= inArr;


// function displayinput() {
//     document.getElementById("inputs").innerHTML= document.getElementById("text").value; 
// }