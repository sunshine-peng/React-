var x = 3
var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function() {
            return this.x
        }
    }
}
function tt(){
    console.log(this)
    return this.x
    
}
var bb = tt
console.log(tt())
var go = foo.baz.bar
console.log(go())
console.log(foo.baz.bar())