### Interview Questions

- https://github.com/jwasham/coding-interview-university
- A mostly reasonable collection of technical software development interview questions solved in Javascript
  https://github.com/kennymkchan/interview-questions-in-javascript
- Advanced js questions – toptal
  https://www.javatpoint.com/javascript-interview-questions
- https://awesomeopensource.com/project/vvscode/js--interview-questions

#### TIPS

```
array.splice(index, 1); // its slooooowwwww

...do this:

array[index] = array[array.length - 1];
array.pop(); // orders of magnitude faster!

Source: https://twitter.com/rich_harris/status/1125850391155965952?lang=en

// own bind method
Function.prototype.mybind = function(){
  let self = this;
//   for(var i = 1;i<arguments.length; i++){

//   }
  return function(){
    self.apply(arguments[0], ...arguments)
  }
}
Array.prototype.unique = function(){
  return this.filter((t,i)=> this.indexOf(t) !== i )
}
let arr = [1,1,2,2,3,3,5,5,6,6]
array.unique()

//method chaining

$.addClass.addClass.removeClass.add
in jquery , addclass returns the this value and updates the argument of addclass to the dom reference object.

var obj = {
  a:1,
  b:2,
  sum:0,
  add1: function() {this.sum = this.sum+this.a+this.b;return this },
  sub2: function() {return this}
}

obj.add1().add1() // result: {a: 1, b: 2, sum: 6, add1: ƒ, sub2: ƒ}

```

- | interceptor | session in js ?

- 30 seconds of code - https://github.com/30-seconds/30-seconds-of-code

##### dynamic create variable javascript

> assign it to global window like window['variable']
> var varname ='CB1';window[varname] ='my value';
> dynamic create variable javascript for IF s

### How browser reacts to html, css and rendering process ?

- https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model
- https://developer.mozilla.org/en-US/docs/Mozilla/Introduction_to_Layout_in_Mozilla

### Event loop

- https://javascript.info/event-loop
- https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

  - first, javascript runs on single thread and do one task at a time. So WEB apis are browser specific which is not related to js apis
  - so when it sees code and puts them into CALL STACK and execute the function and pops out of call stack.
  - when it sees settimeout and from call stack , it invokes the function and returns callback fn and pops out .
  - now callback fn went into web api bucket so that browser takes care and runs the timer given in second argument.
  - meanwhile other functions are executed are in call stack.
  - now after timer finishes, web apis callback fn returns to queue and lined up.
  - now engine check if the call stack is empty then it **event loops** the callback fn to call stack and runs the function and shows result.
  - https://raw.githubusercontent.com/ArunHub/Q-A/master/.github/eventloop.jpg

- wait for tasks, execute, sleep waiting for tasks, endless.
- when more tasks assigned like script load, move mouse event, settimeout so everything queued in event stack and called as macro tasks and executes like FIFO
- Rendering a page happens only after engine executes these tasks and if it become complex and infinite loop > shows unresponsive page.
- https://javascript.info/event-loop#macrotasks-and-microtasks
- web apis like setinterval, setImmediate, settimeout are all macrotasks which has own queue, and
- promise, async, process.nexttick ,callback and queuecallback are all micro tasks which has own queue
- when call stack is idle, micro task queue gets executed and then macro tasks are executed.
- https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke

- js heap ??

###### Hoisting

- Hoisting is often explained as putting variables and functions to the top of the file but nah, that’s not what’s happening, although the behavior might seem like it 😃

- When the JS engine gets our script, the first thing it does is setting up memory for the data in our code. No code is executed at this point, it’s simply just preparing everything for execution. The way that function declarations and variables are stored is different. Functions are stored with a reference to the entire function and variables var stored with undefined and ES6 - let and const are stored with uninitialized. This is called the creation phase
- Its like only function doesnt have assignment operator logically so it has reference to entire function stored i guess :D
- After creation phase, engine executes the code and suppose imagine a scenario we put console.log on first lines so it executes and throw reference error.
- before initialization, we cannot access temporal dead zone.
- When the engine passes the line on which we actually declared the variables, the values in memory are overwritten with the values we actually declared them with.
- now if we console , the context / environment has values.
- https://dev.to/lydiahallie/javascript-visualized-hoisting-478h
- https://raw.githubusercontent.com/ArunHub/Q-A/master/.github/hoisting.jpg

##### Scopes

- local execution scope, local scope connected to global scope
- local scope finds non existing variable down the scope chain like waterfall and searches in another outer local scope or final global scope.
- https://dev.to/lydiahallie/javascript-visualized-scope-chain-13pd

##### js engine

- script tag(from network, cache, service worker) -> bytestream code like 01 e8 6e 1e -> tokens function , var -> preparser(which parses which code is used later) and parser(it invokes as immediately required by browser) -> creates node based on tokens -> AST=Abstract syntax tree like program, function literal, returnstatement, stringliteral -> interpreter gets AST and -> generates bytecode for machine to understand and destroys AST to free memory space -> bytecode is faster and can be made faster by invoking or replacing variables, functions repeatedly invoked by -> optimizing compiler -> if same numbers are passed into sum function then compiler can identify and run faster as it is repeatedly invoked but if string is passed then it goes to bytecode from interpreter and runs it.

- https://dev.to/lydiahallie/javascript-visualized-the-javascript-engine-4cdf

##### prototypal inheritance

- https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co
  - visualize linked list in prototypal chain when proto is null in this article end.

##### Generators and iterators

- normal functions are run-to-completion model
- by attaching [Symbol.iterator] to a object, can make object iterable
- We can yield individual values from iterators within a generator using the yield\* keyword, so the yield with an asterisk!
- https://dev.to/lydiahallie/javascript-visualized-generators-and-iterators-e36

### How to improve performance of site?

- https://github.com/manucorporat/perf-apis-2/blob/master/performance-techniques.pdf
- https://css-tricks.com/the-critical-request/
- https://github.com/thedaviddias/Front-End-Performance-Checklist
- https://www.performancebudget.io/
- https://web.dev/rail/
- https://moderndevtools.com/

### visualize data structures and algorithms

- https://visualgo.net/en
- https://algorithm-visualizer.org/
- https://github.com/mgechev/javascript-algorithms

### Functional programming

- This is a curated list of awesome functional programming code and learning resources for JavaScript. - https://github.com/stoeffel/awesome-fp-js
- https://github.com/getify/Functional-Light-JS

---

**OOJS?**

#### Objects

So when you used string methods like:

    myString.split(',');

You were using a method available on an instance of the String class. Every time you create a string in your code, that string is automatically created as an instance of String, and therefore has several common methods/properties available on it.

When you accessed the document object model using lines like this:

    var myDiv = document.createElement('div');

You were using methods available on an instance of the Document class. For each webpage loaded, an instance of Document is created, called document, which represents the entire page's structure, content, and other features such as its URL. Again, this means that it has several common methods/properties available on it.
Object.defineProperty
**Abstraction**

know about a person (their address, height, shoe size, DNA profile, passport number, significant personality traits ...) , but in this case we are only interested in showing their name, age, gender, and interests, want to be able to write a short introduction about them based on this data, and get them to say hello. This is known as abstraction — creating a simple model of a more complex thing, which represents its most important aspects in a way that is easy to work with for our program's purposes.

Class : Person
{Name,age,gender,interests, bio:function(), greeting:function()}

When an object instance is created from a class, the class's constructor function is run to create it. This process of creating an object instance from a class is called instantiation — the object instance is instantiated from the class.
In OOP, we can create new classes based on other classes — these new child classes can be made to inherit the data and code features of their parent class, so you can reuse functionality common to all the object types rather than having to duplicate it.

