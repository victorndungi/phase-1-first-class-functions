function receivesAFunction(spy){
    
    console.log(spy())
}

function returnsANamedFunction(){
    return function namedFunction(){

    };
}
   
function returnsAnAnonymousFunction() {
  return function() {
    // This is an anonymous function
  };
}
