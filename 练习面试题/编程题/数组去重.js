
// /**
//  * 使用数组记录法
//  * 声明一个数组，存放结果，判断是否有重复的值，
//  * 进行一次for循环，循环遍历数组
//  * 遇到数组类型就做递归处理
//  * 使用indexOf方法，查询当前数组的值是否已经在当前数组中，如果不存在就，将其插入
//  * 判断数组中，在判断类型，如果是object对象，就不做任何处理。
//  */

let obj=[]
function unique(arr){
    for(var i=0;i<arr.length;i++){
       if(obj.indexOf(arr[i])==-1){
        
        if(arr[i] instanceof Array) {
           
            unique(arr[i])
         }else if(arr[i] instanceof Object){
           
        }else{
            obj.push(arr[i])
            
        }
       }  
}

return obj
}
let result = unique([1,2,3,{a:1},'str','str',[3,4,5,'str','str2',[4,41,'str41']],5,6])
console.log(result)
// // console.log(result)


// /**
//  * 声明一个数组和一个对象，数组用来存放结果，对象用来判断值是否重复
//  * 
//  */
// var result=[]
//     var obj={}
// function unique(arr){
    
//     for(var i=0;i<arr.length;i++){
//         if(!obj[arr[i]]){
//             obj[arr[i]]=arr[i]
//             if(arr[i] instanceof Array){
//                 // console.log(arr[i])
//                 unique(arr[i])
//             }else if(arr[i] instanceof Object){
 
//             }else{          
//                 result.push(arr[i])
//             }
//         }
//     }
//     return result
// }
// console.log(unique([1,2,3,{a:1},'str','str',[3,4,5,'str','str2',[4,41,'str41']],5,6]))