The fancy word for the ability of multiple object types to implement the same functionality is polymorphism
**Prototype chain in javascript**

    Function g(){this.vertices=”sfd”};
    g.prototype.addVertex = function (){console.log()}
    console.log(g.hasOwnProperty('vertices'));
    // true
    console.log(g.hasOwnProperty('nope'));
    // false
    console.log(g.hasOwnProperty('addVertex'));
    // false
    console.log(g.__proto__.hasOwnProperty('addVertex'));
    // true

hasOwnProperty is the only thing in JavaScript which deals with properties and does not traverse the prototype chain.

##### Bad practice: Extension of native prototypes

One misfeature that is often used is to extend Object.prototype or one of the other built-in prototypes.
This technique is called monkey patching and breaks encapsulation. While used by popular frameworks such as Prototype.js, there is still no good reason for cluttering built-in types with additional non-standard functionality.
The only good reason for extending a built-in prototype is to backport the features of newer JavaScript engines, like Array.forEach.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#Using_prototypes_in_JavaScript

##### static variable vs instance

static variable or method is part of class function alone not attached to any object instances of class.

basically methods of a object is to change the property vallue of the object so here static variables are used to have constant values not to change properties of a value.

example 1:
Math.PI value doesnt change for any number of instances so placed as a static variable.
It not a variable of Math, but a variable of the whole class.

It can be return as a seperate common function but since its so related to respective class and it make sense to use as part of class variable/method

Static properties are used when we’d like to store class-level data, also not bound to an instance.

example 2:

```
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// usage
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);

alert( articles[0].title ); // CSS

```

Hope that explains your query."

**Doubts**

```
function DD(){this.name='arun';this.age=5}
rr = new DD();
rr1 = Object.create(new DD());
console.log('rr',rr);
console.log('rr1',rr1);
DD.prototype.ddd = 123;
console.log(rr,'rr');
console.log(rr1,'rr1');
```

Both rr and rr1 'ddd' property how ?
Answer: Since we attached DD prototype to rr1. DDD can be accessible through prototype chain.

##### Function methods

The **call()** method calls a function with a given this value and arguments provided individually.

```

function Product(name, price) { this.name = name;  this.price = price;}

function Food(name, price) {  Product.call(this, name, price);  this.category = 'food';}

console.log(new Food('cheese', 5).name); // expected output: "cheese"
```

- Using call to chain constructors for an object
- Using call to invoke an anonymous function
- Using call to invoke a function and specifying the context for 'this'
- Using call to invoke a function and without specifying the first argument

```
    var obj = {a:1,b:2,c:function(){console.log('bb',this.b)}}
    undefined
    var dd = obj.c; // giving reference to var dd
    undefined
    dd() // bb undefined
    obj.c() // bb 2
    var dd = obj.c.bind(obj);
    dd() // now shows as bb 2
    var dd = obj.c.call(obj); // without calling dd() … call invokes the function and results as bb 2
```

But this does not work in arrow function declared as method inside object.
Because Arrow functions cannot be used to write object methods because, as you have found, since arrow functions close over the this of the lexically enclosing context, the this within the arrow is the one that was current where you defined the object. Which is to say:

It works like this only => http://jsfiddle.net/bfyarxfe/2/

```
    function myFunction(x, y, z) { }var args = [0, 1, 2];myFunction.apply(null, args);
```

https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/

###### how to use and simulate map function for splitting string variable

```
// assume we create a prototype function on array object
Array.prototype.simpleIteration = function(callback) {
	let newArray = []
	for (let x = 0; x < this.length; x++) {
		newArray.push( callback(this[x]) )
	}
	return newArray
}

// and now we create a new sample array
let sampleArray = ["a","b","c"]

// we can call this by
let result1 = sampleArray.simpleIteration( x => x+x )
console.log("result1:")
console.log(result1) // result1 becomes "aa","bb","cc"

// or we can call it by
let result2 = Array.prototype.simpleIteration.call(sampleArray, x => x+x)
console.log("result2:")
console.log(result2) // result2 becomes "aa","bb","cc"

// So lets say we created a string
let sampleString = "abc"
// since simpleIteration function were attached to Array functions
// if we create a string and call simple Iteration wouldn't work

/* this code wouldn't work
let result3 = sampleString.simpleIteration(x=>x+x)
console.log("result3:")
console.log(result3)
*/

// however, to get around it .. we can use the call method
let result4 = Array.prototype.simpleIteration.call(sampleString, x => x+x)
console.log("result4")
console.log(result4)
```

**What does [].forEach.call() do in JavaScript?**

- https://stackoverflow.com/questions/16053357/what-does-foreach-call-do-in-javascript

#### collection vs array==============

collection of DOM elements (more formally called a NodeList) can’t be manipulated like an array

But you can’t use Array methods like push(), splice() or reverse() to manipulate it.

Except that you can, if you take the next step and convert it into an array. This is in fact trivial:

```

  function collectionToArray(collection)

  {

  var ary = [];

  for(var i=0, len = collection.length; i < len; i++)

  {

  ary.push(collection[i]);

  }

  return ary;

  }

```

**Apply will give the array to apply automatically to the given parameters.**

While in case of `call()` , you have to explicitly give the parameters not array.
`Call()` is like invoking function with context given as first parameter.

```
    myFunction.call(null, 0,1,2);
```

Suppose if u r in prototype method of object and calling function which is declared globally , so when invoking global function it will call from window as this , so when u invoke the function with object this and with parameters , global functions invokes in context of object this.

```
    Function Tab(){
    This.name: “dfs”;this.func=function(){ render.call(this, “hello”)}
    }
    Function global(){
    Var name = this.name} //here this refers to Tab Object instead of window
```

with the bind () method, we can explicitly set the this value for invoking methods on objects, we can borrow
and copy methods, and assign methods to variable to be executed as functions
Bind is like wrapping the calling function to outer function with its context

    Binder(this, params1,2,3){
    Function callingFunction(){}
    }

    In jquery
    $('#btn').bind('click keydown', function(){console.log('clicked')}).on('keyup',function(){console.log('key up')})

    Call the function for both click and keydown
    Passing event data
    var message = "Spoon!";
    $( "#foo" ).bind( "click", {
     msg: message
    }, function( event ) {
     alert( event.data.msg );
    });
    message = "Not in the face!";
    $( "#bar" ).bind( "click", {
     msg: message
    }, function( event ) {
     alert( event.data.msg );
    });



    function greet (gender, age, name) {
     // if a male, use Mr., else use Ms.
      var salutation = gender === "male" ? "Mr. " : "Ms. ";
      if (age > 25) {
       return "Hello, " + salutation + name + ".";
       }   else {
          return "Hey, " + name + ".";
          }
           }
     // So we are passing null because we are not using the "this" keyword in our greet function.        var greetAnAdultMale = greet.bind (null, "male", 45);

    var data = [
                    {name:"Samantha", age:12},
                    {name:"Alexis", age:14}
                ]

                var user = {
                    // local data variable
                    data    :[
                        {name:"T. Woods", age:37},
                        {name:"P. Mickelson", age:43}
                    ],
                    showData:function (event) {
                        var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1

                        console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
                    }

                }

                // Assign the showData method of the user object to a variable
                var showDataVar = user.showData;

                showDataVar (); // Samantha 12 (from the global data array, not from the local data array)

if called by user.showData() alone without assigning to global value then its value is different.

http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/

You probably already noticed that our function A has a special property called prototype. This special property works with the JavaScript new operator. The reference to the prototype object is copied to the internal [[Prototype]] property of the new instance. For example, when you do var a1 = new A(), JavaScript (after creating the object in memory and before running function A() with this defined to it) sets a1.[[Prototype]] = A.prototype. When you then access properties of the instance, JavaScript first checks whether they exist on that object directly, and if not, it looks in [[Prototype]]. This means that all the stuff you define in prototype is effectively shared by all instances, and you can even later change parts of prototype and have the changes appear in all existing instances, if you wanted to.

