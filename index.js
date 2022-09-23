const spy = ""
function receivesAFunction(callback){
    callback()
}

function fn(){}
function returnsANamedFunction(){
return fn
}

function returnsAnAnonymousFunction(){
     return function(){}
}
