declare global {
  interface Function {
    myApply(thisContext: any, callArgs: any[]): any;
  }
}

if (!Function.prototype.myApply)
  Function.prototype.myApply = function (thisContext, callArgs) {
    if (thisContext === null || thisContext === undefined) {
      thisContext = globalThis;
    } else {
      thisContext = Object(thisContext);
    }
    const fn = this;

    const uniqueKey = Symbol();

    thisContext[uniqueKey] = fn;

    const result = thisContext[uniqueKey](...callArgs);

    delete thisContext[uniqueKey];

    return result;
  };

const person = {
  name: "Neel",
  lastName: "Bahurupi",
};
const person1 = {
  name: "Anchala",
  lastName: "Dhanvijay",
};

function greet(this: { name: string; lastName: string }, greeting: any) {
  console.log(`Hello ${this.name} ${this.lastName} ${greeting}`);
}

greet.apply(person, ["have a nice day"]);
greet.myApply(person1, ["have a nice day"]);
