
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

**sessionStorage:**

1.	It is similar to localStorage.
2.	Changes are only available per window (or tab in browsers like Chrome and Firefox). Changes made are saved and available for the current page, as well as future visits to the site on the same window. Once the window is closed, the storage is deleted
3.	The data is available only inside the window/tab in which it was set.
4.	The data is not persistent i.e. it will be lost once the window/tab is closed. Like localStorage, it works on same-origin policy. So, data stored will only be available on the same origin.

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


const readline = require('readline');

var taskList = [{taskname: 'algorithm', count: 0, id: 1}, {taskname: 'exercise', count: 0, id: 2}, {taskname: 'future', count: 0, id: 3}, {taskname: 'shop', count: 0, id: 4}, {taskname: 'test_or_ownProject', count: 0, id: 5}, {taskname: 'bb', count: 0, id: 6}, {taskname: 'doubt', count: 0, id: 7}, {taskname: 'stackoverflow', count: 0, id: 8}, {taskname: 'household', count: 0, id: 9}, {taskname: 'game', count: 0, id: 10}, {taskname: 'mail', count: 0, id: 11}, {taskname: 'entertainment', count: 0, id: 12}, {taskname: 'news_channel', count: 0, id: 13}]
taskList.forEach(t=>{
	console.log(t.id+". "+t.taskname + " - " + t.count);	
})

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findId(id){
	var temp = taskList.find(function(t){
		console.log(id,"ttttttt",t);
		return t.id === id;
	})
	console.log("text",temp);
	return temp;
}

rl.on('line', (input) => {
	// if () {}
	console.log("Enter the id to take action:");
  console.log(`Received: ${findId(input)}`);
});

rl.on('pause', (input) => {
	// if () {}
	console.log("Enter t:");
  console.log(`Received: ${input}`);
});

// rl.question('Which task you completed? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

============  
  

#### for while do while loops and switch statements - control flow================

As we mentioned, for

loops are great for doing the same task over and over when you know

ahead of time how many times you'll have to repeat the loop. On the

other hand, while loops are ideal when you have to loop, but you don't know ahead of time how many times you'll need to loop.

  

As you saw, however, you can combine a while loop with a counter variable to do the same kind of work a for loop does. In these cases, it's often a matter of preference.

  

Sometimes you want to make sure your loop runs at least one time no matter what. When this is the case, you want a modified while loop called a do/while loop.

  
  
  

As you might imagine, if you have a lot of choices you want to cover in a program, it might be annoying to type else if () ten times. That's why JavaScript has the switch statement!

  
  

switch allows you to preset a number of options (called cases),

then check an expression to see if it matches any of them. If there's a

match, the program will perform the action for the matching case; if

there's no match, it can execute a default option.

  
  
  
  
  
  

#### custom constructors======================

    function Person(name,age) {
    
    this.name = name;
    
    this.age = age;
    
    }
    
      
    
    // Let's make bob and susan again, using our constructor
    
    var bob = new Person("Bob Smith", 30);
    
    var susan = new Person("Susan Jordan", 25);
    
    // help us make george, whose name is "George Washington" and age is 275
    
    var george = new Person("George Washington",275);

  

Let's look at another example and practice coding constructors. Here we have made a Cat constructor for you, with age and color properties.

  

Why is this Cat constructor so cool?

It means if we have many cats and wanted to create an object for each

cat, we could just use this constructor with the properties already

defined.

  

This is much better than using the Object

constructor which just gives us an empty object and needs us to define

every property and value for each cat object we would create.

  

#### prototype===============

    snoopy.bark = function() {
    
    console.log("Wow");
    
    };

  

Here we have very similar code as last time, but there is an important difference. Instead of using buddy.bark to add the bark method to just the buddy object, we use Dog.prototype.bark.

  

Click run this time, and both buddy and snoopy can bark just fine! Snoopy can bark too even though we haven't added a bark method to that object. How is this so? Because we have now changed the prototype for the class Dog. This immediately teaches all Dogs the new method.

  

In general, if you want to add a method to a class such that all

members of the class can use it, we use the following syntax to extend the prototype:

  

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

  
  

#### encapsulating private n public methods pattern=================

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

  

#### this keyword-======================

followed by methods vs functions post

  

The "this" Keyword

  

Our setAge method works great for bob because it updates bob.age, but what if we want to use it for other people?

  
  

It turns out we can make a method work for many objects using a new keyword, this. The keyword this acts as a placeholder, and will refer to whichever object called that method when the method is actually used.

  
  

Let's look at the method setAge (line 2) to see how this works. By using the keyword this, setAge will change the age property of any object that calls it. Previously, we had a specific object bob instead of the keyword this. But that limited the use of the method to just bob.

  
  

Then when we say bob.setAge = setAge; (line 9), it means whenever we type bob.setAge( ), this.age in the setAge method will refer to bob.age.

  

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

  
  
  
  