If, in the example above, you do

    var a1 = new A(); var a2 = new A();
    //then a1.doSomething would actually refer to Object.getPrototypeOf(a1).doSomething, which is the same as the A.prototype.doSomething you defined,
    i.e. Object.getPrototypeOf(a1).doSomething == Object.getPrototypeOf(a2).doSomething == A.prototype.doSomething.

In short, prototype is for types, while Object.getPrototypeOf() is the same for instances.

[[Prototype]] is looked at recursively, i.e. a1.doSomething, Object.getPrototypeOf(a1).doSomething, Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething etc., until it's found or Object.getPrototypeOf returns null.

So, when you call

    var o = new Foo();
    JavaScript actually just does

    var o = new Object();
    o.[[Prototype]] = Foo.prototype;
    Foo.call(o);
    (or something like that) and when you later do

    o.someProp;

it checks whether o has a property someProp. If not, it checks Object.getPrototypeOf(o).someProp, and if that doesn't exist it checks Object.getPrototypeOf(Object.getPrototypeOf(o)).someProp, and so on.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#Using_prototypes_in_JavaScript

### Prototype

Sharing of variable and methods between instances of objects. When we attach/create variable or method to prototype object , then it will get accessed from all the instances of objects.

Prototypes are the mechanism by which JavaScript objects inherit features from one another. how prototype chains work and look at how the prototype property can be used to add methods to existing constructors.

JavaScript is often described as a prototype-based language — to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from.

An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a prototype chain, and explains why different objects have properties and methods defined on other objects available to them.

In JavaScript, a link is made between the object instance and its prototype (its **proto** property, which is derived from the prototype property on the constructor), and the properties and methods are found by walking up the chain of prototypes.

Source : mdn prototype js

#### prototype design –

To clone an object, a constructor must exist to instantiate the first object. Next, by using the keyword prototype variables and methods bind to the object's structure.

```
    var TeslaModelS = function() {
      this.numWheels    = 4;
      this.manufacturer = 'Tesla';
      this.make         = 'Model S';
    }

    TeslaModelS.prototype = function() {

      var go = function() {
        // Rotate wheels
      };

      var stop = function() {
        // Apply brake pads
      };

      return {
        pressBrakePedal: stop,
        pressGasPedal: go
      }

    }();
```

- If u want deep clone an object, use JSON.parse(JSON.stringify(Obj))
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone

**We can use Object.create to perform an object cloning more powerful than copying properties in for..in:**

- let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

#### custom constructors======================

```
    function Person(name,age) {

    this.name = name;

    this.age = age;

    }



    // Let's make bob and susan again, using our constructor

    var bob = new Person("Bob Smith", 30);

    var susan = new Person("Susan Jordan", 25);

    // help us make george, whose name is "George Washington" and age is 275

    var george = new Person("George Washington",275);
```

Let's look at another example and practice coding constructors. Here we have made a Cat constructor for you, with age and color properties.

Why is this Cat constructor so cool?

It means if we have many cats and wanted to create an object for each

cat, we could just use this constructor with the properties already

defined.

This is much better than using the Object

constructor which just gives us an empty object and needs us to define

every property and value for each cat object we would create.

**Lets take a look at below code:**

```
function Customer(name,id){
this.name = name;
this.id = id;
}
//output for new Customer("arun",5): {name: arun, id : 5}

class Customer{
  constructor(name, id){
    this.name = name;
this.id = id;
  }
  m1 = () => {} // this one represents as in constructor only since it is assigned to variable even its a arrow function.
  function m2(){
    // this normal function add as Prototype as language design and also because when instance object created it looks like key: pair but here it is defined as function right.
  }
}

```

#### prototype===============

```
    snoopy.bark = function() {

    console.log("Wow");

    };
```

Here we have very similar code as last time, but there is an important difference. Instead of using buddy.bark to add the bark method to just the buddy object, we use Dog.prototype.bark.

Click run this time, and both buddy and snoopy can bark just fine! Snoopy can bark too even though we haven't added a bark method to that object. How is this so? Because we have now changed the prototype for the class Dog. This immediately teaches all Dogs the new method.

In general, if you want to add a method to a class such that all

members of the class can use it, we use the following syntax to extend the prototype:

```
    className.prototype.newMethod =



    function() {

    statements;

    };



    function Dog (breed) {

    this.breed = breed;

    };



    // here we make buddy and teach him how to bark

    var buddy = new Dog("golden Retriever");

    Dog.prototype.bark = function() {

    console.log("Woof");

    };

    buddy.bark();



    // here we make snoopy

    var snoopy = new Dog("Beagle");

    /// this time it works!

    snoopy.bark();

    apply function==============

    var person = {

    firstName :"Penelope",

    lastName :"Barrymore",

    showFullName:function () {

    ​// The "context"​

    console.log (this.firstName + " " + this.lastName);

    }

    }

​

​// The "context", when invoking showFullName, is the person object, when we invoke the showFullName () method on the person object.​

​// And the use of "this" inside the showFullName() method has the value of the person object,​

person.showFullName (); // Penelope Barrymore​

​

​// If we invoke showFullName with a different object:​

​var anotherPerson = {

firstName :"Rohit",

lastName :"Khan"​

};

​

​// We can use the apply method to set the "this" value explicitly—more on the apply () method later.​

​// "this" gets the value of whichever object invokes the "this" Function, hence:​

person.showFullName.apply (anotherPerson); // Rohit Khan​

​

​// So the context is now anotherPerson because anotherPerson invoked the person.showFullName () method by virtue of using the apply () method​
```

#### encapsulating private n public methods pattern=================

```
    var myRevealingModule = (function () {

    var privateVar = "Ben Cherry",

    publicVar = "Hey there!";



    function privateFunction() {

    console.log( "Name:" + privateVar );

    }



    function publicSetName( strName ) {

    privateVar = strName;

    }



    function publicGetName() {

    privateFunction();

    }



    // Reveal public pointers to

    // private functions and properties

    return {

    setName: publicSetName,

    greeting: publicVar,

    getName: publicGetName

    };

    })();



    myRevealingModule.setName( "Paul Kinlan" );
```

**Private prorerty/method for the customer alone**
var Customer = (function (id, name){
this.id = id;
this.name = name;

    var firstfn = function(){
        console.log()
    }

    return {
        id: this.id,
        name: this.name,
        firstfn: firstfn
    }

})()

#### this keyword-======================

followed by methods vs functions post

The "this" Keyword

Our setAge method works great for bob because it updates bob.age, but what if we want to use it for other people?

It turns out we can make a method work for many objects using a new keyword, this. The keyword this acts as a placeholder, and will refer to whichever object called that method when the method is actually used.

Let's look at the method setAge (line 2) to see how this works. By using the keyword this, setAge will change the age property of any object that calls it. Previously, we had a specific object bob instead of the keyword this. But that limited the use of the method to just bob.

Then when we say bob.setAge = setAge; (line 9), it means whenever we type bob.setAge( ), this.age in the setAge method will refer to bob.age.

```
    // here we define our method using "this", before we even introduce bob

    var setAge = function (newAge) {

    this.age = newAge;

    };

    // now we make bob

    var bob = new Object();

    bob.age = 30;

    // and down here we just use the method we already made

    bob.setAge = setAge;



    // change bob's age to 50 here

    bob.setAge(50);

```

In javascript every function receives two variables other than function parameters namely "this" and "arguments".

##### #how-to-access-the-correct-this-inside-a-callback

https://stackoverflow.com/questions/20279484/how-to-access-the-correct-this-inside-a-callback/20279485#20279485

