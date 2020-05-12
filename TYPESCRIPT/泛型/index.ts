//泛型
//any放弃了类型检查、传入什么、返回什么。比如传入number 类型必须返回number类型  传入string类型必须 返回string类型


//泛型类：比如有个最小堆算法，需要同时支持返数字和字符串两种类型，通过累的泛型来实现


//类的泛型

// class Minclass <T>{
//     list: T[] =[]
//     add ( value: T ): void{
//         this.list.push(value)
//     }

//     min (): T{
//         var minNum = this.list[0]
//         for ( var i = 0; i< this.list.length; i++) {
//             if ( minNum > this.list[i] ) {
//                 minNum = this.list[i]
//             }
//         }
//         return minNum
//     }

// }


// let min1 = new Minclass <number> () //实例化对象，并指出T代表的类型
// min1.add( 156 )
// min1.add( 4 )
// min1.add( 6 )
// min1.add( 5 )
// min1.add( 22 )
// min1.add( 12 )

// alert ( min1.min() )

//泛型接口

// interface Config {
//     <T> (value: T): T
// }

// let getData: Config = function <T> (value: T): T {
//     return value
// }

// getData<string> ('123')


// interface Config <T> {
//     ( value: T ): T
// }

//  function getData1<T> ( value: T ): T {
//      return value
//  } 

 
// alert( getData1<string>('</string>') )

//把类作为参数来约束数据传入的类型

// class User {
//     username: string | undefined
//     password: string | undefined
// }
// 
// class DbMysql <T> {
//    
    // add (user: T): boolean {
        // console.log(user)
        // return true
    // }
// }
// 
// let u = new User ()
// u.username = '张三'
// u.password = '123'

// let db = new DbMysql<User> ()
// db.add( u )
// class ArticleCase {
//     title: string | undefined
//     des: string | undefined
//     status: number | undefined

//     constructor( params: {
//         title: string | undefined,
//         des: string | undefined,
//         status?: number | undefined
//     }){
//         this.title = params.title
//         this.des = params.des
//         this.status = params.status
//     }
// }

// let article = new ArticleCase ( {
//     title: '分类',
//     des: '222'

// } )

// let db = new DbMysql <ArticleCase> ()

// db.add (article)



//功能：定义一个操作数据库的库 支持mysql mssql mongoDB
//要求： Mysql Mssql mongoDB功能都一样 都有add update delete get方法
// 注意：约束统一的规范、以及代码重用
// 解决方案：需要约束规范所以要定义接口、 需要代码重用，所以用到泛型
// 1. 接口： 在面向对象的编程中，接口是一种规范的定义，他定义了行为和动作的规范
  //2. 泛型 通俗理解：泛型就是解决类接口 方法的复用性


  interface DBI<T> {
      add( info: T ): boolean;
      update ( info: T, id: number): boolean;
      delete ( id: number ): boolean;
      get (id: number ): any[]

  }

  class MysqlDb<T> implements DBI<T> {
      add(info: T): boolean {
          console.log(info)
          throw new Error("Method not implemented.");
      }
      update(info: T, id: number): boolean {
          throw new Error("Method not implemented.");
      }
      delete(id: number): boolean {
          throw new Error("Method not implemented.");
      }
      get(id: number): any[] {
          throw new Error("Method not implemented.");
      }

  }

  class User {
      username: string | undefined
      password: string | undefined
  }

  var u = new User ()
  u.username = 'sds'
  u.password = '6320'

  let mysql = new MysqlDb<User> ()
  mysql.add( u )