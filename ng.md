**Angular http interceptors**

implmetation = > 

    constructor(public http: HttpInterceptor) {};
      getData() {
        return this
          .http.get(`data?limit=20&offset=40`)
          // will hit the api on http://api.localhost.com:4000/data?limit=20&offset=40
          .map(res => res.json().data)
      }

Suppose we are implementing a basic authentication on our backend server. And we want every http request to contain a secret set under Authorisation key. That request should look something like that in below image.

https://medium.com/aviabird/http-interceptor-angular2-way-e57dc2842462

**PIPES**

    @Pipe({name: 'exponentialStrength'})
    export class ExponentialStrengthPipe implements PipeTransform {
      transform(value: number, exponent: string): number {
        let exp = parseFloat(exponent);
        return Math.pow(value, isNaN(exp) ? 1 : exp);
      }
    }

**REact vs angular -**

React does nt have ngmodule decorator since It does not have modules , it don’t have structured packaged components to import to other modules since it is a javascript modules(just export and import).

React does nt have index.js to export all files so that we can put {component1,2,3} from /comp/index;

Even though if we make it to work , when error comes cant identify which index.js

https://angular.io/guide/ngmodule-vs-jsmodule

**Router**
The order of route configuration matters. The router accepts the first route that matches a navigation request path.
When all routes were in one AppRoutingModule, you put the default and wildcard routes last, after the /heroes route, so that the router had a chance to match a URL to the /heroes route before hitting the wildcard route and navigating to "Page not found".

**angular life hooks** 

ngOnInit. This is a life cycle hook where its ideal to fetch data. AFter dom is ready. Similar to componentDidMount in react.

Ngchanges - called before nginit for input bound changes and similar to getDerivedStateFromProps in react. 

Ngchanges gives prev and next value of all input data properties … so used when we want to change mostly all input properites. Otherwise we can use setter and getter in input decorator.

https://ngdev.space/angular-2-input-property-changes-detection-3ccbf7e366d2

https://stackblitz.com/edit/input-properties-change-detection?embed=1&file=src/main.ts 

Ngdocheck – component which don’t update

For grabbing all the content children, we should use @ContentChildren (or @ContentChild if there’s only one child), and the children will be set on ngAfterContentInit

ngaftercontentchecked
NgAfterViewInit: after parent renders, it goes to compute n initialize child views .after that this hook called.

Ngafterviewchecked
It's used when viewchild or viewChildren used

NgOnDestroy - it gets called when user move to another component Migration

**Dependency Injection** => When service is injected at ngmodule root level, then a new shared single instance is available throughout the module . if injected at component level, then it new shared single instance is available for particular component and its child.

**Components => Components Interaction**

Available: e2e tests, clear timer, setter, ngonchanges, local variable #timer
Usage: pass via input binding, service (using subject observable), access via local variable, viewchild
https://stackblitz.com/edit/angular-eqa9pq?file=src%2Fapp%2Fhello.component.ts
https://stackblitz.com/edit/angular-fobggu?file=src%2Fapp%2Fmission-service.ts

**ElementRef**
Wrapper around the native element after runtime . Denotes and access the runtime dom
https://stackblitz.com/edit/angular-eu3odm 

 ng content template viewchild 'ren viewcontent viewproviders
https://blog.mgechev.com/2016/01/23/angular2-viewchildren-contentchildren-difference-viewproviders/

    @Component({  selector: 'todo-app',
      template: `<section>Add todo:
    <todo-input (todo)="addTodo($event)"></todo-input>
                            </section>
    <todo-item *ngFor="let todo of todos.getAll()" [todo]="todo">
    <ng-content select="app-footer"></ng-content>
      `
    })

    class TodoAppComponent {  
    constructor(private todos: TodoList) {}  
    addTodo(todo) { this.todos.add(todo);  }
    }

In html template:

    <todo-app></todo-app>

Well, this is basically an XML, so between the opening and closing tags of the todo-app element we can put some content:

    <todo-app>
      <app-footer>    Yet another todo app!  </app-footer>
    </todo-app>

