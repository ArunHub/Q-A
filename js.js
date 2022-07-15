var hello = {
  first: "arun",
  internalobj: {
    first: "arun10",
    method: function () {
      console.log("__", this.first);
    },
    arrowmethod: () => console.log(this, "++++++++", this.first),
  },
};

// hello.internalobj.method(); // points to internalobj first
// hello.internalobj.arrowmethod(); // points to window because it is not wrapped by a function

var hello = {
  first: "arun",
  internalobj: {
    first: "arun10",
    method: function method() {
      console.log("__", this.first);
    },
    arrowmethod: function arrowmethod() {
      return console.log(undefined, "++++++++", undefined.first);
    },
  },
};

class Pep {
  constructor() {
    this.name = "arun";
  }
}

//es6console.com/

("use strict");

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// var Pep = (function () {
//   function Pep() {
//     _classCallCheck(this, Pep);

//     this.name = "arun";
//   }

//   _createClass(Pep, [
//     {
//       key: "running",
//       value: function running() {
//         console.log("hello");
//       },
//     },
//   ]);

//   return Pep;
// })();

//why nested function are created like closures why cannot we acheive using seperate functions
// because of global pollute, and other variables cannot override , inside function can remember where it was created. if created outside then it can be changed by other scripts or other user working in same environment.

// why in angular 1 , closures are used in minified version

//console.log("empty place",this, "5555"); // points to window

// for (let index = 0; index < 3; index++) {
//   console.log(this, "inside for loop"); // points to window
// }

function name() {
  console.log(this, "inside function");
}

// name(); // points to window

var aa = function name1() {
  console.log("inside FE", this);
};
// aa(); // points to window

function Name() {
  console.log("inside constructor", this);
}
// new Name(); // points to Name constructor

function exter() {
  return function inner() {
    console.log("nested function", this);
  };
}
// exter()(); // points to window

function arrowexter() {
  const inner = () => {
    console.log("trying in nested arrow function", this);
  };
  inner();
}

// arrowexter(); // points to window

function insidetimeout() {
  setTimeout(function name() {
    console.log("inside timeout", this);
  }, 2000);
}

// insidetimeout(); // points to window

function InsidetimeoutCons() {
  this.name = " arun";
  self = this; //by sending this self variable , problem solved
  setTimeout(function name() {
    console.log("inside timeout constructor", self);
    console.log("inside function timeout constructor", this);
  }, 2000);
}

// new InsidetimeoutCons(); // points to window even if self is implemented because setTimeout is not written inside method . dot before method concept fails. lets try with arrow function

function InsidetimeoutconsArrow() {
  this.name = " arun";
  setTimeout(() => {
    console.log("inside arrow timeout constructor", this);
  }, 2000);
}

// new InsidetimeoutconsArrow();
// here this points to window since settimeout is called straight away not inside class method. so dot before method concept fails. check out below q and ans

function ConstMethodTimeout() {
  this.name = " arun";
  // self = this; //by sending this self variable , problem solved
  this.method = function () {
    setTimeout(function name() {
      // console.log("inside function method timeout constructor", self);
      console.log("inside timeout constructor", this);
    }, 2000);
  };
}
// here by help of closures , self is getting this from constructor
// new ConstMethodTimeout().method();

function ArrowMethodTimeout() {
  this.name = " arun";
  this.method = function () {
    setTimeout(
      () => console.log("inside arrow method timeout constructor", this),
      2000
    );
  };
}

// new ArrowMethodTimeout().method();
// basically when we convert the above code in es6console, it does the same thing as above solution for normal function as we create variable and access using closure technique

obj = {
  name: "arun",
  method: function name() {
    console.log("inside obj literal method", this.name);
  },
};

// obj.method(); //points to same ojbj

obj1 = {
  name: "arunkumar",
  method: function name() {
    console.log("inside obj literal method", this.name);
  },
  obj2: {
    name: "kumar",
    method: function name() {
      console.log("inside nested obj literal method", this.name);
    },
    arrowmethod:
      //() =>
      // console.log("inside nested obj literal arrow method", this.name),
      function () {
        return () =>
          console.log("inside nested obj literal arrow method", this.name);
      },
    timeout: function () {
      setTimeout(function () {
        console.log("inside obj lit timeout normal function", this.name);
      }, 2000);
    },
    arrowtimeout: function () {
      setTimeout(
        () => console.log("inside obj lit timeout normal function", this.name),
        2000
      );
    },
  },
};

