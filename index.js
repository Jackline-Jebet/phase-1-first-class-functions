function receivesAFunction(callback) {
callback();
}

function returnsANamedFunction() {
   return function namedFunction() {
return "be cool"
   } 
}

function returnsAnAnonymousFunction() {

        return () => console.log("anonymous function")
    }