**Promise** object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. Like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

closJs – es6 arrow, destructive, rest , spread, closures, let , const =>

**Arrow functions** are anonymous and change the way this binds in functions. More concise, and simplify function scoping and the this keyword. we avoid having to type the function keyword, return keyword (it’s implicit in arrow functions), and curly brackets.
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

this keyword works differently in arrow functions. The methods call(), apply(), and bind() will not change the value of this in arrow 

Arrow functions can’t be used as constructors as other functions can. Don’t use them to create similar objects as you would with other functions. If you attempt to use new with an arrow function, it will throw an error. Arrow functions, like built-in functions (aka methods), don’t have a prototype property or other internal methods. Because constructors are generally used to create class-like objects in JavaScript, you should use the new ES6 classes instead.

Arrow functions don’t have the local variable arguments as do other functions.
https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/ 

Reverse a string, map function, hoisting

What are new input attr types in html5 => range, color, date,search,tel


Let - The let statement declares a block scope local variable, optionally initializing it to a value.

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

Simply remember this.... window won’t take
       

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

Let runs in block scoped so runs faster than var .. Var normally attaches to window so slowly ran.

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

1.	“Hidden” object properties. If we want to add a property into an object that “belongs” to another script or a library, we can create a symbol and use it as a property key. A symbolic property does not appear in for..in, it skipps so it won’t be occasionally listed but Object.assign will copy to new object since nature of js to copy its all properties. Also it won’t be accessed directly, because another script does not have our symbol, so it will not occasionally intervene into its actions.
2.	So we can “covertly” hide something into objects that we need, but others should not see, using symbolic properties.
3.	There are many system symbols used by JavaScript which are accessible as Symbol.*. We can use them to alter some built-in behaviors. For instance, later in the tutorial we’ll use Symbol.iterator for iterables, Symbol.toPrimitive to setup object-to-primitive conversion and so on.
Technically, symbols are not 100% hidden. There is a built-in method Object.getOwnPropertySymbols(obj) that allows us to get all symbols. Also there is a method named Reflect.ownKeys(obj) that returns all keys of an object including symbolic ones. So they are not really hidden. But most libraries, built-in methods and syntax constructs adhere to a common agreement that they are. And the one who explicitly calls the aforementioned methods probably understands well what he’s doing.

- Refer global symbols => https://javascript.info/symbol#global-symbols 
- Cancel a default action and prevent it from bubbling up by returning false:
https://javascript.info/event-delegation 

- If u want deep clone an object, use JSON.parse(JSON.stringify(Obj))
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone

#### Advanced js questions – toptal
https://www.javatpoint.com/javascript-interview-questions 

**Mutable**-
http://doesitmutate.xyz

**closures** – is a technique implemented to remember environment when it was called with a function inside to access the local variable n outside variable

    function add(x)
       function addX(y)
           return y + x
       return addX
    
    variable add1 = add(1)
    variable add5 = add(5)
    
    assert add1(3) = 4
    assert add5(3) = 8

> function createCounter() {
2:   let counter = 0
3:   const myFunction = function() {
4:     counter = counter + 1
5:     return counter
6:   }
7:   return myFunction
8: }
9: const increment = createCounter()
10: const c1 = increment()
11: const c2 = increment()
12: const c3 = increment()
13: console.log('example increment', c1, c2, c3)

Here is how it works. Whenever you declare a new function and assign it to a variable, you store the function definition, as well as a closure. The closure contains all the variables that are in scope at the time of creation of the function. It is analogous to a backpack. A function definition comes with a little backpack. And in its pack it stores all the variables that were in scope at the time that the function definition was created.

The key to remember is that when a function gets declared, it contains a function definition and a closure. The closure is a collection of all the variables in scope at the time of creation of the function.
https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8 

**prototype?**

**Iife??**

    (function(){var dd = 5;})()
    undefined
    (function(){this.dd = 5;})()
    undefined
    dd
    5

**lexical scopes => closures**

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

### es6
arrow function(dd = ff() => {console.log(55)} will not be useful in this case), 

multi strings and interpolation `${}`
spread operator […a]
taking particular property out of object.. const {a} =this.props  // destructive function
circular reference in js
Indexdb => low-level API for client-side storage of significant amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data. While Web Storage is useful for storing smaller amounts of data, it is less useful for storing larger amounts of structured data. IndexedDB provides a solution.
Note: This feature is available in Web Workers.
https://developers.google.com/web/ilt/pwa/working-with-indexeddb 
##### pass by reference

    Var obj1={a:1,b:2}; 
    obj2=obj1; 
    obj2.b = 3; then console.log(obj1) 
    // {a:1, b:3} after changing in b in obj , the value 3 automatically changes in obj1 . 
    //So javascript is pass by reference.

##### call apply bind

    var obj = {a:1,b:2,c:function(){console.log('bb',this.b)}}
    undefined
    var dd = obj.c; // giving reference to var dd
    undefined
    dd() // bb undefined
    obj.c() // bb 2
    var dd = obj.c.bind(obj);
    dd() // now shows as bb 2
    var dd = obj.c.call(obj); // without calling dd() … call invokes the function and results as bb 2

