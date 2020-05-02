
//
//valueOf()函数的作用是返回该object自身
let arr=[10,20,'d']
var result= arr.valueOf()
console.log(result)//[ 10, 20, 'd' ]
var date=new Date()
console.log(date.valueOf())//1585048098537
var obj={
    i:1
}
console.log(obj.valueOf())//{ i: 1 }


var bbb = {
    i: 10,
    toString: function() {
    console.log('toString');
    return this.i;
    },
    valueOf: function() {
    console.log('valueOf');
    return this.i;
    }
   }
   console.log(bbb);// 10 toString
   console.log(+bbb); // 10 valueOf
   console.log(''+bbb); // 10 valueOf
   console.log(String(bbb)); // 10 toString
   console.log(Number(bbb)); // 10 valueOf
   console.log(bbb == '10'); // true valueOf
   console.log(bbb === '10'); // false