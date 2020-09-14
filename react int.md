- why redux thunk middleware needed
	- In computer programming, a thunk is a subroutine used to inject an additional calculation into another subroutine. Thunks are primarily used to delay a calculation until its result is needed, or to insert operations at the beginning or end of the other subroutine
	- https://github.com/reduxjs/redux-thunk#
	- https://redux.js.org/api/api-reference
- why super props needed and why it is not needed when constructor available and how we use render setstate
- how componenet dismount works for every component
- codepen.io/topic/react/templates

Miscalleneoues
SSH http:// mongodb://

- Music app - spotify - https://github.com/Pau1fitz/react-spotify

​ project:
Idse material design UI elements
Pin board sample data layer, UI sidebar
Dfw carousel and offers page
X chart
X Range series stock chart
Line chart
Gaunt chart
Bullet chart 
Cumulative chart
Pie chart with half radius
Gauge chart
Bar chart
Scatter type
Difficult to maintain chart with State

### Testing:
https://reactjs.org/docs/testing-recipes.html

### Hooks:
https://reactjs.org/docs/hooks-intro.html
https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889

Visualization - https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e

##### FAQs:
https://reactjs.org/docs/hooks-faq.html

memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
The term "memoization" was coined by Donald Michie in 1968[3] and is derived from the Latin word "memorandum" ("to be remembered").

https://camjackson.net/post/9-things-every-reactjs-beginner-should-know

Composition over inheritane - https://www.youtube.com/watch?v=wfMtDGfHWpA 

Why did React was created? Isnt a MVC framework? Does it use templates ?

https://reactjs.org/blog/2013/06/05/why-react.html

### How React work /do?

- https://pomb.us/build-your-own-react/
- https://blog.jfo.click/how-react-do/

### Improving Dom rendering or performance means ?

- https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction

### Design principles

important to us that you can add functionality to a component without causing rippling changes throughout the codebase.

For example, it should be possible to introduce some local state into a component without changing any of the components using it.
In general we resist adding features. don’t want to bloat your apps with useless library code. 

For example, if React didn’t provide support for local state or lifecycle hooks, people would create custom abstractions. This is why sometimes we add features to React itself. If we notice that many components implement a certain feature in incompatible or inefficient ways, we might prefer to bake it into React. We don’t do it lightly. When we do it, it’s because we are confident that raising the abstraction level benefits the whole ecosystem. State, lifecycle hooks, cross-browser event normalization are good examples of this.

**Interoperability**
Facebook has a massive non-React codebase. Its website uses a mix of a server-side component system called XHP, internal UI libraries that came before React, and React itself. It is important to us that any product team can start using React for a small feature rather than rewrite their code to bet on it.
This is why React provides escape hatches to work with mutable models, and tries to work well together with other UI libraries. You can wrap an existing imperative UI into a declarative component, and vice versa. This is crucial for gradual adoption.
React does not want to be fully “reactive”. Using pull instead of Push paragidm.


**Why React is different? And design I guess**
--

one-way data flow philosophy for which we chose React in the first place!
https://camjackson.net/post/9-things-every-reactjs-beginner-should-know 

If you’re new to React, you probably only worked with component classes and instances before. For example, you may declare a Button component by creating a class. When the app is running, you may have several instances of this component on screen, each with its own properties and local state. This is the traditional object-oriented UI programming. 

Why introduce elements?

In this traditional UI model, it is up to you to take care of creating and destroying child component instances. If a Form component wants to render a Button component, it needs to create its instance, and manually keep it up to date with any new information.
This is pseudocode, but it is more or less what you end up with when you write composite UI code that behaves consistently in an object-oriented way using a library like Backbone.

Each component instance has to keep references to its DOM node and to the instances of the children components, and create, update, and destroy them when the time is right. The lines of code grow as the square of the number of possible states of the component, and the parents have direct access to their children component instances, making it hard to decouple them in the future.
So how is React different?

An element is a plain object describing a component instance or DOM node and its desired properties. It contains only information about the component type (for example, a Button), its properties (for example, its color), and any child elements inside it.
An element is not an actual instance. Rather, it is a way to tell React what you want to see on the screen. You can’t call any methods on the element. It’s just an immutable description object with two fields: type: (string | ReactClass) and props: Object1.
When an element’s type is a string, it represents a DOM node with that tag name, and props correspond to its attributes. This is what React will render. For example:

    {  type: 'button',  props:
    {    className: 'button button-blue',   
     children: {      type: 'b',     
      props: {        children: 'OK!'     
       }   
        } 
         }} 

