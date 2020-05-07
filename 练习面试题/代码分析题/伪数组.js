
function test(arg1,arg2) {
    var arg = arguments
    for(var i = 0; i< arg.length; i++){
        console.log(arg[i])
    }
    arg = Array.from(arg)
    // arg = Array.prototype.slice.call(arg)
    // arg._proto_ = Array.prototype
    console.log(arg.slice(1))
    console.log(arg instanceof Array)
}

test(1,2)