**why js is pass by reference?**

    Var obj1={a:1,b:2};
    obj2=obj1;
    obj2.b = 3; then console.log(obj1)
    // {a:1, b:3} after changing in b in obj , the value 3 automatically changes in obj1 .
    //So javascript is pass by reference.

​```

#### invoking functions===============

4 types :

simply calling fn name

```
    function fun(){

    };

    fun();



    var obj = {};

    obj.mymethod = function(){

    // myMethod is a Method.

    console.log(this);

    // this is bound to obj

    };
```

When we invoke the function as the method of an object, that object becomes the function context and is available within the function via the this parameter. This is one of the primary means by which JavaScript allows object-oriented code to be written

#### using constructor

```
function Fun(){

// Notice a function being used as a constructor always starts with Capital letter.

    this.myProperty = ' This is my property';

    }

    var myObject = new Fun();
```

When invoked with a new operator, a new object will be created and "this" inside the Fun() is bound to the newly created object.

(4) With the Apply method :

A function can be called in JavaScript with an apply method invocation with functionName accompanied with a dot(.)

```

  functionName.apply(arguments);



  function foo(a,b){

  console.log(a,b,this);

  }

  var args = ['abra','ka', 'dabra'];

  foo.apply(obj,args);

```

In this case the first argument passed to apply is an object to which we want "this" keyword to get bound to.

If the function is being used as an event handler, "this" will refer to the node that fired the event

### design patterns –

-> GitHub - sohamkamani/javascript-design-patterns-for-humans: An ultra-simplified explanation of design patterns implemented in javascript
Performance Debugging with DevTools

- Constructor Pattern - normal es5 constructor function pattern
- Module Pattern - seperating code as module with private variables
- Revealing Module Pattern - fixes the using this property from module pattern
- Singleton Pattern - defines the single service in a file, serves single object throughout the project.
- Observer Pattern - broadcasting and receiveing radio concept
- Mediator Pattern - radar control for aeroplane
- Prototype Pattern - chaining concept
- Command Pattern - executing commands for particular tasks
- Facade Pattern - abstracting the big functionality inside small single code like wrapper for all polyfills , fallbacks and example: $.addClass() in jquery
- Factory Pattern - provides which vehicle you want from factory. produces the new object and give you . one stop solution
- Mixin Pattern - mix - in into another library for reuse i think so.
- Decorator Pattern - when many sku items are there in ecommerce sites, so that every each item has its own structure and to design n decorate using this pattern.
- Flyweight Pattern - taken paper flyweight and flyweight champion which has pattern to structure the pattern in lightweight in library

- https://bradfrost.com/blog/post/atomic-web-design/

- remember using module pattern in ng1 – (

```
    var HTMLChanger = (function() {
      var contents = 'contents'

      var changeHTML = function() {
        var element = document.getElementById('attribute-to-change');
        element.innerHTML = contents;
      }

      return {
        callChangeHTML: function() {
          changeHTML();
          console.log(contents);
        }
      };

    })();

    HTMLChanger.callChangeHTML();       // Outputs: 'contents'
    console.log(HTMLChanger.contents);  // undefined
```

#### closures

- is a technique implemented to remember environment when it was called with a function inside to access the local variable n outside variable

```
    function add(x)
       function addX(y)
           return y + x
       return addX

    variable add1 = add(1)
    variable add5 = add(5)

    assert add1(3) = 4
    assert add5(3) = 8
```

```
 function createCounter() {
   let counter = 0
   const myFunction = function() {
     counter = counter + 1
     return counter
   }
   return myFunction
 }
 const increment = createCounter()
 const c1 = increment()
 const c2 = increment()
 const c3 = increment()
 console.log('example increment', c1, c2, c3)
```

Here is how it works. Whenever you declare a new function and assign it to a variable, you store the function definition, as well as a closure. The closure contains all the variables that are in scope at the time of creation of the function. It is analogous to a backpack. A function definition comes with a little backpack. And in its pack it stores all the variables that were in scope at the time that the function definition was created.

The key to remember is that when a function gets declared, it contains a function definition and a closure. The closure is a collection of all the variables in scope at the time of creation of the function.
https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8

**lexical scopes => closures**
https://javascript.info/closure

Execution Context & Execution Context stack : Execution context is the internal javascript construct to track execution of a function or the global code. The js engine maintains a stack data structure - execution context stack or call stack, which contains these contexts and the global execution context stays at the bottom of this stack. And a new execution context is created and pushed to the stack when execution of a function begins. A particular execution context tracks the pointer where statement of the corresponding function is being executed. An execution context is popped from the stack when corresponding function's execution is finished.

Lexical Environment : it's the internal js engine construct that holds identifier-variable mapping. (here identifier refers to the name of variables/functions, and variable is the reference to actual object [including function type object] or primitive value). A lexical environment also holds a reference to a parent lexical environment.

Now, for every execution context -- 1) a corresponding lexical environment is created and 2) if any function is created in that execution context, reference to that lexical environment is stored at the internal property ( [[Environment]] ) of that function. So, every function tracks the lexical environment related to the execution context it was created in.

- https://stackoverflow.com/questions/12599965/lexical-environment-and-function-scope

What is the Point of closures in JavaScript?

To create modules so that we can provide public and private variables and functions

Organize the code in a clean and modular way.

How closures helps in minimizing and remembers

function add(b){
function addtwo(){
return a+b;
}
let a = 2;
return addtwo;
}

var aa = add(5);
aa();

https://www.quora.com/What-is-the-point-of-closures-in-JavaScript/answer/Manish-Dipankar-1

dont create closures as it creates in memory leak because of non deletion of old reference

function f() {
let value = 123;

return function() {
alert(value);
}
}

let g = f(); // g.[[Environment]] stores a reference to the Lexical Environment
// of the corresponding f() call

https://blog.meteor.com/an-interesting-kind-of-javascript-memory-leak-8b47d2e7f156

```
function f() {
  let value = 123;

  return function() {
    alert(value);
  }
}

let g = f(); // while g function exists, the value stays in memory

g = null; // ...and now the memory is cleaned up and this is the use of null
```

```
var memo1 = (fn) => {
  let cache = {};
  return function(...args){
      let aa = args.join()

    if(cache[aa]) {
alert("cache",JSON.stringify(cache));
      return cache[aa];
    }else{
      cache[aa] = fn.apply(this, args);
      return cache[aa];
    }

  }
}
var sum1 = (a,b) => a+b

var memoSum1 = memo1(sum1);
```

**Currying**
Currying is a transform that makes f(a,b,c) callable as f(a)(b)(c). JavaScript implementations usually both keep the function callable normally and return the partial if the arguments count is not enough.
Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

Currying doesn’t call a function. It just transforms it.
For instance, we have the logging function log(date, importance, message) that formats and outputs the information. In real projects such functions have many useful features like sending logs over the network, here we’ll just use alert:

https://javascript.info/currying-partials

```
function curry(func) {
console.log(func.length)
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        console.log('[[[[[[]]]]]]', args2)
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}
function sum(a,b,c){return a+b+c;}
var curriedSum1 = curry(sum); //this returns curried function alone
curriedSum1(1)(2)(3)
//value of args is [1]
curriedSum1(1) = function(...args2) {

        return curried.apply(this, args.concat(args2));
      }
