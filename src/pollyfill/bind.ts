declare global {
  interface Function {
    myBind(thisContext: any, ...bindArgs: any[]): any;
    customBind(thisContext: any, ...bindArgs: any[]): any;
  }
}

// Using apply

if (!Function.prototype.myBind) {
  Function.prototype.myBind = function (thisContext, ...bindArgs) {
    if (thisContext === null || thisContext === undefined) {
      thisContext = globalThis;
    } else {
      thisContext = Object(thisContext);
    }

    const fn = this;
    return function (...callArgs: any[]) {
      return fn.apply(thisContext, [...bindArgs, ...callArgs]);
    };
  };
}

// Without using call/apply, low level

if (!Function.prototype.customBind) {
  Function.prototype.customBind = function (thisContext, ...bindArgs) {
    if (thisContext === null || thisContext === undefined) {
      thisContext = globalThis;
    } else {
      thisContext = Object(thisContext);
    }

    const fn = this;

    return function (...callArgs: any[]) {
      thisContext = thisContext || globalThis;
      const uniqueKey = Symbol();
      thisContext[uniqueKey] = fn;

      const result = thisContext[uniqueKey](...bindArgs, ...callArgs);

      delete thisContext[uniqueKey];
      return result;
    };
  };
}

// Example

const person = {
  name: "Neel",
  lastName: "Bahurupi",
};
const person1 = {
  name: "Anchala",
  lastName: "Dhanvijay",
};

function greet(
  this: { name: string; lastName: string },
  greeting: string,
  punctuation: string
) {
  console.log(`Hello ${this.name} ${this.lastName} ${greeting} ${punctuation}`);
}

const newGreet = greet.bind(person, "have a nice day");
const customGreet = greet.myBind(person1, "have a wonderful day");
const customGreetLowLevel = greet.customBind(person1, ",have a good day");
newGreet("!!!");
customGreet("!");
customGreetLowLevel(".");