This element is just a way to represent the following HTML as a plain object:

    <button class='button button-blue'>  <b>    OK!  </b></button>

What’s important is that both child and parent elements are just descriptions and not the actual instances. They don’t refer to anything on the screen when you create them. You can create them and throw them away, and it won’t matter much.
React elements are easy to traverse, don’t need to be parsed, and of course they are much lighter than the actual DOM elements—they’re just objects!
Component Elements
However, the type of an element can also be a function or a class corresponding to a React component:

    {  type: Button,  props: {    color: 'blue',    children: 'OK!'  }} 

**This is the core idea of React.**
--

An element describing a component is also an element, just like an element describing the DOM node. They can be nested and mixed with each other.

This feature lets you define a DangerButton component as a Button with a specific color property value without worrying about whether Button renders to a DOM <button>, a <div>, or something else entirely:
const DangerButton = ({ children }) => ({  type: Button,  props: {    color: 'red',    children: children  }});
More things are there to cover, plZ refer below link for detailed understanding 
https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html 

For a React component, props are the input, and an element tree is the output.
The returned element tree can contain both elements describing DOM nodes, and elements describing other components. This lets you compose independent parts of UI without relying on their internal DOM structure.
We let React create, update, and destroy instances. We describe them with elements we return from the components, and React takes care of managing the instances.
However, whether functions or classes, fundamentally they are all components to React. They take the props as their input, and return the elements as their output.

React Design
React takes care of creating an instance for every class component, so you can write components in an object-oriented way with methods and local state, but other than that, instances are not very important in the React’s programming model and are managed by React itself.

Best practice in react -  shouldUpdateComponent, composition rather than inheritance, HOC , thinking in react

**Advanced Guides**
--
**Performance** - 
People still talk about them because in practice, they are very hard to implement in regular JavaScript code. What makes React stand out is that all those optimizations happen by default. This makes it hard to shoot yourself in the foot and make your app slow.
The performance cost model of React is also very simple to understand: every setState re-renders the whole sub-tree. If you want to squeeze out performance, call setState as low as possible and use shouldComponentUpdate to prevent re-rendering an large sub-tree.

#### Thinking in  react
 1. It’s best to decouple these processes because building a static version requires a lot of typing and no thinking, and adding interactivity requires a lot of thinking and not a lot of typing. We’ll see why.
 2. To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using props. props are a way of passing data from parent to child. If you’re familiar with the concept of state, don’t use state at all to build this static version. State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app, you don’t need it.
 3. You can build top-down or bottom-up. That is, you can either start with building the components higher up in the hierarchy (i.e. starting with FilterableProductTable) or with the ones lower in it (ProductRow). In simpler examples, it’s usually easier to go top-down, and on larger projects, it’s easier to go bottom-up and write tests as you build.
 4. At the end of this step, you’ll have a library of reusable components that render your data model. The components will only have render() methods since this is a static version of your app. The component at the top of the hierarchy (FilterableProductTable) will take your data model as a prop. If you make a change to your underlying data model and call ReactDOM.render() again, the UI will be updated. It’s easy to see how your UI is updated and where to make changes since there’s nothing complicated going on. React’s one-way data flow (also called one-way binding) keeps everything modular and fast.

Think of all of the pieces of data in our example application. We have:

    The original list of products
    The search text the user has entered
    The value of the checkbox
    The filtered list of products

Let’s go through each one and figure out which one is state. Simply ask three questions about each piece of data:

    Is it passed in from a parent via props? If so, it probably isn’t state.
    Does it remain unchanged over time? If so, it probably isn’t state.
    Can you compute it based on any other state or props in your component? If so, it isn’t state.

The original list of products is passed in as props, so that’s not state. The search text and the checkbox seem to be state since they change over time and can’t be computed from anything. And finally, the filtered list of products isn’t state because it can be computed by combining the original list of products with the search text and value of the checkbox.

So finally, our state is:

    The search text the user has entered
    The value of the checkbox



**Debugging**
-
When something goes wrong, it is important that you have breadcrumbs to trace the mistake to its source in the codebase. In React, props and state are those breadcrumbs.
If the props are wrong, you can traverse the tree up in the inspector, looking for the component that first “poisoned the well” by passing bad props down.

This doesn’t mean that we ignore the issues raised by the community. For example, we added support for web components and SVG to React even though we don’t rely on either of them internally. We are actively listening to your pain points and address them.

we use componentDidMount() instead of didMount() or onMount(). This is intentional. The goal is to make the points of interaction with the library highly visible.
https://reactjs.org/docs/design-principles.html 