// obj1.obj2.method(); // points to kumar
//obj1.obj2.arrowmethod()(); //kumar name here closure concept works
// obj1.obj2.timeout(); //window name
// obj1.obj2.arrowtimeout(); // obj name
// similar to arrowtimeout if we make second method "arrowmethod" inside wrapper normal function then second one also use closure and print the name

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log(this.name);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

// Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.

// For instance, here arrow() uses this from the outer user.sayHi() method:

let customer = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  },
};

customer.sayHi(); // Ilya

// The value of thisArg parameter becomes this for func.

// For example, here we use a method of army object as a filter, and thisArg passes the context:

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};

let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23

// users.filter(army.canJoin, army);
// Why above written like this?
//beccause here army.canjoin is a just reference of the obj method so no obj is attached to this. hence
// no THIS is available so here passing army object for THIS parameter.

// what if users.filter(army.canJoin);
//literally this
// users.filter((user) =>{
//     return user.age >= this.minAge && user.age < this.maxAge;
//   })
//since no object passed so making THIS undefined or window object if use strict was not used.

// what if a call to users.filter(army.canJoin, army) can be replaced with users.filter(user => army.canJoin(user)), that does the same. The latter is used more often, as it’s a bit easier to understand for most people.
// here an anonymous function is used to wrap the obj method itself so here not reference is passed but calling obj method itself so dot before method concept works and obj becomes the THIS.

//literally this
// users.filter((user)=>{
//   army.canJoin(user)
// })

//why not attaching users with minAge properties since array is basically an obj??

function NewName() {
  this.name = "arun";
}

rr = {
  __proto__: new NewName(),
};

// console.log("solution for previous obj literal problem by setting proto from constructor", rr);
function fullname() {
  console.log("fullname");
}

Function.prototype.calling = function () {
  console.log("hey tell the this meaning here", this);
};

fullname.call();

fullname.calling();

var tuesObj = {
  day: "tuesday",
  getToday: function () {
    return this.day;
  },
};

var tomoObj = {
  day: "wednesday",
  getToday: function () {
    console.log("ssssssss", this.day);
  },
};

tomoObj.getToday.call(); // undefined
tomoObj.getToday.call(this); // undefined points to window
tomoObj.getToday.call(tomoObj); // points to tomoobj n prints wednesday
tomoObj.getToday.call(tuesObj); // points to tuesObj n prints tuesday

function debounce(fn) {
  let timer,
    ab = "";
  return function () {
    ab += arguments[0];
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, [ab]), 2000);
  };
}

function abc(a) {
  console.log("writter here----------", a);
}

function cbfn(a) {
  return () => abc(a);
}

firstcall = debounce(cbfn);

/////////////////////

function debouce1(fn) {
  let timerid;
  return function () {
    clearTimeout(timerid);
    timerid = setTimeout(function () {
      return fn.apply(this, ...arguments);
    }, 2000);
  };
}

function loger(e) {
  return () => loger1(e);
}

function loger1(e) {
  console.log("eeeeeeee", e);
}

let input = document.getElementById("input");
input.onkeyup = debouce1(loger1);

///////////////////

function throttle(fn, ms) {
  let timerid;
  return function () {
    if (!timerid) {
      fn.apply(this, [arguments[0]]);
    }
  };
}

function f(a) {
  console.log(a);
  //  timerid = setTimeout(()=>{
  //         clearTimeout(timerid);
  //         fn.apply(this, ...arguments)
  //       },ms)
}

// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000);

var sum = (a) => {
  return function (b) {
    if (b) {
      return sum(a + b);
    } else {
      return a + 0;
    }
  };
};

// Common Pitfalls
// While most of these cases make sense, the first can be considered another mis-design of the language because it never has any practical use.

Foo.method = function () {
  function test() {
    // this is set to the global object
  }
  test();
};
// A common misconception is that this inside of test refers to Foo; while in fact, it does not.

// In order to gain access to Foo from within test, you can create a local variable inside of method that refers to Foo.

Foo.method = function () {
  var self = this;
  function test() {
    // Use self instead of this here
  }
  test();
};




// ============================================================================

const {isContext} = require("vm")

In the interview yesterday i got a programming question to solve. which is 

multiply(2)(3)
multiply(2,3)

should return same result 6.

my first thought was that i have already learnt the closure concept returning a inner function from a function so i implemented like

function multiply(x){    
    if(arguments.length === 2){
        return arguments[0] * arguments[1];
    }else{
        return function (y){
            return x*y;
        }
    }
}

then interviewer said its a static not dynamic solution. then she gave 

multiply(2)(3)(4)(5)(6)(8)(6)(9)(10)
multiply(2,3,4,5,6,8,6,9,10)

