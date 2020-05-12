"use strict";
//属性类接口
function printName1(name, age) {
    console.log(name.fristName + ' ' + name.secondName + age);
}
printName({ fristName: "张三" }); //必须行为规范
function printName(name) {
    console.log(name.fristName + ' ');
}
printName({ fristName: "张三" }); //必须行为规范  可以只传入fristName
printName1({ fristName: "张三", secondName: "李四" }, 5); //必须行为规范 传入参数必须有frisName secondName
var arr = ['122', '556'];
// let arr1: User = [123,55] //报错
console.log(arr[1]);
var obj = {
    "name": 'zhangsan',
    "age": 255
};
//类类型约束，和抽象有点类似
// interface Animal {
//     name: string
//     eat ( str: string ): void
// }
// class Dog implements Animal {
//     name: string
//     constructor ( name: string ) {
//         this.name = name
//     }
//     eat ( str: string ):void {
//         console.log( this.name +'吃' + str)
//     }
// }
// let dog = new Dog ( '小黑' )
// dog.eat( '骨头' )
// interface Animal1 {
//     eat ( str: string ): void
// }
// interface Person extends Animal1 {
//     work ( str: string): void
// }
// class Program implements Person {
//     name: string
//     constructor ( name: string ) {
//         this.name = name
//     }
//     eat ( str: string ): void {
//         console.log ( this.name + '吃' + str )
//     }
//     work ( str: string ): void {
//         console.log ( this.name + '做' + str )
//     }
//     run ( ): string {
//         return this.name + '喜欢跑步'
//     }
// }
// class Web extends Program {
//     constructor ( name: string ) {
//         super(name)
//     }
// }
// let wang = new Program ('小王')
// wang.eat ( '米饭' )
// wang.work ('敲代码')
// alert(wang.run ())