**Questions & answers**
-
1.	Route render if path is matched what to call render or component
Route to match home component
=========
2.	**Jest** => 
**Enzyme** is a common tool in the React ecosystem that makes it easier to write tests for how components will behave. By default, our application includes a library called **jsdom** to allow us to simulate the DOM and test its runtime behavior without a browser. Enzyme is similar, but builds on jsdom and makes it easier to make certain queries about our components.

https://github.com/Microsoft/TypeScript-React-Starter#writing-tests-with-jest.

**Shallow** , **jest.fn** to spy on methods, await aysnc to test async call, expect to matchers
Shallow rendering is nice, because it allows you to render a single component completely, but without delving into any of its child components to render those. Instead, the resulting object will tell you things like the type and props of the children. This gives us good isolation, allowing testing of a single component at a time.

**Stateless components are the ones easy to test.**
https://camjackson.net/post/9-things-every-reactjs-beginner-should-know#write-stateless-components 

Beforeall => constructor componentwillmount,

Beforeeach => every single run before it function

mockimpllemention
Jest with parallel ism diff 

3.	**Pure function** 
amount.total =-val return amount.total
1.	The function always returns the same result if the same arguments are passed in. It does not depend on any state, or data, change during a program’s execution. It must only depend on its input arguments.
2.	The function does not produce any observable side effects such as network requests, input and output devices, or data mutation.
Side effects include, but are not limited to:
•	Making a HTTP request
•	Mutating data
•	Printing to a screen or console
•	DOM Query/Manipulation
•	Math.random()
•	Getting the current time

    function priceAfterTax(productPrice) {
           return (productPrice * 0.20) + productPrice;
           }

It passes both 1, and 2, of the requirements for a function to be declared pure. It doesn’t depend on any external input, it doesn’t mutate any data and it doesn’t have any side effects.
var tax = 20;

    function calculateTax(productPrice) {
         return (productPrice * (tax/100)) + productPrice; 
    }

IMPURE because the function depends on an external tax variable you’d be right! A pure function cannot depend on outside variables.

4.  Check pure function for object = > see anjana video

5. **Input null or undefined initially then populate value later** ==> https://stackblitz.com/edit/react-oq9isl?file=index.js
Warning: `value` prop on `input` should not be null
Warning: A component is changing an uncontrolled input of type text to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa)

6. Props with no value n send to children like <test name/> ==> nothing happens and it assumes as name = true and creates confusion with es6 object {foo} similar to {foo:foo}
7. React put ‘px’ automatically if height given as 10 in styles object ? ==> yes
8. Jsx in browser - Doesn’t work.
Using Html in Js with use of JSX. Write normal html without strings in js file. 
React uses Babel to compiles JSX(javascript extension) code to react elements which is in es5 and send it to browser to display

Render =>
9. Render a React element into the DOM in the supplied container and return a reference to the component (or returns null for stateless components). ... If the optional callback is provided, it will be executed after the component is rendered or updated

10. **Virtual dom** - answer given below somewhere
Es6 to es5 write es5 with react create class n create element
11. Const to renderdom ==> https://codepen.io/anon/pen/JaPyEO?&editors=0010

If sri50 retweets, message reaches all ppl including itisprashant but if prashant retweets it willl reach less followers than sri50 so if follow only sri50 imporves performance instead of following prashant like ppl and getting retweets again and again to loose performance.

**Functional componets**
-
Functional components have a few 'limitations', which I consider to be their greatest strengths.

 1. functional component cannot have a ref assigned to it. While a ref can be a convenient way for a component to 'look up' it's children and communicate with them, my feeling is that this is The Wrong Way to write React. refs encourage a very imperative, almost jquery-like way of writing components, taking us away from the functional, one-way data flow philosophy for which we chose React in the first place!
 2. The other big difference is that functional components cannot have state attached to them, which is also a huge advantage

https://camjackson.net/post/9-things-every-reactjs-beginner-should-know#write-stateless-components 

react children – don’t use props.children.map instead use React.children.map

    <Hello name={this.state.name}>children</Hello> //(in parent component render)

    const sd = React.Children.map(props.children, t=> <div>{t}</div>) 

(in child component)
Use above in starter react project in stackblitz

Immutable Immutable js redux saga, observable in redux

### Router
- getting start with - https://reactrouter.com/web/guides/quick-start
- Dynamic routing where u can route a component anywhere in app not like static app used to angular ember which got initiated in root module. Before Reactv4 also implemented same.
- Nested routes(using match.url in nested route to select from relative url and goes on), responsive routes(using Media query component and switch condition to responsive layout)
- FYI, React Router is a sort of a wrapper for HTML5 History API. We can create History.js and implement customHistory.js
https://medium.freecodecamp.org/you-might-not-need-react-router-38673620f3d 