again my thought was to implement second kind with this solution:

function multiply(){    
    let a = 1;
    if(!arguments.length) return ;
    for (const item of arguments) {
        a *= item;
    }
    return a;   
}

but this doesnt suit the first kind so its a wrong solution. Then i remembered a decorator concept where we send a original function inside a wrapper function.

so i took the small example kinds

multiply(1)(2)(3)
multiply(1,2,3)

//this is the original function
// according to paraments we have to change the original function implementation.
function multiply(a,b,c){
    return a*b*c;
}

so this is the function i wrote where arguments length should be equal to function length (functions paraments length) and if matched , then apply arguments to function and call with this isContext.
function wrapper(fn){
    if(arguments.length === fn.length){
        return fn.apply(this, arguments)
    }
}

now first kind works multiply(1,2,3) and i also changed === to >= since any number of parameters can be sent more than function parameters but results is only upto original function parameters length.

function wrapper(fn){
    return function(...args){
    if(arguments.length >= fn.length){
            return fn.apply(this, arguments)
        }else{

        }
    }    
}

so in if else i tried writing elsepart with return a function inside with fn.apply but again function call stops there in second level itself.
function wrapper(fn){
    return function(...args){
    if(arguments.length >= fn.length){
            return fn.apply(this, arguments)
        }else{
            return function(args2){
                return fn.apply()
            }
        }
    }    
}


and what will be the logic there. well, in order to create same function work for both kinds . one kind should be somehow merged with other kind so i thought we should push the new arguments to the previous arguments and call recursively until arguments length matches function length.

in order to do that we can call anonymous function so named the function as curriedFn so we can recursively call and append the previous args with new ones.

here is the final solution: 
function wrapper(fn){
    return function curriedFn(...args){
    if(args.length >= fn.length){
            return fn.apply(this, args)
        }else{
            return function(...args2){
                return curriedFn.apply(this, args2.concat(args))
            }
        }
    }    
}

var muxx = wrapper(multiply);
muxx(2)(3)
muxx(2,3)
muxx(2,3)(1)

all gives same result 6

Actually i got failed in between to achieve the result . but i got glimpse from https://javascript.info/currying-partials and tried all these steps and explained it you .

Use the link and and study the benefits of currying concept.

one will have why both args have spread operator. definitely for 1st kind , its needed to spread it in runtime. for 2nd kind , we may call like muxx(1)(2) or muxx(2,3)(1,2,3)(1) so to handle every condition , its useful.

2) concat() method is used to merge arrays. Concat does not change the existing arrays, but instead returns a new array unlike push method

function wrapper(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            fn.apply(this, args);
        }else{            
            return function(...args2) {
                console.log(args2);
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}

var muxx = carriedmul(mult);
muxx(2)(3)

multiply(2) = function(){
        return 2 * 3
    }

multiply(2)(3)

multiply(2,3) 

const baseObject = {
	id: "123",
    num:123,
    flag: true,
	files: [
		{ id: "f123", name: "file1", state: "can_upload" },
{ id: "f124", name: "file1", state: "uploaded" },
],
	productType: "typeA",
	productSpecifications: {
		value: "200",
		state: "draft",
		associatedActors: [ "investor", "client" ]
      }
	
};

const newObject =  {
	id: "1234",
    num:123,
	files: [
		{ id: "f123", name: "file1", state: "uploaded" },
{ id: "f124", name: "file1", state: "uploaded" },
],
	productType: "typeA",
	productSpecifications: {
		value: "500",
		state: "released",
		associatedActors: [ "investor", "client", "admin" ]
      }
};



function compareobj(base, dup) {
    let temp = {};

    Object.keys(base).forEach(t=>{
    if(typeof base[t] === "object" && base[t] instanceof Array){
        let temparr = [];
        base[t].forEach((k,i)=>{
            if(typeof k === "object"){
                temparr.push(compareobj(base[t][i], dup[t][i]));
                temp[t] = temparr;
            }else if(base !== dup){
                temparr.push(k);
                temp[t] = temparr;
            }
            
        })
    }else if(typeof base[t] === "object"){
        temp[t] = compareobj(base[t], dup[t])
    }else{
        if(base[t] !== dup[t]){
            temp[t] =base[t]
        }
    }
    })
    
return temp;
    
    
}

compareobj(baseObject, newObject);

function compareArr(arr1, arr2){
    let temp = [];

    return temp;
}

// output
const diffObject = {
	files: [
	{ id: "f123", name: "file1", state: "uploaded" }
],
productSpecifications: {
	value: "500",
state: "released",
associatedActors: ["admin"]
}	
}