In javascript every function receives two variables other than function parameters namely "this" and "arguments".

#### invoking functions===============

4 types :

simply calling fn name

    function fun(){
    
    };
    
    fun();
    
      
    
    var obj = {};
    
    obj.mymethod = function(){
    
    // myMethod is a Method.
    
    console.log(this);
    
    // this is bound to obj
    
    };

  
  
  

When we invoke the function as the method of an object, that object becomes the function context and is available within the function via the this parameter. This is one of the primary means by which JavaScript allows object-oriented code to be written

  

#### using constructor

function Fun(){

// Notice a function being used as a constructor always starts with Capital letter.

    this.myProperty = ' This is my property';
    
    }
    
    var myObject = new Fun();

When invoked with a new operator, a new object will be created and "this" inside the Fun() is bound to the newly created object.

  

(4) With the Apply method :

A function can be called in JavaScript with an apply method invocation with functionName accompanied with a dot(.)

  

    functionName.apply(arguments);
    
      
    
    function foo(a,b){
    
    console.log(a,b,this);
    
    }
    
    var args = ['abra','ka', 'dabra'];
    
    foo.apply(obj,args);

  
  
  

In this case the first argument passed to apply is an object to which we want "this" keyword to get bound to.

  

If the function is being used as an event handler, "this" will refer to the node that fired the event

#### collection vs array==============

collection of DOM elements (more formally called a NodeList) can’t be manipulated like an array

  

But you can’t use Array methods like push(), splice() or reverse() to manipulate it.

Except that you can, if you take the next step and convert it into an array. This is in fact trivial:

  

    function collectionToArray(collection)
    
    {
    
    var ary = [];
    
    for(var i=0, len = collection.length; i < len; i++)
    
    {
    
    ary.push(collection[i]);
    
    }
    
    return ary;
    
    }

  
  

##### closures=================

What is the Point of closures in JavaScript?

To create modules so that we can provide public and private variables and functions

Organize the code in a clean and modular way.

  

https://www.quora.com/What-is-the-point-of-closures-in-JavaScript/answer/Manish-Dipankar-1

  
  

##### setTimeout ===================

Note that all functions in setTimeout are executed in the global scope

  

    var highValue = 200;
    
    ​var constantVal = 2;
    
    ​var myObj = {
    
    highValue: 20,
    
    constantVal: 5,
    
    calculateIt: function () {
    
    setTimeout (function () {
    
    console.log(this.constantVal * this.highValue);
    
    }, 2000);
    
    }
    
    }

​

​// The "this" object in the setTimeout function used the global highValue and constantVal variables, because the reference to "this" in the setTimeout function refers to the global window object, not to the myObj object as we might expect.​

​

myObj.calculateIt(); // 400​

  

https://github.com/adam-s/js-interview-review

  

validation====

https://bitsofco.de/form-validation-techniques/

  

##### auto hide sticky header ====

  

http://osvaldas.info/auto-hide-sticky-header?utm_content=bufferfc972&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

  

<body  onunload="alert('Thank you. Please come back to this site and visit us soon, ok?')">

  

https://jonsuh.com/hamburgers/

  

http://blog.wearecolony.com/a-year-without-jquery/

  

http://kushagragour.in/lab/superplaceholderjs/

  

##### dev tools

https://medium.com/outsystems-experts/beyond-console-debugging-tricks-f7d0d7f5df4#.ujzyp55mj

  

##### menu scroll top

http://stackoverflow.com/questions/1144805/scroll-to-the-top-of-the-page-using-javascript-jquery

  

http://jsfiddle.net/osoh6o5a/

  

    var menuclick = $('ul.nav li a');
    
    menuclick.click(function(){
    
    var divPosition = $('#pricing').offset();
    
    $('html, body').animate({scrollTop: divPosition.top}, "slow");
    
    });

  
  


  
  

##### testi | our team | inpspect elemtent | timline

​http://themexlab.com/eventon/meeton/schedule.html

http://themexlab.com/eventon/meeton/speakers.html

http://themexlab.com/eventon/meeton/index.html

  
  

##### Tips  

​http://code.tutsplus.com/tutorials/20-helpful-jquery-methods-you-should-be-using--net-10521


http://benalman.com/code/projects/jquery-outside-events/examples/clickoutside/
 

https://github.com/AllThingsSmitty

http://stackoverflow.com/questions/10213703/how-do-i-view-events-fired-on-an-element-in-chrome-web-developer

 
https://github.com/DovAmir/awesome-design-patterns

https://github.com/twhite96/js-dev-reads
 

##### Jquery Menu==========

  

http://toddmotto.com/html5-and-jquery-super-simple-drop-down-nav/

https://css-tricks.com/simple-jquery-dropdowns/