With ng-content we can grab the content between the opening and closing tag of the todo-app element and project it somewhere inside of the template!
Since select=”app-footer” is given, <app-footer> will be placed there if it is like footer area. If sidebar , sidebar area.

todo-input and todo-item could be considered view children of todo-app

app-footer (if it is defined as Angular component or directive) could be considered as a content child.

**viewProviders vs providers**
When we declare viewProviders: [someService] then we can inject in parent component constructor and can be used for all view child n children.
But in content child it throws error.

So there we need Providers: [someService] so it will be available for all child of parent component.

#### Directives 
For resusable context, can use hostbinding to particular attribute directive like hover on element to toggle color or show / hide where this usecase mostly widely used.. so instead of writing as event handler create a shared directive and apply to all components needed.

    @Directive({  selector: '[appHighlight]'}) 
    export class HighlightDirective {    
    constructor(el: ElementRef) {
           el.nativeElement.style.backgroundColor = 'yellow';
        }
    }

brackets ([]) that make it an attribute selector. Angular locates each element in the template that has an attribute named appHighlight and applies the logic of this directive to that element.
It's like normal class attribute in html, document look for class name in css file and apply the color or respective properties of class.

https://angular.io/guide/attribute-directives
Structural directives are responsible for HTML layout. They shape or reshape the DOM's structure, typically by adding, removing, or manipulating elements. *ngIf *ngFor (asterisk*)
You can apply many attribute directives to one host element. You can only apply one structural directive to a host element.
 
src/app/app.component.html (asterisk)

    <div *ngIf="hero" class="name">{{hero.name}}</div>

The asterisk is "syntactic sugar" for something a bit more complicated. Internally, Angular translates the *ngIfattribute into a <ng-template> element, wrapped around the host element, like this.
src/app/app.component.html (ngif-template)
<ng-template [ngIf]="hero">  <div class="name">{{hero.name}}</div></ng-template>
Angular consumed the <ng-template> content during its actual rendering and replaced the <ng-template> with a diagnostic comment.
The NgFor and NgSwitch... directives follow the same pattern.

    <div *ngFor="let hero of heroes; let i=index; let odd=odd; trackBy: trackById" [class.odd]="odd">
    ({{i}})
    {{hero.name}}
    </div>
    <ng-template ngFor let-hero [ngForOf]="heroes" let-i="index" let-odd="odd" [ngForTrackBy]="trackById">
    <div [class.odd]="odd">({{i}}) {{hero.name}}
    </div>
    </ng-template>



    <div [ngSwitch]="hero?.emotion">  
    <app-happy-hero    *ngSwitchCase="'happy'"    [hero]="hero"></app-happy-hero>
    <app-sad-hero      *ngSwitchCase="'sad'"      [hero]="hero"></app-sad-hero>
    <app-confused-hero *ngSwitchCase="'app-confused'" [hero]="hero">
    </app-confused-hero>
    <app-unknown-hero *ngSwitchDefault [hero]="hero">
    </app-unknown-hero>
    </div>

The switch value assigned to NgSwitch (hero.emotion) determines which (if any) of the switch cases are displayed.
NgSwitch itself is not a structural directive. It's an attribute directive that controls the behavior of the other two switch directives. That's why you write [ngSwitch], never *ngSwitch.
https://docs.angularjs.org/guide/directive // ng1

**Create custom directive?**

What is the Angular equivalent to an AngularJS $watch?

In AngularJS you were able to specify watchers to observe changes in scope variables using the $watch function of the $scope. What is the equivalent of watching for variable changes (in, for example, component variables) in Angular?

In Angular 2, change detection is automatic… `$scope.$watch() and $scope.$digest()` R.I.P.

Unfortunately, the Change Detection section of the dev guide is not written yet (there is a placeholder near the bottom of the Architecture Overview page, in section “The Other Stuff”).