**Questions:** 
 1. security in react spa -> authentication using router
 2.	How react router different from other router?
12. IndexRoute, BrowserHistory …
=> indexRoute is like home page when no url matches … in Rv16.0 it uses exact attribute to tell router home
React Router (v3) I can accept a server response and use browserHistory.push to go to the appropriate response page
React 3 indexroute is similar to exat attr in v4.
In v4, import history from '../history'; so that history.push to go to desired page.
```
    <Provider store={props.store}>
    <Router history={browserHistory} routes={routes} />
    </Provider>
```
**Try**
 1. nested Switch 
 3. Sridhar => How you are using react route in idse, how will u change url without router
 4. Router with memory router implemented from idse library 

**React scoped stylesheet**
-
 4 ways – **globally declared,** 
as object in inline js styles so lives within same js common in react native or using radium lib,

**Modular** style src/  components/    Gator/      index.js      styles.css    Bite/      index.js      styles.css

**Stylized Components** – using glamorous lib

    const Container = glamorous.div(
    {  fontSize: "12pt",  margin: "25px auto",  padding: "5px"}
    )
    const Header = glamorous.h1(
    {  fontSize: "24pt",  fontWeight: "bold"}
    )

Last two are good but nothing really come up without library.
What we do in IDSE is, keep modular structure and compile scss using webconfig loader and use as styles.classname and it creates d.ts files instantly
Try button with link to in react => it will create anchor tag inside button
purecomponent – it doesn’t have shouldComponentUpdate lifehook
a.b.c.d.e.t.d.g.e.g = 456

controlled component where your form data lives in component state. controlled components support instant field validation (reactive in angular).
An uncontrolled component is where your form data is handled by the DOM, instead of inside your React component.(template driven in ng)
You use refs to accomplish this.

**React Lifehooks**
--
http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

**GetDerivedStatefromProps** is replacement of componentWillMount which returns objects similar to setState in componentwillmount.

Its called after constructor … Its like ngChanges in Angular

**Fiber**, the new React reconciliation algorithm, has the ability to start and stop rendering as needed for performance benefits.

React may start calling **componentWillMount** at various times whenever it feels like it needs to. So **componentDidMount** called for AJAX requests. componentWillMount used for synchronous action and when api response didn’t come, we have to initalise in contructor or propTypes

There is a common misconception that fetching in componentWillMount lets you avoid the first empty rendering state. In practice this was never true because React has always executed render immediately after componentWillMount. If the data is not available by the time componentWillMount fires, the first render will still show a loading state regardless of where you initiate the fetch. This is why moving the fetch to **componentDidMount** has no perceptible effect in the vast majority of cases.
https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#examples

**componentWillMount** was not useful for one-pass server rendering anyway because it is synchronous so you can’t wait for the data. So if you already have it synchronously, you might as well read it in the constructor.
If you did two rendering passes (which is bad for performance but somewhat works around the issue) then you can keep using UNSAFE_componentWillMount in the short term. It‘s not safe for async rendering, but your code was already relying on a slow pattern (rendering twice) so it’s better to be explicit about it.

https://daveceddia.com/watch-out-for-undefined-state/

https://stackblitz.com/edit/react-cscdou?file=index.js

“The end goal of reconciliation is to, in the most efficient way possible, update the UI based on new state” we know certain section of UI isn’t going to change, so no reason to update component and its child so **shouldComponentUpdate** returns false for performance issues.

#### setState – 
This is basically kicking off a process that React calls reconciliation. The reconciliation process is the way React updates the DOM, by making changes to the component based on the change in state. When the request to setState() is triggered, React creates a new tree containing the reactive elements in the component (along with the updated state). This tree is used to figure out how the Search component’s UI should change in response to the state change by comparing it with the elements of the previous tree. React knows which changes to implement and will only update the parts of the DOM where necessary. This is why React is fast. 

SetState works like it updates the property of object tree by merging obj using Object.assign
The rule of thumb is to never mutate state directly. Always use setState() to change state. Modifying state directly, like the snippet below will not cause the component to re-render.
// do not do this

    this.state = {
      searchTerm: event.target.value
    }

If u want update 3 times

    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 })
      this.setState({ count: this.state.count + 1 })
      this.setState({ count: this.state.count + 1 })
    }

above method wont work since
The above code snippet is equivalent to:

    Object.assign(  
      {},
      { count: this.state.count + 1 },
      { count: this.state.count + 1 },
      { count: this.state.count + 1 },
    )