http://jsfiddle.net/i_like_robots/6JbtX/



##### for muliline

https://css-tricks.com/line-clampin/

http://mikeking.io/succinct/(currently using)

using jquery

http://jsfiddle.net/k5VET/


##### many carousel====

http://coolcarousels.frebsite.nl/c/21/

  

##### jquery slider wow==========

http://plugins.jquery.com/WOWSlider/

has many effects and slider designs


##### #how-to-access-the-correct-this-inside-a-callback

https://stackoverflow.com/questions/20279484/how-to-access-the-correct-this-inside-a-callback/20279485#20279485

**Doubts**

function DD(){this.name='arun';this.age=5}
rr = new DD();
rr1 = Object.create(new DD());
console.log('rr',rr);
console.log('rr1',rr1);
DD.prototype.ddd = 123;
console.log(rr,'rr');
console.log(rr1,'rr1');

Here rr and rr1 have prototype ddd how ?
Answer: Object create do attach the object as prototype to newly created one. 

dont create closures as it creates in memory leak because of non deletion of old reference

when large response data comes while browser has so many browser tabs, then we can implement increasing heap size for our application 

and also can get large response data using observable than promise since it returns whole data and may get delay. Using  observable, can implement pagination and load streams of 100 chunk data in background and make browser smoother

 
 1. name the primitive data types Is function is a datatype
 2. what will return if typeof function ? how to create class in ES5/ vanilla javascript ?
 3. How prototype is useful ?
 4. Various methods to call a function difference between function call and apply At what scenario call and apply are useful ?
 5. suppose if sending an undeclared object directly in apply first parameter, what it returns ?
 6. how to handle large amount of data as response and show in UI without making browser unresponsive?
 7. tech stack of previous project worked ?
 
 
google app engine

validation n form elements all
 
  1. read more js three lines ..... stop continue like succinity
 2. slider
 3. Bookmark checker
 4. scroll to multilevel slide navigation n tree level
 5. lightbox
 6. api in codeacademy
 7. tiles scroll(pagination)
 8. window mail app
 9. carousel
 10. twitter message type
 11. when mouse comes near submit button then form should show error since nothing.. promixity detector validator
 12. - common component functionality - increment/decrement component by 1 which generically applies to slider or anyother
 13. - Push back seat
 14. Odc multi doors facility
 15. Traffic logic
 16. Our Escalator up arrow in box shadow
 17. - https://imgur.com/a/v1oDYK8 - bowling alley
 18. Asynchronous promise is also in WhatsApp
 19. Promise is like giving cheque with trust ..
 20. success or failure depends on check bounce
 21. Page Lifecycle API  |  Web  |  Google Developers
GitHub - sohamkamani/javascript-design-patterns-for-humans: An ultra-simplified explanation of design patterns implemented in javascript
Performance Debugging with DevTools

​https://www.styleurl.app/

GitHub - fejes713/30-seconds-of-interviews: A curated collection of common interview questions to help you prepare for your next interview.

Front-End-Performance-Checklist/README.md at master · 

thedaviddias/Front-End-Performance-Checklist · GitHub

https://www.11ty.io/

Set a Timed Debugger To Web Inspect Hard-To-Grab Elements | CSS-Tricks
https://andy-bell.design/hire-me/


- Dummy/fake apis
- Myjson.com
- Jsonplaceholder.typicode.com
- Swapi.co
- Mockable.io
- mockit.netlify

##### dynamic create variable javascript

> assign it to global window like window['variable']
> var varname ='CB1';window[varname] ='my value';
dynamic create variable javascript for IF s


static variable vs instance
var temp;
if (periodicArr[i].symbol && (temp = str.match(regex)) !== null) {}

"class Test{
public static int a = 5;
public int b = 10;
}
// here t1 and t2 will have a separate copy of b
// while they will have same copy of a.
Test t1 = new test(); 
Test t2 = new test();

You can access a static variable with it's class Name like this

Test.a = 1//some value But you can not access instance variable like this
System.out.println(t1.a);
System.out.println(t2.a);

In both cases output will be 1 as a is share by all instances of the test class. 
while the instance variable will each have separate copy of b (instance variable) So

 t1.b = 15 // will not be reflected in t2.
 System.out.println(t1.b); // this will print 15
 System.out.println(t2.b); / this will still print 10; 

Hope that explains your query."

How to remove circular reference json in JavaScript 

Use dynamic object property in es 6 ... Refer asynchronous actions in redux or react forms page ... search as computed property name


create js plugin

set default options and have provision to accept extra options

https://scotch.io/tutorials/building-your-own-javascript-modal-plugin#toc-the-javascript

initiate object instance with your options
seperate constructor, public, private methods
u will have public methods to perform desired actions on instance variable



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


#### Advanced js questions – toptal
https://www.javatpoint.com/javascript-interview-questions 

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
