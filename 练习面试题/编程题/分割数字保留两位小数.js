
function format(num){
 var str=num.toString()
 var arr=str.split('.')
//  console.log(str.split('.'))
console.log(arr)

if(num%1!=0){
if(arr[0].length<=3&&arr[1].length==1){
    return arr[0]+'.'+arr[1]+0
}else if(arr[0].length<=3&&arr[1].length>=2){
    // return arr[0]+'.'+arr[1].substring(0,2)
    return arr[0]+'.'+arr[1].slice(0,2)
}else if(arr[0].length>3&&arr[1].length==1) {
    console.log(arr[1].length)
    console.log('1')
    var result=''

   
    if(arr[0].length%3==0){
        var num1=arr[0].length/3
        console.log('num1')
        for(var i=1;i<=num1;i++){
            if(i==num1){
                result+=arr[0].substring(i*3-3,i*3)+'.'+arr[1]+0
            }else{
                result+=arr[0].substring(i*3-3,i*3)+','
            }
        }
    }else{
       var num1=Math.floor(arr[0].length/3)
       for(var i=1;i<=num1;i++){
            result+=arr[0].substring(i*3-3,i*3)+','
      }
      result+=arr[0].substring(num1*3,arr[0].length)+'.'+arr[1]+0
    }


return result
}else if(arr[0].length>3&&arr[1].length>=2){
    var result=''

   
    if(arr[0].length%3==0){
        var num1=arr[0].length/3
        console.log('num2')
        for(var i=1;i<=num1;i++){
            if(i==num1){
                result+=arr[0].substring(i*3-3,i*3)+'.'+arr[1].slice(0,2)
            }else{
                result+=arr[0].substring(i*3-3,i*3)+','
            }
        }
    }else{
       var num1=Math.floor(arr[0].length/3)
       for(var i=1;i<=num1;i++){
            result+=arr[0].substring(i*3-3,i*3)+','
      }
      result+=arr[0].substring(num1*3,arr[0].length)+'.'+arr[1].slice(0,2)
    }


return result
}
}else{
if(arr[0].length<=3){
    return arr[0]+'.'+'00'
}else{
    var result=''
    if(arr[0].length%3==0){
        var num1=arr[0].length/3
        console.log('num1')
        for(var i=1;i<=num1;i++){
            if(i==num1){
                result+=arr[0].substring(i*3-3,i*3)+'.'+'00'
            }else{
                result+=arr[0].substring(i*3-3,i*3)+','
            }
        }
    }else{
       var num1=Math.floor(arr[0].length/3)
       for(var i=1;i<=num1;i++){
            result+=arr[0].substring(i*3-3,i*3)+','
      }
      result+=arr[0].substring(num1*3,arr[0].length)+'.'+'00'
    }


return result
}
}
}
console.log(format(123333555))



 // var num1=Math.floor(arr[0]/3)
    // for(var i=1;i<num1;i++){
    //     result+=arr[0].substring(i-3,i)+','
    // }
    // if(i%3==0){
    // result+=arr[0].substring(i-3,i)+','
    // }