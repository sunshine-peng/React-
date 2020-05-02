
/**
 * 使用数组记录法
 * 声明一个数组，存放结果，判断是否有重复的值，
 * 进行两次for循环，一个for循环针对传进来的数组，一个for循环针对判断数组
 * 使用indexOf方法，查询当前数组的值是否已经在当前数组中，如果不存在就，将其插入
 * 判断数组中，在判断类型，如果是object对象，就不做任何处理。
 */

var obj=[]
function unique(arr){
    for(var i=0;i<arr.length;i++){
        console.log(obj.indexOf(arr[i]))
   for(var j=0;j<=obj.length;j++){
   console.log(i)
       if(obj.indexOf(arr[i])==-1){
           console.log(i)
        if(arr[i] instanceof Array) {
            // obj.push(arr[i])
            console.log(obj)
            unique(arr[i])
         }else if(arr[i] instanceof Object){
           
        }else{
            obj.push(arr[i])
            
        }
       }else{
           
       }
   }
       
    
}

return obj
}
unique([1,2,['a',5],{a:6},34,1])
console.log(obj)
console.log(result)


/**
 * 声明一个数组和一个对象，数组用来存放结果，对象用来判断值是否重复
 * 
 */
// var result=[]
//     var obj={}
// function unique(arr){
    
//     for(var i=0;i<arr.length;i++){
//         if(!obj[arr[i]]){
//             obj[arr[i]]=arr[i]
//             if(arr[i] instanceof Array){
                
//                 console.log(arr[i])
//                 unique(arr[i])
//             }else if(arr[i] instanceof Object){
 
//             }else{
             
//                 result.push(arr[i])
//             }
//         }
//     }
//     return result
// }
// console.log(unique([1,2,['a',4],{c:3},5,1]))