So it copies same object to destination.
Instead can use updater by accessing previous state
  

    this.setState((prevState) => {
        return { count: prevState.count + 3}
      })

https://css-tricks.com/understanding-react-setstate/ 

**SyntheticEvent**
- https://levelup.gitconnected.com/how-exactly-does-react-handles-events-71e8b5e359f2

, which is React’s cross-browser

redux - actions, reducers, store, connect(mapstatetoprops, mapdispatchtoprops), configstore,
when action is dispatched, all reducers are called and depend on action type , particular state changes and other reducers return same state

**Redux thunk:**
-
Before using redux thunk(middleware to handle async actions).
Normally , ajax request are made in componentDidMount where will hit the service and do async actions but if u r using redux connect , first thought will be , you will transfer calling api service in actions by calling this.props.fetchdata(url) from componentDidMount with url alone. Then from mapDispatchtoProps provide dispatch to fetchData method and dispatch actions . So thought it will work but it wont Error: Actions must be plain objects. Use custom middleware for async actions. So use redux thunk which will return function instead of just plain object actions

Without middleware, Redux store only supports synchronous data flow
// Thunk middleware knows how to handle functions.
 // It passes the dispatch method as an argument to the function,
 // thus making it able to dispatch actions itself.
 
 return function (dispatch) {
   // First dispatch: the app state is updated to inform
   // that the API call is starting.
 
   dispatch(requestPosts(subreddit))
 
   // The function called by the thunk middleware can return a value,
   // that is passed on as the return value of the dispatch method.
 
   // In this case, we return a promise to wait for.
   // This is not required by thunk middleware, but it is convenient for us.
 

       return fetch(`https://www.reddit.com/r/${subreddit}.json`)
         .then(
           response => response.json(),
           // Do not use catch, because that will also catch
           // any errors in the dispatch and resulting render,
           // causing a loop of 'Unexpected batch number' errors.
           // https://github.com/facebook/react/issues/6895
           error => console.log('An error occurred.', error)
         )
         .then(json =>
           // We can dispatch many times!
           // Here, we update the app state with the results of the API call.
     
           dispatch(receivePosts(subreddit, json))
         )
     }

Here only angular uses effects in between component n action.. refer WLL
http://work.haufegroup.io/intro-redux/

**why ngrx and redux used**
-
“When two components need to share state which are like adjacent to each other, I need to lift that state up instead of trying to keep their states in sync.”??????

A component based architecture naturally makes sharing state more difficult. If two components rely on the same state, where should that state live? This was such a popular question that it spurred an entire ecosystem of solutions which eventually ended with Redux. Redux’s solution is to put that shared state in another location called a “store”. Components can then subscribe to any portions of the store they need and can also dispatch “actions” to update the store. React’s solution is to find the nearest parent of both of those components and have that parent manage the shared state, passing it down to the child components as needed. There are pros and cons to both approaches but it’s important to be aware that both solutions exist.

On its own, React is a useful library for creating composable views. However, React doesn't prescribe any specific way of synchronizing data throughout your application. As far as a React component is concerned, data flows down through its children through the props you specify on each element. Some of those props might be functions that update the state one way or another, but how that happens is an open question.
Because React on its own does not focus on application state management, the React community uses libraries like Redux and MobX.

https://github.com/Microsoft/TypeScript-React-Starter#adding-state-management

can use custom store manager to store data in state and also in localstorage to fetch when refresh. React newly introduced context APi in 16.4  which will replace redux I think

**Axios service**
--
Its like promise based api which is build like http client in angular. Its similar feature to fetch api... get,post,put,delete
Lightweight api ….......import axios from 'axios';
https://alligator.io/react/axios-react/

**Virtual Dom use**
--
concept of diffing the DOM of the new state with the previous state and only render the difference, which is what ReactJS is doing with Virtual DOM. 
Manual DOM manipulation is expensive and slow when state changes , have to recreate full DOM which makes page slower in large applications.
So in React, virtual dom create virtual tree objects and match the difference with previous V tree DOM and send updates to actual DOM to update the particular part.

I'm the primary author of a virtual-dom module, so I might be able to answer your questions. There are in fact 2 problems that need to be solved here

    When do I re-render? Answer: When I observe that the data is dirty.
    How do I re-render efficiently? Answer: Using a virtual DOM to generate a real DOM patch

In React, each of your components have a state. This state is like an observable you might find in knockout or other MVVM style libraries. Essentially, React knows when to re-render the scene because it is able to observe when this data changes. Dirty checking is slower than observables because you must poll the data at a regular interval and check all of the values in the data structure recursively. By comparison, setting a value on the state will signal to a listener that some state has changed, so React can simply listen for change events on the state and queue up re-rendering.

