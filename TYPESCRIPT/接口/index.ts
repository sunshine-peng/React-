
//属性类接口

// interface Fullname {
//     fristName: string
//     secondName: string
// }


// function printName1 ( name:Fullname, age:number ) {
//     console.log( name.fristName + ' ' + name.secondName + age )
// }

// printName ( { fristName:"张三", secondName:"李四"} )//必须行为规范
// function printName ( name:Fullname ) {
//     console.log( name.fristName + ' ' + name.secondName )
// }

// printName ( { fristName:"张三", secondName:"李四"} )//必须行为规范
// printName1 ( { fristName:"张三", secondName:"李四"}, 5 )//必须行为规范

//可选属性接口

interface Fullname {
    fristName: string
    secondName?: string
}


function printName1 ( name:Fullname, age:number ) {
    console.log( name.fristName + ' ' + name.secondName + age )
}

printName ( { fristName:"张三"} )//必须行为规范
function printName ( name:Fullname ) {
    console.log( name.fristName + ' ' )
}

printName ( { fristName:"张三"} )//必须行为规范  可以只传入fristName
printName1 ( { fristName:"张三", secondName:"李四"}, 5 )//必须行为规范 传入参数必须有frisName secondName


//原生封装ajax

// function ajax ( config: Config ) {
//      let xhr = new XMLHttpRequest ()
//      xhr.open ( config.type, config.url, true )
//      xhr.send ()
//      xhr.onreadystatechange = function () {
//          if( xhr.readyState ==4 && xhr.status == 200 ) {
//              if(config.dataType == 'json'){
//              console.log ( 'success' )
//              console.log ( xhr.responseText )
//             } else {
//                 console.log (JSON.parse( xhr.responseText ))
//             }
//          } else {
//              console.log ( 'error' )
//          }
//      }
// }

// interface Config {
//     type: string
//     url: string
//     data?: string
//     dataType: string
// }

// ajax ({
//     type: 'get',
//     url: './index.json',
//     dataType: 'json'
// })

//函数类型接口： 对方法传入的参数 以及返回值进行约束 批量约束


//加密的函数类型接口

// interface encrypt {
//     ( key: string, value: string ): string
// }

// let md5:encrypt = function ( key: string, value: string) {
//     return key + value
// }

// console.log( md5 ( '张三', '429562' ))



//可索引接口：数组、对象的约束

//数组的约束
interface User {
    [ index: number ]: string
}

let arr: User = ['122','556']
// let arr1: User = [123,55] //报错
console.log ( arr[1] )


//对象的约束

interface UserObj {
     [ index: string ]: any
}

let obj: UserObj = {
    "name": 'zhangsan',
    "age" : 255

}


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