//now when curriedSum1 is called with args (1) , then it returns the wrapper function(...args),
//again calling wrapper function with (2), returns curried function and applies previous args with current 2 so no two args (1,2) but still didnt satisfy IF condition part so again recursively returns function(...args2)
// now when called with (3), wrapper function returns with applied function three args and IF condition get executed with original func function . Here func is sum function
//gives result 6
```

**Immediately Invoked Function Expression / Self-Executing Anonymous Function**
that runs as soon as it is defined.
It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

- The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
- The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

The function becomes a function expression which is immediately executed. The variable within the expression can not be accessed from outside it.

```
(function () {
    var aName = "Barry";
})();
// Variable aName is not accessible from the outside scope
aName // throws "Uncaught ReferenceError: aName is not defined"
```

Assigning the IIFE to a variable stores the function's return value, not the function definition itself.

```
var result = (function () {
    var name = "Barry";
    return name;
})();
// Immediately creates the output:
result; // "Barry"
```

```
    (function(){var dd = 5;})()
    undefined
    (function(){this.dd = 5;})()
    undefined
    dd
    5 // this results because THIS belongs to window so getting result from console will be like this only.
```

for (var i = 0; i < 5; i++) {
setTimeout(() => {
console.log(i) // this logs the final value of i so it prints i value 5 times
}, i \* 1000)  
}

for (var i = 0; i < 5; i++) {
setTimeout(() => {
let self = i; // this makes no sense since when setTimeout is executing and final value from var i will be referenced to let self variable.
console.log(self) // this also logs the final value of i so it prints i value 5 times
}, self \* 1000)  
}

Hence,

for (var i = 0; i < 5; i++) {
(function (i){
setTimeout(() => {
console.log(i) // this prints each value differently since the function wrapped around setTimeout has argument value which cannot be referenced and its passed as value. Instead of going out of function, it just references the value from function argument and i guess that it acts as closures.
}, i \* 1000)
})(i)  
}

for (var i = 0; i < 5; i++) {
function hi(n){
setTimeout(() => {
console.log(n) // this prints each value differently since the function wrapped around setTimeout has argument value which cannot be referenced and its passed as value. Instead of going out of function, it just references the value from function argument and i guess that it acts as closures.
}, n \* 1000)
}
hi(i)  
}

By introducing LET variable, process and code gets simplified
for (let i = 0; i < 5; i++) {
setTimeout(() => {
console.log(i) // arrow function proves to maintain the scope and remembers the value from where it was called
}, i \* 1000)
}
}

**https://bonsaiden.github.io/JavaScript-Garden/#function.closures**

method chaining

$.addClass.addClass.removeClass.add

obj = {
a:1,
b:2,
add1= fn() {return this.a +this.b }
sub2 = fn() {return this}
}

obj.m1().m1()

let ladder = {
step: 0,
up() {
this.step++;
},
down() {
this.step--;
},
showStep: function() { // shows the current step
alert( this.step );
}
};

Now, if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

Modify the code of up, down and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep(); // 1

const [a,b] = useState(0);

return [currValue, setterFn]

useEffect

function useCustom(){  
 return {name: "arun"}
}

const [a,b] = useState(useCustom().name);

const memo = (pureFn): memoFn

const sum = (..args) => ...sum+args

const memoSum = memo(sum)

memoSum(1, 2) = 3
memoSum(1, 2) = 3

const memo = (fn) => {

return function(...args){
let aa = args.join()

    if(cache[aa]) {
      cache[aa] =
    }
    else{
      cache[aa] = fn(args);
      return fn(args)
    }

}
}

#### Validation using css and js inputs native

- https://bitsofco.de/form-validation-techniques/
- https://stackblitz.com/edit/js-email-validation-rxjs

### ES6 & ES7

arrow function, destructuring, rest parameters, spread operator, let , const, default parameters, Object.assign, array.from , array.of, Template literals, modules, iterators, generators, classes, async await, multi strings and interpolation `${}`, Set, Map, weakMap, weakSet

**Arrow functions** are anonymous and change the way this binds in functions. More concise, and simplify function scoping and the this keyword. we avoid having to type the function keyword, return keyword (it’s implicit in arrow functions), and curly brackets.

```
// ES5

    API.prototype.get = function(resource) {
      var self = this;
    return new Promise(function(resolve, reject) {
    http.get(self.uri + resource, function(data) {
    resolve(data);
    });
    });};

// ES6

    API.prototype.get = function(resource) {
    return new Promise((resolve, reject) => {
    http.get(this.uri + resource, function(data) {      resolve(data);    });  });};


    which implies same es5 code
    API.prototype.get = function (resource) {
  var _this = this;

  // var self = this;
  return new Promise(function (resolve, reject) {
    http.get(_this.uri + resource, function (data) {
      resolve(data);
    });
  });
};

```

```
var aa = {
a: function(){console.log(this)},
b: ()=>{console.log(this)},
c:{
ab: function(){console.log(this)},
bb: ()=>{console.log(this)}
}
}
aa.a() // {a:f, b: f, c:Object}
aa.c.ab() // {ab: ƒ, bb: ƒ}

aa.c.bb() // Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
```

this keyword works differently in arrow functions. The methods call(), apply(), and bind() will not change the value of this in arrow.

Unlike every other form of function, arrow functions do not have their own execution context.

Practically, this means that both this and arguments are inherited from their parent function.

https://zendev.com/2018/10/01/javascript-arrow-functions-how-why-when.html

Arrow functions in class field properties seem useful because they’re autobind, in short, no need to add this.handleClick = this.handleClick.bind(this) in the constructor.

But, should we really use arrow functions in class field properties?

Instead, use a regular function and if necessary bind it the instance in the constructor
https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1

Arrow functions can’t be used as constructors as other functions can. Don’t use them to create similar objects as you would with other functions. If you attempt to use new with an arrow function, it will throw an error. Arrow functions, like built-in functions (aka methods), don’t have a prototype property or other internal methods. Because constructors are generally used to create class-like objects in JavaScript, you should use the new ES6 classes instead.

Arrow functions don’t have the local variable arguments as do other functions.
https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/

What are new input attr types in html5 => range, color, date,search,tel

**Let** - The let statement declares a block scope local variable, optionally initializing it to a value.

```
    let x = 1;
    if (x === 1) {
      let x = 2;
      console.log(x);  // expected output: 2
    }
    console.log(x); // expected output: 1
    function varTest() {
            var x = 1;
            if (true) {
                var x = 2; // same variable!
              	console.log(x); // 2
            }
      		console.log(x); // 2
    }