The virtual DOM is used for efficient re-rendering of the DOM. This isn't really related to dirty checking your data. You could re-render using a virtual DOM with or without dirty checking. You're right in that there is some overhead in computing the diff between two virtual trees, but the virtual DOM diff is about understanding what needs updating in the DOM and not whether or not your data has changed. In fact, the diff algorithm is a dirty checker itself but it is used to see if the DOM is dirty instead.

We aim to re-render the virtual tree only when the state changes. So using an observable to check if the state has changed is an efficient way to prevent unnecessary re-renders, which would cause lots of unnecessary tree diffs. If nothing has changed, we do nothing.

A virtual DOM is nice because it lets us write our code as if we were re-rendering the entire scene. Behind the scenes we want to compute a patch operation that updates the DOM to look how we expect. So while the virtual DOM diff/patch algorithm is probably not the optimal solution, it gives us a very nice way to express our applications. We just declare exactly what we want and React/virtual-dom will work out how to make your scene look like this. We don't have to do manual DOM manipulation or get confused about previous DOM state. We don't have to re-render the entire scene either, which could be much less efficient than patching it.

https://stackoverflow.com/questions/21109361/why-is-reacts-concept-of-virtual-dom-said-to-be-more-performant-than-dirty-mode/23995928#23995928

**Event delegation,** 
--
https://github.com/Matt-Esch/virtual-dom

https://gist.github.com/Raynos/8414846

https://calendar.perfplanet.com/2013/diff/

https://medium.com/@gethylgeorge/how-virtual-dom-and-diffing-works-in-react-6fc805f9f84e

https://medium.com/@rajaraodv/the-inner-workings-of-virtual-dom-666ee7ad47cf

Data to Child from parent ways -  use callback method from parent and call it with data to send to parent and change data OR dispatch event to store to update. Uniflow directional or context api
Ref -  take instance of dom element value to give which submit action or other action performed.. refs are uncontrolled component and can do use it for hurry work code.

**React Vs angular**
--

https://www.robinwieruch.de/reasons-why-i-moved-from-angular-to-react/

•	When doing component tree in pinboard, angular refreshes all components when some state changed so recursion occurs nicely while fetching the children again to draw svg in UI. Wherein case React failed to update recursion since it updates in the particular object property to refresh

•	React state changes only if setState triggered I.e doesn’t mutate. Wherein angular updates when we change something.

•	Fast since uniflow direction n non mutation

•	React transpiles code into javascript and handover to js vm machine to process wherein after js compiled it is handled by angular to parse and its manipulation according to its principle and send to js vm machine. So it’s a very clean process in react. 

