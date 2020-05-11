### generator函数的定义
    1.Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同
    2.形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态
   */
  //定义一个generator函数 其内部有3种状态
  var helloGenerator = function *() {
    var next1 = yield 'hello';
    yield 'world' + next1;
    return 'ending';
  }
  //调用generator 函数和普通函数一样，直接加上双括号 () 但是跟普通函数的区别是generator不会立即执行， 返回的也不是函数的结果，而是内部的一个指针。
  var newGenerator = helloGenerator();
  //generator 函数是分段执行的 会从头部直到遇到下一个yield 表达式的时候停止下来。
  console.log(newGenerator.next('hahh')); //Object {value: "hello", done: false}
  console.log(newGenerator.next()); // {value: "worldhahh", done: false}
  console.log(newGenerator.next()); //{value: "ending", done: true}  done true| false true代表的意思内部yield 表达式已经执行完毕 false则相反
  console.log(newGenerator.next()); //{value: "undefined", done: true}
  /*
    总结一下，调用 Generator 函数，返回一个遍历器对象，代表 Generator 函数的内部指针。以后，每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。value属性表示当前的内部状态的值，是yield表达式后面那个表达式的值；done属性是一个布尔值，表示是否遍历结束。
   */
  /*
    二、yield 表达式
    1.由于 Generator 函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield表达式就是暂停标志。
    遍历器对象的next方法的运行逻辑如下。
    （1）遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
    （2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。
    （3）如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
    （4）如果该函数没有return语句，则返回的对象的value属性值为undefined。
    2.yield 表达式和 return 语句的区别： return 不具有记忆功能， yield 具有记忆功能，下次调用next()方法的时候会接着往下执行。
    一个函数里面只能执行一个return 语句 可以执行多个yield 表达式。 yield 函数只能用在generator 函数里面不能用在其他函数里面,不然会报错。
   */
  /*
    三、与 Iterator 接口的关系
    任意一个对象的Symbol.iterator方法，等于该对象的遍历器生成函数，调用该函数会返回该对象的一个遍历器对象。由于 Generator 函数就是遍历器生成函数，因此可以把 Generator 赋值给对象的Symbol.iterator属性，从而使得该对象具有 Iterator 接口。
   */
  var myIterable = {};
  myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
  };
  console.log([...myIterable]) // [1, 2, 3]
  /*
    四、next 方法的参数
    yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
    意义:可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。
   */
  function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
  }
  var a = foo(5);
  a.next() // Object{value:6, done:false}
  a.next() // Object{value:NaN, done:false}
  a.next() // Object{value:NaN, done:true}
  var b = foo(5);
  b.next() // { value:6, done:false }
  b.next(12) // { value:8, done:false }
  b.next(13) // { value:42, done:true }
  /*
    五、for...of 循环
    for...of循环可以自动遍历 Generator 函数时生成的Iterator对象，且此时不再需要调用next方法。(有点类似于 ... 对象的扩展运算符)
   */
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
  }
  for (let v of foo()) {
    console.log(v);
  }
  // 1 2 3 4 5
  //上面代码使用for...of循环，依次显示 5 个yield表达式的值。这里需要注意，一旦next方法的返回对象的done属性为true，for...of循环就会中止，且不包含该返回对象，所以上面代码的return语句返回的6，不包括在for...of循环之中。
  //除了for...of循环以外，扩展运算符（...）、解构赋值和Array.from方法内部调用的，都是遍历器接口。这意味着，它们都可以将 Generator 函数返回的 Iterator 对象，作为参数。
  function* numbers () {
    yield 1
    yield 2
    return 3
    yield 4
  }
  // 扩展运算符
  [...numbers()] // [1, 2]
  // Array.from 方法
  Array.from(numbers()) // [1, 2]
  // 解构赋值
  let [x, y] = numbers();
  x // 1
  y // 2
  // for...of 循环
  for (let n of numbers()) {
    console.log(n)
  }
  // 1
  // 2
  /*
  六、Generator.prototype.throw()
   */
  function *testError(){
    try{
      yield ;
    }catch (e){
      console.log(e)
    }
  }
  var testE = testError();
  testE.throw(new Error('会出错吗？'));// 会出错吗？ 这个错误是由generator 函数的内部捕获的。
  /*
    七、Generator.prototype.return()
    Generator 函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历 Generator 函数。
   */
  function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }
  var g = gen();
  g.next()    // { value: 1, done: false }
  g.return('foo') // { value: "foo", done: true }
  g.next()    // { value: undefined, done: true }