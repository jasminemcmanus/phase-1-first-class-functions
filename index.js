function receivesAFunction(callbackFunction) {
    callbackFunction();
  }

function greetUser() {
    console.log(`Hello.`);
}

function returnsANamedFunction() {
   return function enthusiasticGreetUser() {
        console.log(`Hello there!`)
   }
}

const namedFunction = returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return function () {
        console.log(`This is an anonymous function.`);
      };
}

const anonymousFunction = returnsAnAnonymousFunction()

receivesAFunction(greetUser);
namedFunction();
anonymousFunction();