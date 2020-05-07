
 let record=[]
 let count=0
 record[count]=0
 function getlen(n){
     for(var i=0;i<n.length;i++){
       
         if(n[i]==0){
             count++
             record[count]=0
         }else{
             record[count]++
         }
     }
     return record
 }
let a=13

 console.log(a.toString(2))

 let arr= getlen(a.toString(2))
 console.log(arr)
 arr.sort((a,b)=>{
     return b-a
 })
 console.log(arr)
 console.log(arr[0])