**React without Es6**
--
var createReactClass = require('create-react-class');
class Greeting extends React.Component {  // ...}Greeting.defaultProps = {  name: 'Mary'}; 
With createReactClass(), you need to define getDefaultProps() as a function on the passed object:
var Greeting = createReactClass({  getDefaultProps: function() {    return {      name: 'Mary'    };  },  // ...});
With createReactClass(), you have to provide a separate getInitialState method that returns the initial state:
With createReactClass(), this is not necessary because it binds all methods:
Mixins

**Single-page Application**
--
A single-page application is an application that loads a single HTML page and all the necessary assets (such as JavaScript and CSS) required for the application to run. Any interactions with the page or subsequent pages do not require a round trip to the server which means the page is not reloaded.
Though you may build a single-page application in React, it is not a requirement. React can also be used for enhancing small parts of existing websites with additional interactivity. Code written in React can coexist peacefully with markup rendered on the server by something like PHP, or with other client-side libraries. In fact, this is exactly how React is being used at Facebook.
why typescript in react when babel available
https://medium.com/@amcdnl/react-typescript-%EF%B8%8F-647aa7d054a9
Debugging react components and performance:
https://building.calibreapp.com/debugging-react-performance-with-react-16-and-chrome-devtools-c90698a522ad
https://blog.logrocket.com/using-the-new-streaming-performance-monitor-in-google-chrome-d3019afe95e4

**MISC**
--
“Components don’t necessarily have to correspond to DOM nodes.”
When we first learn React we’re taught that “Components are the building blocks of React. They take in input and return some UI (descriptor)“. Does that mean that every component needs to directly return UI descriptors as we’re typically taught? What if we wanted to have a component render another component (Higher Order Component pattern)? What if we wanted a component to manage some slice of state and then instead of returning a UI descriptor, it returns a function invocation passing in the state (Render Props pattern)? What if we had a component that was in charge of managing sound rather than a visual UI, what would it return? What’s great about React is you don’t have to return typical “views” from your components. As long as what eventually gets returned is a React element, null, or false, you’re good.
You can return other components like HOC or render () {  return this.props.children(this.someImportantState)}
Or null

**Progressive Disclosure Pattern and mobX**
--
This web app depicts the "Progressive Disclosure Pattern" using a use case of React Mobile Shopping experience
The user journey (Single Page Checkout) 
1.	    Select a product and the quantity
2.	    Enter the user contact information
3.	    Make the payment
4.	    On successful payment we can finally complete the checkout process 
The user state is maintained in the MobX store and as the user progresses further the components are progressively shown based on where the user journey has reached. 
Since this is a concept demonstration there are no validations added.

**Why Accessibility?**
---
Web accessibility (also referred to as a11y) is the design and creation of websites that can be used by everyone. Accessibility support is necessary to allow assistive technology to interpret web pages.

**Using fragments**
--

    return (      <table>        <tr>          <Columns />        </tr>      </table>    );

If columns returns <div><td><td></div> multiple tds in table , it’s a invalid html so wrapping that by React.fragments . Can be used <>dfsdf<> empty string also
/* The AOT compiler needs the `./` to show that this is local */
@import './hero-details-box.css';


https://www.mockapi.io/docs
https://swapi.co/
https://openweathermap.org/api
https://mockable.io



##### For Testing
https://github.com/mlaursen/react-md/blob/master/src/js/Buttons/__tests__/Button.js
npm test -- --watch

####HOC
 https://stackblitz.com/edit/react-imagehoc

lifecycle
http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

why use react ?
##### isomorphic rendering?

##### React Architecture and Best Practices====
https://github.com/markerikson/react-redux-links/blob/master/react-architecture.md

**Doubts**

https://facebook.github.io/create-react-app/

 1. react form validation -> refs -> input new attributes and regex patterns
 3. react testing from mahesh sabnis
 4. anto preact react forms testing
 5. web securities
 6. crsf
 7. cross site scripting
 8. assessebility
 9. how to make site accessible 
 10. tools for assessibility
 11. interceptors in react
 12. redux
 13. testing
 14. react-spotify
 15. how to get bearer token in artist list component?
 16. how to design app without redux / or how to pass props to child 
 17. without service, backend storage, web storages
 18. Redux - merge props and other parameters of connect function
 19. Testing – what are starting task you will check in component while writing testcase
 20. how to spy on functions using jest
 21. commonly used header requests
 22. how to optimize or increase performance of website
 23. what tools you will use to increase performance
 24. bootstrap and its uses
 25. responsive design
 26. saga/thunk
 27. diff react n jquery dom -> modularity -> react inject component as dependecny -> in jquery we should use every code on load
 28. redirect and do form get authenticated when url comes as localhost:3000/form
 29. merge props
 30. commonly used header requests



https://jsfiddle.net/u1bh23kv/6/

 1. Component receive props
 2.  Setstate inside render Use error boundaries
 3.     Component unmount Data streaming from different cdn Authentication
 4.  Disadvantage of react
 5.  What features have you implemented using react
 6.     What are the inputs taken from your side 
 7. How to implement observable  in fetch in reactjs 
 8. How react passes props to 100 components from  one component without affecting in between components
 9. What are it’s  extracting from react component parent when extending 
 10. How life cycle  definitions n compare with JavaScript n also see dispatch definition
 11.     React n angular life hooks in JavaScript how traditionally
    implemented
    12. Why single instance being shared all components from
    root module

https://medium.com/@jcbaey/authentication-in-spa-reactjs-and-vuejs-the-right-way-e4a9ac5cd9a3

Featured React projects

500tech.com/projects

dynamic attribute in a component or element

    this.state={name: "sridhar", flag: false}
    render(){
      return (
        <div {...this.state.flag ? {id: 'sdafsad'}: {}}>{this.state.name}</div>
      )
    }


https://tylermcginnis.com/react-interview-questions/

https://tylermcginnis.com/react-aha-moments/ 


**Try ?**

 2. Why jsx needs parent div binding for every component
 5. How will you immutate deep object property in setstate or redux
	 => use immutable.js or deep clone json.parse(json.stringify(obj))

6. https://artsy.github.io/blog/2018/08/24/How-to-debug-jest-tests/

**Tips** 

- When u are in situation to render a component and insert it into dom, use like app.js used to do.
- use render method from react-dom and render the dom and insert in dom like render('<app/>', document.getElementById('dom') )
- when connect function props not working,then check the current component is exported as default or named one in parent component 
if it is named export then it  cannot connot to store to get state values

Interview Questions
--

**capg**

11. How do you check error trace back happened in child from parent component itself?


Cts
--

17.	What is react
18.	Why react is fast , why not jquery if u change particalar dom ? => We don’t export as module or component to load async or different order https://codepen.io/gaearon/pen/RVKbvW?editors=1010 react with jquery and refer integrating other libs into react in reactjs.com 
When we refer a classname in common button n fed across dom , we will use queryselector and loop and attach methods but in react we can use react.createRef to reference to particular component only
20.	Why super(props)
21.	Inside form component there many input field components there, and submit btn so evnet handler available for submit btn only.
a.	How will you get each component value and submit it
b.	How will you validate each field value and do validation before submitting
22.	How will you Map and filter an array and return input radio element to render
23.	Array of three objects with each object has {1,2,3}, {5,2,3},{3,1,4}. Find the object has 1 and 3 and filter => hasownproperty
24.	Call and apply 
25.	Rest operator
26.	React lifecycle after state update
27.	How to update state
28.	Unit test case for form submit 
2nd round
29.	Latest application worked on?
31.	Created any component and publish in npm
32.	Reverse a string without reverse
33.	React lifecycles
34.	How react produces good performance
35.	[{a:dsaf, age:5}, {a:efa,age:3}, {a:errg, age:10}] sort this array depending on age property
36.	There are three pages and each page has form component with common next button which indicates to move to next page so which implies to denote the completion in filling progress bar at the bottom. How will you be your thought process to implement.
37.	How will you implement footer sticky 
40.	Rootscope
41.	Webpack use and devops knowledge?
42.	How much code coverage produced?
3rd round
43.	Brief about professional experience over 5years
44.	How good is hcl
45.	Agile methodology work flow
46.	Daily task of developer in agile
47.	Interact with business owners, clients owners
48.	How will you mitigate risk under short deadline
49.	Aspiration about onsite
50.	Going forward lead or manager or architect?
51.	Why do want leave organisation
52.	Why 2years 1year 2 year switching
54.	If production issue and story task are there how will u manage in a particular day
55.	Suppose in 2 weeks sprint if have applied for leave and if the task was to complete in new technology. What will be your reaction?

5th round
57.	Webpack usage
58.	Why bootstrap
59.	Bindings in ng1 directive
60.	How achieve two way binding in directive
61.	What is directive
62.	EA, E, A define in directive
63.	Why react different from angular
64.	You have shared component which has two buttons plus and minus to increase/decrease number functionality. How will implement this in photo changing slider in another component.
67.	When you want to access this.props in constructor
Passing:

    class MyComponent extends React.Component {        constructor(props) {        super(props)        console.log(this.props)        // -> { icon: 'home', … }    }}

Not passing:

    class MyComponent extends React.Component {        constructor(props) {        super()        console.log(this.props)        // -> undefined        // Props parameter is still available        console.log(props)        // -> { icon: 'home', … }    }    render() {        // No difference outside constructor        console.log(this.props)        // -> { icon: 'home', … }    }}

Note that passing or not passing props to super has no effect on later uses of this.propsoutside constructor. That is render, shouldComponentUpdate, or event handlers always have access to it.



Deloit
--

21.	Why cant use componentwillmount instead of componentDidMount
22.	Virtual dom
23.	Is redux doing immutability in reducer? Then what is the need of immutable.js
24.	Why need jsx to write html in js in react
34.	What difference btw handling events in js and react js
35.	Why need key while iterate
36.	Difference btw forms usage In js and react
37.	Usage of ref and use case of that
38.	Declare Initial state in store?
39.	Why redux
40.	How the syntax will be in actions
42.	Virtual dom
43.	Why need react? What u do with react
44.	What is componentwillmount and lifehooks of react
45.	Props and state .. why props cant be changed
46.	How to send value from child to parent
47.	Why need bind in calling events? Is bind necessary? If not what is other way
48.	When we don’t want to call render? What should be done
49.	Es6 features
50.	What special abt arrow functions ? Only shorthand?
51.	How to convert es5 to es6 ? What to look for it in es5 to change
Managerial round
25.	How do you see yourself in 5 years?
26.	How do you want to grow up in your career?
27.	Intro abt yourself, experience, responsibilities
28.	What challenge you got from client
29.	Why do you select deloitte
30.	How was your day today
31.	Agile difficulites
32.	How do you prevent bugs defects before getting into QA hands


for tutorials from udemy
Refer google sheets