Here’s my understanding of how change detection works:
•	Zone.js “monkey patches the world” — it intercepts all of the asynchronous APIs in the browser (when Angular runs). This is why we can use setTimeout() inside our components rather than something like $timeout... because setTimeout() is monkey patched.
•	Angular builds and maintains a tree of “change detectors”. There is one such change detector (class) per component/directive. (You can get access to this object by injecting ChangeDetectorRef.) These change detectors are created when Angular creates components. They keep track of the state of all of your bindings, for dirty checking. These are, in a sense, similar to the automatic $watches() that Angular 1 would set up for {{}} template bindings.

Unlike Angular 1, the change detection graph is a directed tree and cannot have cycles (this makes Angular 2 much more performant, as we'll see below).

•	When an event fires (inside the Angular zone), the code we wrote (the event handler callback) runs. It can update whatever data it wants to  the shared application model/state and/or the component’s view state.
•	After that, because of the hooks Zone.js added, it then runs Angular’s change detection algorithm. By default (i.e., if you are not using the onPush change detection strategy on any of your components), every component in the tree is examined once (TTL=1)... from the top, in depth-first order. (Well, if you're in dev mode, change detection runs twice (TTL=2). See ApplicationRef.tick() for more about this.) It performs dirty checking on all of your bindings, using those change detector objects.
•	Lifecycle hooks are called as part of change detection. 
If the component data you want to watch is a primitive input property (String, boolean, number), you can implement ngOnChanges() to be notified of changes. 
If the input property is a reference type (object, array, etc.), but the reference didn't change (e.g., you added an item to an existing array), you'll need to implement ngDoCheck() (see this SO answer for more on this). 
You should only change the component's properties and/or properties of descendant components (because of the single tree walk implementation -- i.e., unidirectional data flow). Here's a plunker that violates that. Stateful pipes can also trip you up here.
•	For any binding changes that are found, the Components are updated, and then the DOM is updated. Change detection is now finished.
•	The browser notices the DOM changes and updates the screen.
Other references to learn more:
•	Angular’s $digest is reborn in the newer version of Angular — explains how the ideas from AngularJS are mapped to Angular
•	https://blog.angularindepth.com/exploring-angular-dom-abstractions-80b3ebcfc02 
•	Everything you need to know about change detection in Angular — explains in great detail how change detection works under the hood
•	Change Detection Explained — Thoughtram blog Feb 22, 2016 — probably the best reference out there
•	Savkin’s Change Detection Reinvented video — definitely watch this one
•	How does Angular 2 Change Detection Really Work?- jhade’s blog Feb 24, 2016
•	Brian’s video and Miško’s video about Zone.js. Brian’s is about Zone.js. Miško’s is about how Angular 2 uses Zone.js to implement change detection. He also talks about change detection in general, and a little bit about onPush.
•	Victor Savkins blog posts: Change Detection in Angular 2, Two phases of Angular 2 applications, Angular, Immutability and Encapsulation. He covers a lot of ground quickly, but he can be terse at times, and you’re left scratching your head, wondering about the missing pieces.
•	Ultra Fast Change Detection (Google doc) — very technical, very terse, but it describes/sketches the ChangeDetection classes that get built as part of the tree

**Template driven:**

Using $event and type like keyboardEvent specically
another way to get the user data: use Angular template reference variables. These variables provide direct access to an element from within the template with a hash (or pound) character (#) like refs in react .. uncontrolled component

    <input #box (keyup)="0">

Observations
•	Use template variables to refer to elements — The newHero template variable refers to the <input> element. You can reference newHero from any sibling or child of the <input> element.
•	Pass values, not elements — Instead of passing the newHero into the component's addHero method, get the input box value and pass that to addHero.
•	Keep template statements simple — The (blur) event is bound to two JavaScript statements. The first statement calls addHero. The second statement, newHero.value='', clears the input box after a new hero is added to the list.

**form builder -** 

Template-driven > like ng1 we can validating in template
Reactive-forms > we need code in ts to handle validation instead of writing in template
name = new FormControl(''); for each input
In template 

    <input type="text" [formControl]="name">
    Formgroup
    profileForm = new FormGroup({
       firstName: new FormControl(''),
       lastName: new FormControl(''),
    });

Used as  

    <form [formGroup]="profileForm">
    <label>First Name: <input type="text" formControlName="firstName"></label>

Submit as 

    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">

- By formBuilders can make validate easily
- hostbinding 
- ViewContainerRef
- diff btw angular versions




##### token-based-authentication

https://codinglatte.com/posts/angular/angular-5-token-based-authentication/

  

##### Lazy loading====

three main steps to setting up a lazy loaded feature module:

  

• Create the feature module.

• Create the feature module’s routing module.

• Configure the routes.

  

lazy loading syntax uses loadChildren followed by a string that is the relative path to the module, a hash mark or #, and the module’s class name.

  

• Arrange imports correctly in appmodule with feature module

• Use routerlink="/customers" forward slash in front or start with slash

• Don’t import feature module in app module . Just configure the routes

• With Just path property , page loads blank without component

• If you declare forChild(routes) before forRoot(routes). forRoot will be useless and it will throw error esp in lazy loading. forRoot only use once in root app.

• For children : give path in routerlink from parent path

routerLink="/customers/list"

• Invalid configuration of route 'customers': children and loadChildren cannot be used together. When lazy loading 'customers' feature module , don’t load children as lazy load module itself.

{ path: 'customers', loadChildren: './customers/customers.module#CustomersModule' ,

children: [{

path: 'orders1', loadChildren: './components/orders/orders.module#OrdersModule'

}]

},

  

  

##### Cli command for feature module

ng generate module customers --routing

  

After lazy loading is implemented, I cannot pass value from login lazy module component to root app component or menu component to update username of signed user after autheticated him using jwt from server and changing value from subscribtion area to menu service.

Tried:

Menuservice

Observable

Error : subscribe not found since while initialising menu component, it is not subscribed.

So in this scenario, we can able to use ngrx to rescue to supply data anywhere



  
  

##### Reactive forms======

  

Step 1: Registering the reactive forms modulelink

To use reactive forms, import ReactiveFormsModule from the @angular/forms package and add it to your NgModule's imports array.

Step 2: Generating and importing a new form control

Generate a component for the control.

  

ng generate component NameEditor

To register a single form control, import the FormControl class into your component and create a new instance of the form control to save as a class property.

  

export class NameEditorComponent { name = new FormControl(''); }

  

step 3: Registering the control in the template

For single form control element, [formcontrol] is the syntax. But not in case of grouping form group elements

Grouping form controls

Step 1: Creating a FormGroup instance

Step 2: Associating the FormGroup model and view

  

Syntax:

<form [formGroup]="profileForm">  <label> First Name: <input  type="text"  formControlName="firstName">  </label>

  


> [formControl]

		[formGroup]

			formControlName

				[formGroup]

						formControlName

formBuilder injector service to reduce repetive formcontrol in multiple forms

Instead of new formGroup, use injected property this.fb.group

two ways to update the model value:

• Use the setValue() method to set a new value for an individual control. The setValue() method strictly adheres to the structure of the form group and replaces the entire value for the control.

• Use the patchValue() method to replace any properties defined in the object that have changed in the form model.

From <https://angular.io/guide/reactive-forms>

  

you use the group() method with the same object to define the properties in the model. The value for each control name is an array containing the initial value as the first item in the array.

  

From <https://angular.io/guide/reactive-forms>

You can define the control with just the initial value, but if your controls need sync or async validation, add sync and async validators as the second and third items in the array.

  

From <https://angular.io/guide/reactive-forms>

  
  

#### Hash and path strategy in angular========

Default pathlocation strategy which is based on normal history based api in browser.

In hash based type, a # will be included in end of domain and the path added after # will be not sent to server.

Like we use in anchor tag <a  href="hello">arun</a>

www.domain.com/#hello

When we see network GET request for above link, server neglects after # and parse only www.domain.com

So hash can be programmatically changed and use for bookmarks

While using hash type in routing, from frontend we send only domain alone or server takes domain alone as GET request not other paths after #.

According to the the server there is only ever one URL localhost:4040, the other hash fragment stuff is ignored by the server.

This is why we call what we are building a Single Page Application, there is only ever one page requested from the server. In the above example it’s localhost:4040 — the other pages are just changes to the hash fragment which the client application deals with, from the perspective of the server the whole site is just a single page.

  

From <https://codecraft.tv/courses/angular/routing/routing-strategies/#_summary>

  
  

#### In path location type

  

If we were at localhost:4040/artist

  

Then we change url using history api and pushstate in ng and go to localhost:4040/artist/123/789

Without sending this url to server, we routes component to another one.

  

But when we reload the page, this url localhost:4040/artist/123/789 goes to server and GET request for that.

  

<base  href='/my/app'/> is compulsory to tell the root path in index.html

  

For Angular Universal to work URLs need to be passed to the server side which is why it can only work with a PathLocationStrategy and not a HashLocationStrategy.

  

From <https://codecraft.tv/courses/angular/routing/routing-strategies/#_summary>

  

##### Extra Notes=================

1. @NgModule({

2. imports: [ CommonModule ],

3. declarations: [ CustomerComponent, NewItemDirective, OrdersPipe ],

4. exports: [ CustomerComponent, NewItemDirective, OrdersPipe,

5. CommonModule, FormsModule ]

6. })

  

From <https://angular.io/guide/sharing-ngmodules>

  

While using shared module, export the imports also like commonmodule, formsmodule if app module needed.

Normally pipes, directives, components are shared by shared module not service because it creates new instance again and is not typical usage.



#### collection examples
https://codepen.io/collection/aFsqL/

https://netbasal.com/angular-2-understanding-viewcontainerref-acc183f3b682

https://blog.thoughtram.io/angular/2017/02/02/making-your-angular-app-fast.html

####AngularJs
---
#### share data btw controllers
http://stackoverflow.com/questions/12576798/angularjs-how-to-watch-service-variables?rq=1

http://stsc3000.github.io/blog/2013/10/26/a-tale-of-frankenstein-and-binding-to-service-values-in-angular-dot-js/

http://www.amitavroy.com/justread/content/articles/angularjs-using-factory-method-post-data-and-saving-db/

https://objectpartners.com/2013/08/21/using-services-and-messages-to-share-data-between-controllers-in-angularjs/

http://stackoverflow.com/questions/20181323/passing-data-between-controllers-in-angular-js

https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/

#### angular issues
1.click in list with label and checkbox
http://stackoverflow.com/questions/20689531/angular-js-ng-click-events-on-labels-are-firing-twice

2.bad argument controller ,
might be missing semicolon or injecting in define areas, function, controller in same order

3.injecting new directive into new controller ..
needs to be defined in controller define,then in function and closures ... if we didnt apply/define service in directive it will put an error in controller injecting

4.Error: ng:areq
Bad Argument
Argument 'toolsCtrl' is not a

for default setting price 1200 default
{{ (property.marketing.currentPrice ? property.marketing.currentPrice : 1200) | currency : '£ '}}

if u r using angular amd or require js in ui router then u would have to see for comma , semicolon issues.


-===============

**Angular 6 –** 

ng update, add external party libs, service injection in providers reduced since we can write provide in root in injectable enables to provision to rootmodule so no need to import in appmodule
Basically some programmatic changes, syntax , like ng-content template [style] httpClient, ngfactory build, performance wise, cli update, tree shaking , SSR

**Angular 1-> 2 :**

Primitives don’t change values changed from child to parent when parent send values to child initially. But objects will change since both point to same reference

https://github.com/angular/angular.js/wiki/Understanding-Scopes 

http://next.plnkr.co/edit/zZfUQN?
p=preview&utm_source=legacy&utm_medium=worker&utm_campaign=next&preview

Suppose parentScope has properties aString, aNumber, anArray, anObject, and aFunction. If childScope prototypically inherits from parentScope, we have:
 
If we try to access a property defined on the parentScope from the child scope, JavaScript will first look in the child scope, not find the property, then look in the inherited scope, and find the property. (If it didn't find the property in the parentScope, it would continue up the prototype chain... all the way up to the root scope).

https://stackblitz.com/edit/angular-h1jy2t

In angular 2 > …. changing value of object does not change value in object in parent component but in angular 1 it changes.
Object value passed from parent to child
https://stackblitz.com/edit/angular-racctn?file=src%2Fapp%2Fhello.component.html 

#### Angular 1 – digest, watch, apply
Model when attached to scope , model available to scope so when changed in template or js , scope variable changes as two way binding. When model attached to scope, angular automatically attaches to watch function --> then watch listener function calls digest when model changes
When Do You Call $apply() Manually?

If AngularJS usually wraps our code in $apply() and starts a $digest cycle, then when do you need to do call $apply() manually? Actually, AngularJS makes one thing pretty clear. It will account for only those model changes which are done inside AngularJS’ context (i.e. the code that changes models is wrapped inside $apply()). Angular’s built-in directives already do this so that any model changes you make are reflected in the view. However, if you change any model outside of the Angular context, then you need to inform Angular of the changes by calling $apply()manually. It’s like telling Angular that you are changing some models and it should fire the watchers so that your changes propagate properly.

For example, if you use JavaScript’s setTimeout() function to update a scopemodel, Angular has no way of knowing what you might change. In this case it’s your responsibility to call $apply() manually, which triggers a $digest cycle. Similarly, if you have a directive that sets up a DOM event listener and changes some models inside the handler function, you need to call $apply() to ensure the changes take effect.
 
https://codepen.io/Sandeep92/pen/fukyn - without apply

https://codepen.io/Sandeep92/pen/bEmBn - with apply updates the UI where setTimeout is out of angular scope
 
Note: By the way, you should use $timeout service whenever possible which is setTimeout() with automatic $apply() so that you don’t have to call $apply()manually.
 
https://www.sitepoint.com/understanding-angulars-apply-digest/

**Change detection strategy**
Input() and output() => Why do we do this? This creates a pure uni-directional dataflow. The data comes from AppComponent, flows into <counter>, the counter makes a change, and emits that change back to the parent on our command - via the EventEmitter we setup. Once we’ve got that data back up, we merge those changes back into our parent (stateful) component.

**Has two – default n onPush**

Default behaves when one state/ model changes , all components will be rendered.
it will become performance bottleneck in complex Single Page Applications when lot of events are flowing through the system.
OnPush behaves changes only to particular component not triggers all component. It works when new reference is given to child comps instead of mutating
Angular will skip the change detection for a component as long as the references to the inputs do not change (immutable).
equivalent to utilizing the “shouldComponentUpdate()” life-cycle hook in React to cut down unnecessary render cycles
change detection in Angular framework is unidirectional and top-down (unlike the digest cycles in AngularJS)
Basically application state change can be caused by three things:
•	Events - click, submit, …
•	XHR - Fetching data from a remote server
•	Timers - setTimeout(), setInterval()

https://hackernoon.com/angular-2-4-visualizing-change-detection-default-vs-onpush-3d7ed1f69f8e
proxy for spa projects :
  "proxy": {
    "/msapi/address/v1/serviceavailability/address": {
      "target": "http://localhost:8088/",
      "secure": false
    },

**How to manually trigger change detection strategy**

Triggering change detection manually in Angular

I’m writing an Angular component that has a property Mode(): string. I would like to be able to set this property programmatically not in response to any event. The problem is that in the absence of a browser event, a template binding {{Mode}} doesn't update. Is there a way to trigger this change detection manually?

Try one of these:
•	ApplicationRef.tick() - similar to AngularJS's $rootScope.$digest() -- i.e., check the full component tree
•	NgZone.run(callback) - similar to $rootScope.$apply(callback) -- i.e., evaluate the callback function inside the Angular zone. I think, but I'm not sure, that this ends up checking the full component tree after executing the callback function.
•	ChangeDetectorRef.detectChanges() - similar to $scope.$digest() -- i.e., check only this component and its children
You can inject ApplicationRef, NgZone, or ChangeDetectorRef into your component.

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

**Rxjs**
--
http://reactivex.io/rxjs/manual/overview.html#introduction
http://reactivex.io/rxjs/class/es6/MiscJSDoc.js~ObserverDoc.html
https://github.com/ReactiveX/rxjs/blob/master/doc/introduction.md
http://reactivex.io/documentation/operators.html
http://rxmarbles.com/
https://codecraft.tv/courses/angular/reactive-programming-with-rxjs/streams-and-reactive-programming/
https://blog.angularindepth.com/learn-to-combine-rxjs-sequences-with-super-intuitive-interactive-diagrams-20fce8e6511 



**Rxjs operators -** 

•	FILTERING OPERATORS, Conditional Operators, CREATION OBSERVABLES
•	MATHEMATICAL OPERATORS, TRANSFORMATION OPERATORS, UTILITY OPERATOR
Fork join  - is equal to join multiple observable to emit after all the response are successful and completed like promise.all()
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

##### aot compiler build and before aot compiler what used
We need compilation for achieving higher level of efficiency of our Angular applications. By efficiency I mostly mean performance improvements but also energy and sometimes bandwidth consumption.

AngularJS 1.x had quite a dynamic approach for both rendering and change detection. For instance, the AngularJS 1.x compiler is quite generic. It is supposed to work for any template by performing a set of dynamic computations. Although this works great in the general case, the JavaScript Virtual Machines (VM) struggles with optimizing the calculations on lower level because of their dynamic nature. Since the VM doesn’t know the shapes of the objects which provide context for the dirty-checking logic (i.e. the so called scope), it’s inline caches get a lot of misses which slows the execution down.

Angular, version 2 and above, took different approach. Instead of using the same logic for performing rendering and change detection for each individual component, the framework generates VM-friendly code at runtime or build time. This allows the JavaScript virtual machine to perform property access caching and execute the change detection/rendering logic much faster.

What needs to be compiled?” as well. We want to compile the templates of the components to JavaScript classes. These classes have methods that contain logic for detecting changes in the bindings and rendering the user interface.

#### HMR
Hot Module Reload is the ability of the application to update itself when the source code is changed — without full page reload ! 
https://medium.com/@kubal5003/angular-4-hot-module-reload-explained-e832ea616304

##### Tips:
try to import this way:

    import {Observable} from 'rxjs/Rx';

https://stackblitz.com/ - online ide for angular, react,js,ionic,native
https://codesandbox.io/

##### Doubts
how encapsulation css happen in angular?

<app-root>loading...</app-root>

how to replace loading... in appmodule.ts 

**Answer**: cannot replace loading . Already angular app is replacing the 'loading text' with components so make components to replace only.

**Zones ?**


 1. how to increase performance load in angular
 2.  how to optimize the  application at build level 
 3. how to optimize the application at code level
 4. compare the objects using id and find its difference create a reusable component for grid widget and achieve fast rendering with large amount of data?
 5. working knowledge in ag-grid ?
 6. what implementation can be done at top of webpack build to increase
   performance of application.
 7. what difference does Reactjs make in performance wise in comparable to angular framework? 
 8. internal working of map, filter method ?  apart from Map, filter in-built methods 
 9. how to increase the iteration and rendering speed of complex nested
   objects? For say 5lakhs data
   -> how will you implement lazy loading in router?
 10. html css js 
 11. loading each page from server for data many files ->
     performance spa using webpack bundler -> seperate ui and js for single page and updating when needed form module and components store data -> in service to make light weight component -> use directive on particular element or dom in component or -> normal dom pipe to filter some data before rendering template n -> reactive forms pass data
     using data binding, service , -> input output, -> stream observable
     subscribe router -> authenticate using canactivate, canactivatechild
     for child components access resolve guard to prefetch data before
     rendering component when you have to wait for data from network
     call after component initialized again many files imported in
     appmodule so find and -> seperate feature module and lazy load it use -> interceptor to put common headers for request and response emit data from lazy feature module to parent root component module cant -> use emit data using output since we navigate using router and not using selector observable didnt work since root component got
     initialized and it asks for subscribe method which will get
     undefined. because we depend on auth call to authenticate and send
     data to root 
     -> subject asObservable solves the problem since it can push new values as well as subscribe to it. Not like observable, as we only
     subscribes to it as REad Only and how only subject can do it ? not
     observable But without observable how angular can achieve it? no

cold observable -> is lazy and published value after subscribing
hot observable -> synchronous and publish value even not subsrcribed

https://blog.thoughtram.io/angular/2016/06/16/cold-vs-hot-observables.html

to return value , use do() , map() inside pipe so that observable returns value before subscribing

**Converting from js to ts**
Just create a .d.ts file and include it in the tsconfig.json's files array, so that it is always considered by the TypeScript compiler. In it declare those bits that TypeScript does not know about as type any. Once you've eliminated all errors you can gradually introduce typing to those parts according to your needs.


**noteable**:

 1. switchMap operator in angular routing Observable paramMap Snapshot
 2.     Heroes list: optionally selecting a hero while clicking back button
    animations in angular routing The router reuses components by
    default, so the Crisis Detail component will be re-used as you
    select different crises.

hash
routing
jit
for routes

Interview Questions
--


- ﻿Angular1 – scope, watchers, digest cycle, factory, services, custom directives, isolated scope
- Ng2 – providers, declarations, bootstap component, input, output, difference, 
- Ngrx
- https://medium.com/wizardnet972/48-answers-on-stack-overflow-to-the-most-popular-angular-questions-52f9eb430ab0

**Syne**
 1. angular filter posts in tarun repository
 2. Angular Route guard
 3. Observable Vs promise
 4. flatmap mergemap debounce  distilliled
 5. Interceptor
 6. Flex model align items align content Em rem px
 7. Where does dom object live
 8. Iterator
 9. A sync await Data structure -
 10.  hash map linked list search algorithms 
 11. Reactive vs template driven
 12.     Local storage and others Touch down touch move 
 13. How to set configuration for hitting api for http n https 
 14. Find out jit build in local n aot in prod build 
 15. Viewcontainer ref Change detection strategy
 16. Ngrx
 17. Why pipetransform needed in pipe n how decorator
    connects the template and pipe internally ​


**Prokarma**

9.	Bootstrapping module
10.	Sending data from one component to another component ? #ngrx
11.	Define ngmodule decorator with difference btw providers, entry components, declarations

**Synec**

1.	how observables differ from promise with example
2.	synchronous observable
3.	What happens when then object completes in promise
4.	Why use typescript
5.	jit vs aot
6.	@Input how this decorator works ?
7.	Jasmine vs karma what are those
8.	How to Debug in production code ?

**Olam**

 5. Angular 1 mechanisms and compilations two way bindings
 6. Angular 2 components and directives(how to inject functionality in a DOM element)
 7. Callbacks ? Why we need promise since callback also here Promise vs observable ? Since both delivers the 	same? hint: observable send data as chunks
 8. Hitting server api url limits to 15. How will achieve to reset the count before it hits. Scenario like type to search in text box to filter the array so for every letter , hitting server url so we have to limit it. Hint: use es6 feature iterator or generator I think
 9. Why change company
 10. Challenge u faced while changing from angular to
    react

**Wissen**

1.	Es6 decorators and other features
2.	How single instance shared by all subcomponents from root module
3.	How to clone object using Deep cloning?
4.	Bind and apply
5.	Prototype inheritance
6.	Component interactions
7.	Ngonchanges and ngoninit and lifehooks

**Cts**

38.	Pass value from controller to controller in ng1
39.	Ng-hide vs ng-if
