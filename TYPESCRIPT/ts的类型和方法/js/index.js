"use strict";
console.log('dff');
//string 类型
var str = '你好';
//number类型
var num = 1223;
console.log(num);
num = 12.3;
console.log(num);
//array 类型
//第一种方式
// let arr: number[] = [1,2,3]
// console.log(arr)
// let arr: string[] = ['a','b','c']
// console.log(arr) 
//第二种方式
// let arr: Array<number> = [1,2,2]
// console.log(arr)
// let arr: Array<string> = ['a','b','c']
// console.log(arr)
// let arr: Array<any> = [1,'d',5]
// console.log(arr)
//元组类型 tuple
// let arr: [number, string, boolean] = [12,'52',false]
// console.log(arr)
//boolean 类型
var bool = false;
console.log(bool);
//枚举类型 enum
// enum Falg {
//     success=1,
//     error=2,
//     data=3
// }
// let success: Falg = Falg.success
// console.log(success)
//当枚举类型里面没有赋值，默认为其索引
// enum Color {
//     red, blue, green 
// }
// let color: Color = Color.blue
// console.log(color)
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 5] = "blue";
    Color[Color["green"] = 6] = "green";
})(Color || (Color = {}));
var color = Color.green;
console.log(color); //6
//any 类型
var box = document.getElementById('box');
box.style.color = 'red';
//null和undefind类型，其他(never类型)数据类型的子类型
// let num1: number
// console.log(num1)//报错
var num2;
console.log(num2);
var num3;
num3 = 123;
console.log(num3);
//null
// let nu: null
// nu = 123//报错
var nu;
nu = null;
console.log(null);
var data;
data = 123;
console.log(123);
data = undefined;
console.log(data);
data = null;
console.log(data);
//void类型: typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值
// function run ():void {
//     console.log('run');
// }
// run()
function run() {
    console.log('run');
    return 123;
}
run();
//never类型：   是其他类型（包括 null 和 undefind）的子类型，代表从不会出现的值
//这意味着声明never的变量智能被never类型赋值
// let neve: never
// neve = (() => {
//    throw new Error('dd')
// })()
//ts中定义函数的方法
//函数声明
//有返回值加上返回值的类型
function run1() {
    return '122';
}
//无返回值加上void
function run2() {
    console.log(run);
}
//函数表达式
//有返回值
var run3 = function () {
    return '22';
};
//无返回值加上void
var run4 = function () {
    console.log('run');
};
//可选参数
// function getInfo (name:string, age: number): string{
//     return `${name}的年龄是${age}岁`
// }
// alert (getInfo('张三',22))
// function getInfo (name:string, age: number): string{
//     return `${name}的年龄是${age}岁`
// }
// alert (getInfo('张三'))//报错
//使用?判断参数是否可选
// function getInfo (name:string, age?: number): string{
//     return `${name}的年龄是${age}岁`
// }
// alert (getInfo('张三'))//张三的年龄是undefined岁
//默认参数
// function getInfo (name:string, age: number=22): string{
//         return `${name}的年龄是${age}岁`
//     }
//     alert (getInfo('张三'))//张三的年龄是22岁
//剩余参数
// function getInfo (a:number,b:number,...result:number[]): number{
//     let sum:number = a + b
//     for(var i = 0; i< result.length; i++){
//         sum += result[i] 
//     }
//     return sum
// }
// alert (getInfo(1,2,3,4,5,6,7,8,9))//张三的年龄是22岁
//ts的重载
// function getData (name: string): string;
// function getData (age: number): number ;
// function getData (str: any): any {
//     if( typeof str == 'string'){
//         return str
//     } else {
//         return str
//     }
// } 
//ts类的定义
//     class Person {
//         name: string //属性，前面省去了public
//         constructor(name:string){//构造函数，实例化方法的时候触发该方法
//             this.name = name
//         }
//         run(): void{
//             console.log(this.name)
//         }
//     }
//     let p = new Person('张三')
//  p.run()
// class Dog{
//     name: string
//     constructor(name: string){
//         this.name = name
//     }
//     getName (): string{
//         return this.name
//     }
//     setName (name: string): string{
//         this.name = name
//         return name
//     }
// }
// let erha = new Dog ('哈士奇')
// alert( erha.name )
// alert( erha.getName() )
// alert( erha.setName('中华田园犬'))
// alert( erha.getName() )
//ts中的继承 extends super
// class Dog {
//     name: string
//     age: number
//     constructor(name:string, age:number) {
//         this.name = name
//         this.age = age
//     }
//     run(): string {
//         return  `${this.name}喜欢奔跑`
//     }
//     eat(): void {
//         console.log(`${this.name}喜欢吃骨头`)
//     }
// }
// class Erha extends Dog {
//     constructor(name:string, age:number){
//         super(name, age)
//     }
//     play (): string {
//         return `${this.name}喜欢玩球`
//     } 
// }
// let erha = new Erha ('哈士奇',5)
// alert(erha.run());
// erha.eat()
// alert(erha.play()) 
//ts 类里面的修饰符 public private protected
//public修饰符 公有 在类里面、子类 、类外面都可以访问
//protected修饰符 保护类型 在类里面、子类都可以访问、类外部没法访问
//private 修饰符 私有 在类里面都可访问，子类、类外部都不可访问
//public
// class Brid {
//     public name: string
//     public age:number
//     constructor( name: string, age:number) {
//         this.name = name
//         this.age = age
//     }
//     public fly (): string {
//         return `${this.name}可以自由的飞翔`
//     }
// }
// class Swan extends Brid {
//     constructor ( name: string, age: number ) {
//         super( name, age )
//     }
// }
//protected
// class Brid {
//     protected name: string
//     public age:number
//     constructor( name: string, age:number) {
//         this.name = name
//         this.age = age
//     }
//     protected fly (): string {
//         return `${this.name}可以自由的飞翔`
//     }
//     public eat (): string {
//         return `${ this.name }喜欢吃虫子`
//     }
// }
// class Swan extends Brid {
//     constructor ( name: string, age: number ) {
//         super( name, age )
//     }
//     run (): void {
//         console.log(this.name)
//     }
// }
// let swan = new Swan ( '天鹅', 5 )
// // alert( swan.fly() )//报错
// alert( swan.eat() )
// swan.run()
// // console.log ( swan.name ) //报错
// console.log ( swan.age ) 
//private
// class Brid {
//     private name: string
//     public age:number
//     constructor( name: string, age:number) {
//         this.name = name
//         this.age = age
//     }
//     protected fly (): string {
//         return `${this.name}可以自由的飞翔`
//     }
//     public eat (): string {
//         return `${ this.name }喜欢吃虫子`
//     }
// }
// class Swan extends Brid {
//     constructor ( name: string, age: number ) {
//         super( name, age )
//     }
//     run (): void {
//         console.log(this.name)//报错
//     }
// }
//静态方法 和静态属性 静态方法和属性可以直接被类调用，不能被实例对象调用
// class Per {
//     public name: string //实例属性
//     static age: number = 20 //静态属性
//     constructor ( name: string ) {
//         this.name = name
//     }
//     static run (): void {
//         console.log ( this.age ) //静态方法
//     }
//     public eat (): void {
//         console.log ( this.name ) //实例方法
//     }
// }
// let per = new Per ( '张三' )
// console.log( Per.age );
// console.log( Per.run() );
// console.log( 'per.name' );
// console.log( per.name );
// console.log( 'per.eat()' );
// console.log( per.eat() );
//多态  父类定义一个方法不去实现，让继承他的子类去实现 每一个子类都有不同的表现
// class Animal {
//     name: string
//     age: number
//     constructor ( name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
//     eat () {
//         console.log( '吃东西' )
//     }
// }
// class Dog extends Animal {
//     constructor ( name: string, age: number ) {
//         super( name, age )
//     }
//     eat (): string {
//         return `${this.name}吃骨头`
//     }
// }
// class Brid extends Animal {
//     constructor ( name: string, age: number ) {
//         super( name, age )
//     }
//     eat (): string {
//         return `${this.name}吃虫子`
//     }
// }
// let dog = new Dog ( '狗狗', 5 )
// alert ( dog.eat() )
// let brid = new Brid ( '鸟儿', 6)
// alert ( brid.eat() ) //多态属于继承
//ts的抽象类 ：他是提供其他类继承的基类， 不能直接被实例化
//用abstract 关键字定义抽象类和抽象方法， 抽象类的抽象方法不包含具体实现并且必须在派生类中实现
//sbstract 抽象方法只能放在抽象类里面
//抽象类和抽象方法来定义标准，子类必须包含其抽象方法
//  abstract class Animal {
//      name: string
//      constructor ( name: string ) {
//          this.name = name
//      }
//      abstract eat (): any //抽象方法
//      run (): void {
//          console.log ( this.name )
//      }
//  }
// //  let animal = new Animal ('sd') //报错，抽象类不能被实例化
//  class Dog extends Animal {
//      constructor (name: string ) {
//          super (name)
//      }
//      eat (): string {
//          return `${this.name}`
//      }
//  }
//  class Brid extends Animal { //没实现抽象方法 报错
//     constructor (name: string ) {
//         super (name)
//     }
//     // eat (): string {
//     //     return `${this.name}`
//     // }
// }
