
function bubbleSort(arr){
var temp=[],result=[]
result=arr

for(var i=0;i<result.length-1;i++){
    for(var j=0;j<result.length-i-1;j++){
        if(result[j]>result[j+1]){
           
            temp=result[j]
            result[j]=result[j+1]
            result[j+1]=temp
            
        }
    }
   
}

return result
}
console.log(bubbleSort([0,5,6,44,3,20,43]))
//时间复杂度为O(n^2)