But this does not work in arrow function declared as method inside object.
Because Arrow functions cannot be used to write object methods because, as you have found, since arrow functions close over the this of the lexically enclosing context, the this within the arrow is the one that was current where you defined the object. Which is to say:

It works like this only => http://jsfiddle.net/bfyarxfe/2/ 

    function myFunction(x, y, z) { }var args = [0, 1, 2];myFunction.apply(null, args);

**Apply will give the array to apply automatically to the given parameters.**

While in case of `call()` , you have to explicitly give the parameters not array.
`Call()` is like invoking function with context given as first parameter.

    myFunction.call(null, 0,1,2);

Suppose if u r in prototype method of object and calling function which is declared globally , so when invoking global function it will call from window as this , so when u invoke the function with object this and with parameters , global functions invokes in context of object this.

    Function Tab(){
    This.name: “dfs”;this.func=function(){ render.call(this, “hello”)} 
    }
    Function global(){
    Var name = this.name} //here this refers to Tab Object instead of window

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

#### design patterns – 
remember using module pattern in ng1 – (

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

#### prototype design – 
To clone an object, a constructor must exist to instantiate the first object. Next, by using the keyword prototype variables and methods bind to the object's structure.

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

#### localstorage session cookies

**LocalStorage:**

1.	Web storage can be viewed simplistically as an improvement on cookies, providing much greater storage capacity. Available size is 5MB which considerably more space to work with than a typical 4KB cookie.
2.	The data is not sent back to the server for every HTTP request (HTML, images, JavaScript, CSS, etc) - reducing the amount of traffic between client and server.
3.	The data stored in localStorage persists until explicitly deleted. Changes made are saved and available for all current and future visits to the site.
4.	It works on same-origin policy. So, data stored will only be available on the same origin.
Cookies:
1.	We can set the expiration time for each cookie
2.	The 4K limit is for the entire cookie, including name, value, expiry date etc. To support most browsers, keep the name under 4000 bytes, and the overall cookie size under 4093 bytes.
3.	The data is sent back to the server for every HTTP request (HTML, images, JavaScript, CSS, etc) - increasing the amount of traffic between client and server.
sessionStorage:
1.	It is similar to localStorage.
2.	Changes are only available per window (or tab in browsers like Chrome and Firefox). Changes made are saved and available for the current page, as well as future visits to the site on the same window. Once the window is closed, the storage is deleted
3.	The data is available only inside the window/tab in which it was set.
4.	The data is not persistent i.e. it will be lost once the window/tab is closed. Like localStorage, it works on same-origin policy. So, data stored will only be available on the same origin.

**advanced js questions - https://www.toptal.com/javascript/interview-questions**

#### ajax
 

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

#### Xhr
The XMLHttpRequest object can be used to exchange data with a server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.
readyState, onreadystatechanged, status, send , open , get , post(for large data) methods
append parameters in for http get url-

    xhttp.open("GET", "demo_get.asp?t=" + Math.random()+"&s=455", true);

use & to append parameters in url

**OOJS?** 

#### Objects 
So when you used string methods like:

    myString.split(',');

You were using a method available on an instance of the String class. Every time you create a string in your code, that string is automatically created as an instance of String, and therefore has several common methods/properties available on it.

When you accessed the document object model using lines like this:

    var myDiv = document.createElement('div');

You were using methods available on an instance of the Document class. For each webpage loaded, an instance of Document is created, called document, which represents the entire page's structure, content, and other features such as its URL. Again, this means that it has several common methods/properties available on it.

**Abstraction**
 
know about a person (their address, height, shoe size, DNA profile, passport number, significant personality traits ...) , but in this case we are only interested in showing their name, age, gender, and interests, want to be able to write a short introduction about them based on this data, and get them to say hello. This is known as abstraction — creating a simple model of a more complex thing, which represents its most important aspects in a way that is easy to work with for our program's purposes.

Class : Person
{Name,age,gender,interests, bio:function(), greeting:function()}

When an object instance is created from a class, the class's constructor function is run to create it. This process of creating an object instance from a class is called instantiation — the object instance is instantiated from the class.
In OOP, we can create new classes based on other classes — these new child classes can be made to inherit the data and code features of their parent class, so you can reuse functionality common to all the object types rather than having to duplicate it.

The fancy word for the ability of multiple object types to implement the same functionality is polymorphism
Prototype chain in javascript

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


============================================
1. Testing your this knowledge in JavaScript: What is the output of the following code?

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

Why isn’t it 10 and 5?
In the first place, as fn is passed as a parameter to the function method, the scope (this) of the function fn is window.var length = 10; is declared at the window level. It also can be accessed as window.length or length or this.length (when this === window.)

method is bound to Object obj, and obj.method is called with parameters fn and 1. Though method is accepting only one parameter, while invoking it has passed two parameters; the first is a function callback and other is just a number.

When fn() is called inside method, which was passed the function as a parameter at the global level, this.length will have access to var length = 10 (declared globally) not length = 5 as defined in Object obj.
Now, we know that we can access any number of arguments in a JavaScript function using the arguments[] array.
Hence arguments[0] () is nothing but calling fn(). 

Inside fn now, the scope of this function becomes the arguments array, and logging the length of arguments[] will return 2.
Hence the output will be as above.
 
 
2. Assuming d is an “empty” object in scope, say:
 

    var d = {};
    …what is accomplished using the following code?
     
    [ 'zebra', 'horse' ].forEach(function(k) {
                    d[k] = undefined;
    });

answer badge
The snippet of code shown above sets two properties on the object d. Ideally, any lookup performed on a JavaScript object with an unset key evaluates to undefined. But running this code marks those properties as “own properties” of the object.
 
This is a useful strategy for ensuring that an object has a given set of properties. Passing this object to Object.keys will return an array with those set keys as well (even if their values are undefined).
 
 
3. Consider the following code. What will the output be, and why?

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
var statements are hoisted (without their value initialization) to the top of the global or function scope it belongs to, even when it’s inside a with or catch block. However, the error’s identifier is only visible inside the catch block. It is equivalent to:

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

 
Interview Questions
--

**Prokarma**

1.	Event loop in js
2.	Function  expression in js
3.	Assign anonymous function to variable?
9.	Es6 spread vs rest, function vs arrow fn
10.	First class functions #pure function
11.	Polymorphism in js
12.	Achieve prototype inheritance
13.	Different types of creating object
14.	Apply and call
15.	Modular pattern and module releasing pattern
16.	Npm run start
17.	Unit testing . How to mock backend calls
18.	Use strict and non strict
19.	This in use strict
20.	Closures
21.	Pseudo elements
22.	Document.object
23.	How will you find which browser running
24.	What history object does in javascript


**Olam**

 1. Ways to create object
 2.     Object literal has prototype or __proto__ 
 3. Localstorage from one domain can be accessed in another domain in another tab? Subdomains?
 4. Assigning function constructor to a variable/ try iife to capital variable
 5. Fastest way to traverse array? Why filter faster than map hint: filter caches array

**Deloit**

1.	Web security
2.	Access cookies in subdomain
3.	Closures
4.	This keyword inside promise
5.	Nested objects cloning
7.	How browser html start rendering from server its life cycles
8.	How script tag executed when jQuery n custom query are loaded
9.	Sequentially or parallely
10.	ASync await
11.	Promises
12.	Const let var
13.	Const with primitive n object manipulation scenario
14.	Local file fetching or CDN
15.	If local, if some changes happen how will the server detects its a new file
16.	If obj={}, construction function create object, does prototype exists in both. Why not use first itself
17.	How we store previous state before changing new state in reducers
18.	How will you use rest operator in instead of object.assign in reducer
19.	Why react better than angular
20.	This inside promises

Answers for first round:
21.	We used session storage to expire the page after some specific time. Use cookie with httponly to make editable in server side. Deletes cookie by 

    document.cookie = 'foo=; expires=Thu, 01 Jan 1970 00:00:00 UTC;'

22.	Domain cookies are included in subdomains.
23.	Refer mdn and closures more than 3 level scopes ?

**capg**
1. Arrow fun vs normal function

    let sunday = {
        a:1,
        b:2,
        c: ()=>{
            console.log(this.a)
        }
    }
    // sunday.a = 5;
    console.log(sunday);

	Arrow functions cannot be used to write object methods because, as you have found, since arrow functions close over the this of the lexically enclosing context, the this within the arrow is the one that was current where you defined the object. Which is to say:

2. Const vs let - Study properly
3. Destructive
4. Async , await
5. Promises
6. Search bar to filter list of object items{ question, answers }
7. Redux flow
8. Function anonymous and sampleOne ??

    var sample = funtion sampleOne(){
    Console.log(‘dfdfddf’);
    }
9. 0 + true =?
    A + true =? 

10. Map vs filter => 

    [{id:1,check:true},{id:2,check:false},{id: 3, check:true}].map( t=> if(t.check) return t.id); // return id1,null,id3

	Comes the rescue. Filter => it does filtering only as results // id1, id2 // checks for truthy.


**Wissen**

Let -> let is a block scoping variable where we can able to reassign values.
Const -> unlike const we cannot reassign values again but can change property values inside obj without changing reference.
Array 



1.	Two es6 functions and es5 functions with console.log(this) console.log(arguments). What it prints
2.	If we bind one function with other and passing value and when we call the assigned variable with another variable what will happen
3.	When we return value from catch object and whether will next then object captures it
4.	Bind in arrow functions
5.	Function with object literal and its methods like increment and decrement and variable outside the object and returning that object. So when we call that object method to increment ++ and decrement ++ what it will print when obj.incr and obj.incr and obj.decr
7.	When we apply particular button extra class .. then whats the purpose of reusable of classes
8.	Angular performance and react
9.	Callbacks and promises
10.	Function hosting
11.	Higher order functions
12.	Lodash throttle
13.	Closures
14.	Best way to use constructor function and object literal
15.	If we do step5 in constructor function, what it will return
16.	Arrow functions this