```

Simply remember this.... window won’t take **let** variable

```
         let variables
                var x = 'global';
                let y = 'global';
                console.log(this.x);
    // "global"console.log(this.y); // undefined
    { console.time("loop");
    for (let i = 0; i < 1000000; i += 1)
    { // Do nothing } console.timeEnd("loop"); }

    loop: 8ms
    undefined
    { console.time("loop"); for (var i = 0; i < 1000000; i += 1){ // Do nothing } console.timeEnd("loop"); }
    loop: 581ms
```

Let runs in block scoped so runs faster than var .. Var normally attaches to window so slowly ran.

let is a block scoping variable where we can able to reassign values.
**Const** -> unlike const we cannot reassign values again but can change property values inside obj without changing reference.

**Const** is a little different from **let** as it wont allow to re-initailise/change the initial value as the keyword suggests constannt and it has to be declared initially necessarily.

The **destructuring** assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

let obj = {aa:1,bb:{cc:2}};
const {aa, bb:{cc}} = obj;
console.log(aa,"---",cc ) //1 "---" 2
```

**Spread** is an operator which has syntax **(...)** . Spread operator checks after variable which is iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

```
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6



const obj1 = {0:1,1:5,2:6}
const obj2 = {...obj1}

console.log(obj2) //Object { 0: 1, 1: 5, 2: 6 }
```

```
Syntax
For function calls:
myFunction(...iterableObj);

For array literals or strings:
[...iterableObj, '4', 'five', 6];

For object literals (new in ECMAScript 2018)ES7/:
let objClone = { ...obj };
```

USEs:
**Spread in function calls**

1.Replace apply(),
**2.Apply for new operator**
When calling a constructor with new it's not possible to directly use an array and apply() (apply() does a [[Call]] and not a [[Construct]]). However, an array can be easily used with new thanks to spread syntax

instead of push(), splice(), concat(), unshift()

copy an array=> const arr2 = [...arr]; // like arr.slice()

**Spread in object literals**

```
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

Note that Object.assign() triggers setters, whereas spread syntax doesn't.

**Rest syntax/parameters** looks exactly like spread syntax. In a way, rest syntax is the opposite of spread syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.
The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
Only the last parameter can be a "rest parameter".

- the arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly;
- arguments object contains all arguments passed to the function.
- Argument length

```
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10
```

```
// Before rest parameters, "arguments" could be converted to a normal array using:

function f(a, b) {
  let normalArray = Array.prototype.slice.call(arguments)
  let first = normalArray.shift()  // OK, gives the first argument
  let first = arguments.shift()    // ERROR (arguments is not a normal array)
}

// Now, you can easily gain access to a normal array using a rest parameter

function f(...args) {
  let normalArray = args
  let first = normalArray.shift() // OK, gives the first argument
}

```

#### XMLHttpRequest(XHR)

The XMLHttpRequest object can be used to exchange data with a server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.
readyState, onreadystatechanged, status, send , open , get , post(for large data) methods
append parameters in for http get url-

    xhttp.open("GET", "demo_get.asp?t=" + Math.random()+"&s=455", true);

use & to append parameters in url

#### Ajax

```
    function loadDoc() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         document.getElementById("demo").innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", "ajax_info.txt", true);
      xhttp.send();
    }

    onclick=loadDoc()
```

**callback**
In computer programming, a **callback**, also known as a "call-after" function, is any executable code that is passed as an argument to other code; that other code is expected to call back (execute) the argument at a given time.

Callback is synchronous only. But for network calls, it is useful to get desired result in callback.

so for network call, we need to send two callbacks(for success,failure) and if we depend on one response to feed into another then again it goes nested functions with two parameters like it goes for "N" request which will form doom of pyramid.
In order to avoid the doom, we use Promise and its chaining mechanism

**Promise** object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. Like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

3. When we return value from catch object and whether will next then object captures it --> think about how .then and catch methods come from. Think

**Async Await**
async function secondfn(someurl){
try{
var response = await fetch(someurl);
return response
}catch(e){

    }

}

await abstracts return new Promise((success, reject)=>{success() or reject()})

secondfn(url)

#### important

Did you notice how async functions are different compared to a promise then? The await keyword suspends the async function, whereas the Promise body would've kept on being executed if we would've used then!

- https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke

##### promise vs observable

    const source = Rx.Observable.of({name: 'Brian'}, [1,2,3], function hello(){
    return 'Hello'
    });
    //output: {name: 'Brian}, [1,2,3], function hello() { return 'Hello' }
    const subscribe = source.subscribe(val => console.log(val));

In observable return multple values but promise return one value with lot of objects or value inside.
Better not to compare promise with observable since observable is a producer of data or stream of data and can be consumed only when subscribed I.e like a calling a function.
Normal function returns single data;
Observable returns mutliple data, for Ex: can be async calls data, event handler data, timer funtions

**iterators**
**generators**
redux saga

**Factory Function instead of class**

    class Dog {
      constructor() {
        this.name = "woof";
      }
      bark() {
        console.log(this.name)
      }
    }
    var dd = new Dog()
    dd.bark();

    $('button').click(dd.bark)
    // does not work
    $('button').click(dd.bark.bind(dd))
    // works
    $('button').click(()=>dd.bark())
    // works using arrow function

    // so instead of creating objects, create  factories
    const Dog1 = ()=>{
      const name = "woof";

      return {
        bark: ()=>console.log(this.name)
      }
    }

    const sniff = Dog1();
    sniff.bark(); //works
    $('button').click(sniff.bark)

https://www.youtube.com/watch?v=ImwrezYhw4w

#### Setters && getters

The set syntax binds an object property to a function to be called when there is an attempt to set that property.Setters are most often used in conjunction with getters to create a type of pseudo-property. It is not possible to simultaneously have a setter on a property that holds an actual value.

```
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
};

language.current = 'EN';
language.current = 'FA';

console.log(language.log);
// expected output: Array ["EN", "FA"]
```

Similarlly check for getters
Getters can do operation on actual properties and return value for pseudo property.

#### Symbol

- Symbol is a primitive type for unique identifiers.
- Symbols are created with Symbol() call with an optional description.

  let id = Symbol();

Symbols are always different values, even if they have the same name.

    let id1 = Symbol("id");
    let id2 = Symbol("id");
    alert(id1 == id2); // false

- If we want same-named symbols to be equal, then we should use the global registry: Symbol.for(key) returns (creates if needed) a global symbol with key as the name. Multiple calls of Symbol.for return exactly the same symbol.
- Symbols don’t auto-convert to a string
- Most values in JS support implicit conversion to a string even numbers like user[1] similar to user[‘1’] converted to string but not symbols

  let id = Symbol("id");
  alert(id); // TypeError: Cannot convert a Symbol value to a string
  alert(id.toString()); // Symbol(id), now it works

**In Object literal:**

    let id = Symbol("id");
    let user = {  name: "John",  [id]: 123 // not just "id: 123"};

- Symbols allow us to create “hidden” properties of an object, that no other part of code can occasionally access or overwrite.
- Imagine two script file wants to have its own “id” property inside user,Then that script can create its own Symbol("id"), like this:
  user[id] = "Their id value"; //There will be no conflict. Since both unaware of each other but user[‘id’] strings will create conflict.

**Symbols have two main use cases:**

1. “Hidden” object properties. If we want to add a property into an object that “belongs” to another script or a library, we can create a symbol and use it as a property key. A symbolic property does not appear in for..in, it skipps so it won’t be occasionally listed but Object.assign will copy to new object since nature of js to copy its all properties. Also it won’t be accessed directly, because another script does not have our symbol, so it will not occasionally intervene into its actions.
2. So we can “covertly” hide something into objects that we need, but others should not see, using symbolic properties.
3. There are many system symbols used by JavaScript which are accessible as Symbol.\*. We can use them to alter some built-in behaviors. For instance, later in the tutorial we’ll use Symbol.iterator for iterables, Symbol.toPrimitive to setup object-to-primitive conversion and so on.
   Technically, symbols are not 100% hidden. There is a built-in method Object.getOwnPropertySymbols(obj) that allows us to get all symbols. Also there is a method named Reflect.ownKeys(obj) that returns all keys of an object including symbolic ones. So they are not really hidden. But most libraries, built-in methods and syntax constructs adhere to a common agreement that they are. And the one who explicitly calls the aforementioned methods probably understands well what he’s doing.

- Refer global symbols => https://javascript.info/symbol#global-symbols
- Cancel a default action and prevent it from bubbling up by returning false:
  https://javascript.info/event-delegation

### JS security related:

- https://dzone.com/articles/cookies-vs-tokens-the-definitive-guide
- 🔐 Learn how to use JSON Web Token (JWT) to secure your next Web App! (Tutorial/Example with Tests!!)
  https://github.com/dwyl/learn-json-web-tokens
- https://www.gnucitizen.org/blog/csrf-demystified/
- CSP
- XSS & CSRF
- iframe clickjacking
- brute force attack
- untrusted data source
- html output decoding / entity / textcontent/innertext
- HTML5 security problems

socket.io unauthorized

Typesafe -> strict mode -> file order - iife
Main difference between Es5 and ES6 are scoping issue, global scope, strict mode

Instead of document.domain because of sharing across frames coming from subdomains

so when it allows subdomain frames to access document.domain Xss can found in subdomain can access parent domain and same origin policy is waste and useless so use post message api

Alice logs in website which stores sensitive information. now what happen is Bob sends fruscated mail to Alia -> alia clicks it -> malicious url load in webpage and stores localstorage with malicious code.

now malicious code inside application browser context by bypassing SOP and SOP things its a safe.

Malicious code steals sensitive information like user sends as Http get, post.

and send to bob computer to access their info.

Web cookie and seesion

**Data flow**
Attackers normally targets inputs and output of code, Url, forms, storage, plugins, clickjacking

**malicious sink**

- document.write(), innerHtml, location.\* , location.assign(), eval(string), setTimeout, setInterval, execscript

**Source**

- Anything the user has control over like document.referrer, window.name, location, event.data, storages, cookies, document.write("<option> decodeURI(document.location.hash)</option>")
  so here sink writes content and user has control over input

#### Security issues in HTML5

- Clickjacking, XSS, Script injecting
- Cross messaging document/ web messaging api
- CORS-
- CSP(content security policy) -> avoid multiple csp, inline javascript => media-src,directive-src, styles-src, default-src, csp2=> nounce, hash
- iframe sandbox
- video poster elements
- drag and drop clickjacking
- cookies and localstorage clearing explicitily,
- web workers post message - validation of origin/ data
- geolocation
- svg canvas scripting vulnerable
- filesystem api sandboxed vulnerable

##### Error messages:

- https://raw.githubusercontent.com/ArunHub/Q-A/master/.github/understand%20your%20error%20messages.jpg

### Rxjs

- http://reactivex.io/rxjs/manual/overview.html#introduction
- http://reactivex.io/rxjs/class/es6/MiscJSDoc.js~ObserverDoc.html
- https://github.com/ReactiveX/rxjs/blob/master/doc/introduction.md
- http://reactivex.io/documentation/operators.html
- http://rxmarbles.com/
- https://codecraft.tv/courses/angular/reactive-programming-with-rxjs/streams-and-reactive-programming/
- https://blog.angularindepth.com/learn-to-combine-rxjs-sequences-with-super-intuitive-interactive-diagrams-20fce8e6511
- https://stackblitz.com/edit/cold-warm-hot
- https://stackblitz.com/edit/js-tripleselect-rxjs
  **Rxjs operators -**

• FILTERING OPERATORS, Conditional Operators, CREATION OBSERVABLES
• MATHEMATICAL OPERATORS, TRANSFORMATION OPERATORS, UTILITY OPERATOR
Fork join - is equal to join multiple observable to emit after all the response are successful and completed like promise.all()
Create: create observable with callback funtion to create .next() , .error(), .complete()
Of: emits values simultaniealy
Map, filter

https://coursetro.com/posts/code/150/RxJS-Operators-Tutorial---Learn-How-to-Transform-Observables

**Subject:**
We are creating two observables that are independent of each other. But what if you need the second observer to get the same events has the first?

    const interval$ = Rx.Observable.interval(1000);

    	interval$.subscribe(console.log);

    	setTimeout(() => {
    	  interval$.subscribe(console.log);
    	}, 2000);

Subject can act as a bridge/proxy between the source Observable and many observers, making it possible for multiple observers to share the same Observable execution.

    const interval$ = Rx.Observable.interval(1000);
    	const subject = new Rx.Subject();
    	interval$.subscribe(subject);

Subject is observing the interval Observable, so every time the interval send values to the Subject, the Subject send this values to all his observers.
https://netbasal.com/understanding-subjects-in-rxjs-55102a190f3

**What we can do when large response data comes from network api response** while browser has so many browser tabs?

- then we can implement increasing heap size for our application/particular tab
- and also can get large response data using observable than promise since it returns whole data and may get delay. Using observable, can implement pagination and load streams of 100 chunk data in background and make browser smoother

---

---

#### Q and Ans

1. Testing your this knowledge in JavaScript: What is the output of the following code?

```
    var length = 10;
    function fn() {
           console.log(this.length);
    }

    var obj = {
      length: 5,
      method: function(fn) {
        fn();
        arguments[0]();
      }
    };

    obj.method(fn, 1);
    Hide answer
    Output:
    10
    2
```

Why isn’t it 10 and 5?
In the first place, as fn is passed as a parameter to the function method, the scope (this) of the function fn is window.var length = 10; is declared at the window level. It also can be accessed as window.length or length or this.length (when this === window.)

method is bound to Object obj, and obj.method is called with parameters fn and 1. Though method is accepting only one parameter, while invoking it has passed two parameters; the first is a function callback and other is just a number.

When fn() is called inside method, which was passed the function as a parameter at the global level, this.length will have access to var length = 10 (declared globally) not length = 5 as defined in Object obj.
Now, we know that we can access any number of arguments in a JavaScript function using the arguments[] array.
Hence arguments[0] () is nothing but calling fn().

Inside fn now, the scope of this function becomes the arguments array, and logging the length of arguments[] will return 2.
Hence the output will be as above.

2. Assuming d is an “empty” object in scope, say:

```
    var d = {};
    …what is accomplished using the following code?

    [ 'zebra', 'horse' ].forEach(function(k) {
                    d[k] = undefined;
    });
```

answer badge
The snippet of code shown above sets two properties on the object d. Ideally, any lookup performed on a JavaScript object with an unset key evaluates to undefined. But running this code marks those properties as “own properties” of the object.

This is a useful strategy for ensuring that an object has a given set of properties. Passing this object to Object.keys will return an array with those set keys as well (even if their values are undefined).

3. Consider the following code. What will the output be, and why?

```
    (function () {
        try {
            throw new Error();
        } catch (x) {
            var x = 1, y = 2;
            console.log(x);
        }
        console.log(x);
        console.log(y);
    })();

Hide answer
1
undefined
2
```

var statements are hoisted (without their value initialization) to the top of the global or function scope it belongs to, even when it’s inside a with or catch block. However, the error’s identifier is only visible inside the catch block. It is equivalent to:

```
    (function () {
        var x, y; // outer and hoisted
        try {
            throw new Error();
        } catch (x /* inner */) {
            x = 1; // inner x, not the outer one
            y = 2; // there is only one y, which is in the outer scope
            console.log(x /* inner */);
        }
        console.log(x);
        console.log(y);
    })();
```

**circular reference**
A circular reference occurs if two separate objects pass references to each other. In older browsers circular references were a cause of memory leaks. With improvements in Garbage collection algorithms, which can now handle cycles and cyclic dependencies fine, this is no longer an issue.Sep 17, 2019

**How to remove circular reference json in JavaScript**

Use dynamic object property in es 6 ... Refer asynchronous actions in redux or react forms page ... search as computed property name

1.  name the primitive data types? number, boolean, string, null. Is function is a datatype - no
2.  Various methods to call a function difference between function call and apply At what scenario call and apply are useful ? Math.max.apply(this,arr) and when we want to invoke another function properties like inheriting properties from parent super props with our context
3.  suppose if sending an undeclared object directly in apply first parameter, what it returns ? --> undefined

4.  Polymorphism in js
5.  How will you find which browser running - navigator
6.  What history object does in javascript - state for back,forward, and methods to change url

7.                    Object literal has prototype or __proto__ - prototype is a naming concept and __proto__ is a syntax for prototype chaining representation. When attaching a prototype property , we can use prototype method to attach to constructor function. prototype can be used only constructor function.
8.  Assigning function constructor to a variable/ try iife to capital variable
9.  Fastest way to traverse array? Why filter faster than map hint: filter caches array. For example - for duplicate arrrays

10. Sequentially or parallely execution process - Sequentially since it is a single threaded
11. Local file fetching or CDN - can use PWA for local file and browser caches cdn
12. If local, if some changes happen how will the server detects its a new file
13. If obj={}, construction function create object, does prototype exists in both. Why not use first itself
14. How will you use rest operator in instead of object.assign in reducer

15. Search bar to filter list of object items{ question, answers } -use indexOf of items with search text
16. 0 + true =?
    A + true =?
    **What does comma do in js?**

```
handler = ()=> (y=4,c=3); // returns 3 ; Why?
```

https://stackoverflow.com/questions/3561043/what-does-a-comma-do-in-javascript-expressions

10. Map vs filter =>

```
    [{id:1,check:true},{id:2,check:false},{id: 3, check:true}].map( t=> return t.check);
    // return [true, undefined, true]
```

    Comes the rescue. Filter => it does filtering only as results // {id:1,check:true},{id: 3, check:true} // checks for truthy.

1. Two es6 functions and es5 functions with console.log(this) console.log(arguments). What it prints -> there is no arguments in arrow functions
2. If we bind one function with other and passing value and when we call the assigned variable with another variable what will happen

3. Bind in arrow functions - it does nt have this feature.
4. Function with object literal and its methods like increment and decrement and variable outside the object and returning that object. So when we call that object method to increment ++ and decrement ++ what it will print when obj.incr and obj.incr and obj.decr ?--> it will print the answer correctly.
   If we do step5 in constructor function, what it will return
5. Function hosting - when javascript file is getting read, functions which are declared are gets place in lexical environment
6. Higher order functions - function returning function which can be called later
7. Lodash throttle - no matter how many times the function called, it is executed only once at given time interval . Internally function DoOnce is implemented i guess. Contrarly , Debounce will be executed once the user stops typing within given point of time.

The term debounce comes from electronics. When you’re pressing a button, let’s say on your TV remote, the signal travels to the microchip of the remote so quickly that before you manage to release the button, it bounces, and the microchip registers your “click” multiple times.
debounce-button

To mitigate this, once a signal from the button is received, the microchip stops processing signals from the button for a few microseconds while it’s physically impossible for you to press it again.

#### ECMA 5 Questions ???

1. How do you declare variables in JavaScript with strong typing?
2. How do you declare constants in JavaScript?
3. How do you declare strongly typed arrays in JavaScript?
4. How do you pass strongly types array as a parameter to a function in JavaScript?
5. How do you scope variables in JavaScript?
6. Can you scope variables declared in If condition or for loop?
7. How do you compare two variables with wiue and type?
8. How do you implement type inference in JavaScript?
9. How do you declare a function which is void in JavaScript?
10. How do you declare a function which takes strongly typed parameters in JavaScript?
11. How do you declare a function which returns strongly typed value?
12. How do you implement function overloading in JavaScript?
13. How do you declare a function with optional parameters?
14. How do you declare a function with default parameters?
15. How do you declare a function with REST parameters?
16. How do you declare an anonymous function in JavaScript?
17. How do you declare an enum in JavaScript?
18. How do you declare a class in JavaScript?
19. How do you declare strongly typed properties in JavaScript?
20. How do you declare a constructor with strongly typed parameters in JavaScript?
21. How do you declare an abstract class in JavaScript?
22. How do you implement class inheritance ifs JavaScript?
23. How do you declare an interface in JavaScript?
24. How doyou declare option properties and optional functions prototypes in an interface?
25. How do you implement an interface in a class in JavaScript?
26. How do you declare namespaces in JavaScript?
27. How do you declare generic interface in JavaScript?
28. How do you declare generic class in JavaScript?
29. How do you declare generic class with constraints in JavaScript?
30. Can we achieve all Object Oriented Programming features in JavaScript?

===========================================================

##### All Js libraries in micro size format. very efficient

- http://microjs.com/#

### OCR reading library

- https://tesseract.projectnaptha.com/

### without jquery

- https://www.sitepoint.com/make-a-simple-javascript-slideshow-without-jquery/

**create js plugin**

set default options and have provision to accept extra options

https://scotch.io/tutorials/building-your-own-javascript-modal-plugin#toc-the-javascript

initiate object instance with your options
seperate constructor, public, private methods
u will have public methods to perform desired actions on instance variable

#### hamburger menu

https://jonsuh.com/hamburgers/

##### Dev tools

- Chrome devtools extension for debugging from VS CODE
  ![devtools-1](https://raw.githubusercontent.com/ArunHub/Q-A/master/.github/configuration%20of%20devtools-1.jpeg)
  ![devtools-2](https://raw.githubusercontent.com/ArunHub/Q-A/master/.github/configuration%20of%20devtools-2.jpeg)

- https://medium.com/outsystems-experts/beyond-console-debugging-tricks-f7d0d7f5df4#.ujzyp55mj

- Set a Timed Debugger To Web Inspect Hard-To-Grab Elements | CSS-Tricks

##### menu scroll top

http://stackoverflow.com/questions/1144805/scroll-to-the-top-of-the-page-using-javascript-jquery

http://jsfiddle.net/osoh6o5a/

```

  var menuclick = $('ul.nav li a');

  menuclick.click(function(){

  var divPosition = $('#pricing').offset();

  $('html, body').animate({scrollTop: divPosition.top}, "slow");

  });

```

##### testi | our team | inpspect elemtent | timline

​http://themexlab.com/eventon/meeton/schedule.html

http://themexlab.com/eventon/meeton/speakers.html

http://themexlab.com/eventon/meeton/index.html

##### Tips

- http://code.tutsplus.com/tutorials/20-helpful-jquery-methods-you-should-be-using--net-10521

- http://benalman.com/code/projects/jquery-outside-events/examples/clickoutside/

- https://github.com/AllThingsSmitty
- https://github.com/twhite96/js-dev-reads

- http://stackoverflow.com/questions/10213703/how-do-i-view-events-fired-on-an-element-in-chrome-web-developer

##### Jquery Menu==========

http://toddmotto.com/html5-and-jquery-super-simple-drop-down-nav/

https://css-tricks.com/simple-jquery-dropdowns/

http://jsfiddle.net/i_like_robots/6JbtX/

##### for muliline

https://css-tricks.com/line-clampin/

using jquery

http://jsfiddle.net/k5VET/

##### many carousel====

http://coolcarousels.frebsite.nl/c/21/

##### jquery slider wow==========

- http://plugins.jquery.com/WOWSlider/ , has many effects and slider designs

##### auto hide sticky header ====

http://osvaldas.info/auto-hide-sticky-header?utm_content=bufferfc972&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

```

<body  onunload="alert('Thank you. Please come back to this site and visit us soon, ok?')">

```

### Jquery bookmarks

- Hide your header on scroll - Headroom.js - https://wicky.nillia.ms/headroom.js/

-15 Form Validation jQuery Plugins and Libraries - https://speckyboy.com/form-validation-jquery-plugins-libraries/

- 45 top examples of JavaScript | JavaScript | Creative Bloq - http://www.creativebloq.com/web-design/examples-of-javascript-1233964
- 30 Lightweight JavaScript Plugins and Libraries from 2016
- You Might Not Need jQuery
- Simple jQuery Examples with Code and Demos – Tania Rascia
- https://tutorialzine.com/2016/05/15-interesting-javascript-and-css-libraries-for-may-2016

### Googlemap bookmarks

https://stackoverflow.com/questions/2792698/google-maps-api-v3-how-to-jump-to-a-specific-marker-from-outside-the-map

https://www.codingforums.com/javascript-programming/207457-google-maps-jump-markers-help.html

https://developers.google.com/maps/documentation/javascript/examples/control-custom

### mind mapping tools

https://www.creativebloq.com/web-design/mind-mapping-tools-9134523

##### Mock APIs

- Dummy/fake apis
- Myjson.com
- Jsonplaceholder.typicode.com
- Swapi.co
- Mockable.io
- mockit.netlify
