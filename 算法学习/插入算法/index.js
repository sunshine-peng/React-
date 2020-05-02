/**
 * 插入排序
 * 默认第一个元素是已排元素，取出下一个元素与当前元素比较，
 * 如果当前元素大就交换位置，那么此时第一个元素就是当前最小的元素
 * 下次取出第三个元素开始，向前对比，重复之前的操作。
 */

 function insertionSort(arr){
     for(var i=1;i<arr.length-1;i++){
         for(var j=i+1;j>0;j--){
             if(arr[j]<arr[j-1]){
                 let temp=arr[j]
                 arr[j]=arr[j-1]
                 arr[j-1]=temp
             }else{
                 break
             }
         }
     }
     return arr
 }

 console.log(insertionSort([2,5,88,66,1,45,23,7,63]))
