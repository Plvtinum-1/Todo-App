//--------------------------------- REACT ------------------------------------------
//----------------------------------------------------------------------------------

//----------- Rendering A JSX elements -------------------------

// const JSX = (
//   <div>
//     <h1>Hello World</h1>
//     <p>Lets render this to the DOM</p>
//   </div>
// );

// ReactDOM.render(JSX, document.getElementById("challenge-node"))

//------------ Rendering React Component ---------------------------

// class MyComponent extends React.Component{
//   constructor(props) {
//     super(props);
//   }
//   render(){
//     return (
//       <div>
//         <h1>My First React Component!</h1>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"))

//-------------- Create a Stateless Functional Component ----------------------------

// const MyComponent = function() {
// return (
//   <div>
//     <h1>Hello JSX!</h1>
//   </div>
//  )
// }

//-------------- Create a React Component ----------------------------

//The other way to define a React component is with the ES6 class syntax. In the following example, Kitten extends React.Component:

// class Kitten extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//      	   <h1>Hello React!</h1>
//       </div>
//     );
//   }
// }

//This creates an ES6 class Kitten which extends the React.Component class.
// So the Kitten class now has access to many useful React features,
 // such as local state and lifecycle hooks.
// Don't worry if you aren't familiar with these terms yet,
// they will be covered in greater detail in later challenges.
// Also notice the Kitten class has a constructor defined within it
// that calls super(). It uses super() to call the constructor of the parent class,
// in this case React.Component. The constructor is a special method used during
// the initialization of objects that are created with the class keyword.
// It is best practice to call a component's constructor with super, and pass
// props to both. This makes sure the component is initialized properly. For now,
// know that it is standard for this code to be included.
// Soon you will see other uses for the constructor as well as props.

//-------------- Create a Component with Composition ----------------------------

// const ChildComponent = () => {
//   return (
//     <div>
//       <p>I am the child</p>
//     </div>
//   );
// };

// class ParentComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>I am the parent</h1>
//         { /* Change code below this line */ }
//           <ChildComponent />
//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

//-------------- Use React to Render Nested Components ----------------------------

//This helps to separate the code responsible for the UI from the code 
//responsible for handling your application logic.
//It can greatly simplify the development and maintenance of complex projects.

// const TypesOfFruit = () => {
//   return (
//     <div>
//       <h2>Fruits:</h2>
//       <ul>
//         <li>Apples</li>
//         <li>Blueberries</li>
//         <li>Strawberries</li>
//         <li>Bananas</li>
//       </ul>
//     </div>
//   );
// };

// const Fruits = () => {
//   return (
//     <div>
//       { /* Change code below this line */ }
//         <TypesOfFruit />
//       { /* Change code above this line */ }
//     </div>
//   );
// };

// class TypesOfFood extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Types of Food:</h1>
//         { /* Change code below this line */ }
//             <Fruits />
//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

//-------------- Compose React Components ----------------------------

// As the challenges continue to use more complex compositions 
// with React components and JSX, there is one important point to note.
// Rendering ES6 style class components within other components is no different
// than rendering the simple components you used in the last few challenges.
// You can render JSX elements, stateless functional components,
// and ES6 class components within other components.

// class Fruits extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h2>Fruits:</h2>
//         { /* Change code below this line */ }
//         <NonCitrus />
//         <Citrus />
//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

// class TypesOfFood extends React.Component {
//   constructor(props) {
//      super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>Types of Food:</h1>
//         { /* Change code below this line */ }
//           <Fruits />
//         { /* Change code above this line */ }
//         <Vegetables />
//       </div>
//     );
//   }
// };

//-------------- Render a Class Component to the DOM ----------------------------

// React components are passed into ReactDOM.render()
// a little differently than JSX elements. For JSX elements,
// you pass in the name of the element that you want to render.
// However, for React components, you need to use the same syntax as if you were
// rendering a nested component,
// for example ReactDOM.render(<ComponentToRender />, targetNode).
// You use this syntax for both ES6 class components and functional components.

// class TypesOfFood extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>Types of Food:</h1>
//         {/* Change code below this line */}
//           <Fruits />
//           <Vegetables />
//         {/* Change code above this line */}
//       </div>
//     );
//   }
// };

// Both the Fruits and Vegetables components are defined for you behind the scenes.
// Render both components as children of the TypesOfFood component,
// then render TypesOfFood to the DOM. There is a div with id='challenge-node'
// available for you to use.

// // Change code below this line
// ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"))

//------------------- Write a React Component from Scratch ----------------------------

// Now that you've learned the basics of JSX and React components,
// it's time to write a component on your own. React components are the core
// building blocks of React applications so it's important
// to become very familiar with writing them. Remember, a typical React
// component is an ES6 class which extends React.Component. It has a render
// method that returns HTML (from JSX) or null.
// This is the basic form of a React component.
// Once you understand this well, you will be prepared to start building
// more complex React projects.



// class MyComponent extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return (
//       <div>
//       <h1>
//       My First React Component!
//       </h1>
//       </div>
//     );
//   };
// };

// ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));

//------------------- Pass Props to a Stateless Functional Component ----------------------------

// you can pass props, or properties, to child components.
// Say you have an App component which renders a child component called
// Welcome which is a stateless functional component.
// You can pass Welcome a user property by writing:

// 	<App>
// 	 <Welcome user='Mark' />
//	</App>

// You use custom HTML attributes created by you and supported
// by React to be passed to the component. In this case,
// the created property user is passed to the component Welcome.
// Since Welcome is a stateless functional component,
// it has access to this value like so:	

//	const Welcome = (props) => <h1>Hello, {props.user}!</h1>

// It is standard to call this value props and when dealing 
// with stateless functional components, you basically consider it as an argument
// to a function which returns JSX.
// You can access the value of the argument in the function body.
// With class components, you will see this is a little different.	

// const CurrentDate = (props) => {
//   return (
//     <div>
//       { /* Change code below this line */ }
//       <p>The current date is: {props.date} </p>
//       { /* Change code above this line */ }
//     </div>
//   );
// };

// class Calendar extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h3>What date is it?</h3>
//         { /* Change code below this line */ }
//         <CurrentDate date={Date()} />
//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

//------------------- Pass an Array as Props ----------------------------

//To pass an array to a JSX element,
//it must be treated as JavaScript and wrapped in curly braces.

//	<ParentComponent>
//  	<ChildComponent colors={["green", "blue", "red"]} />
//	</ParentComponent>

//The child component then has access to the array property colors.
//Array methods such as join() can be used when accessing the property.

//	const ChildComponent = (props) => <p>{props.colors.join(', ')}</p> 

// This will join all colors array items into a comma separated string
// and produce: <p>green, blue, red</p> Later, we will learn about other common
// methods to render arrays of data in React.

// const List = (props) => {
//   { /* Change code below this line */ }
//   return <p>{props.tasks.join(", ")}</p>
//   { /* Change code above this line */ }
// };

// class ToDo extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>To Do Lists</h1>
//         <h2>Today</h2>
        
//         { /* Change code below this line */ }
//         <List tasks={["walk dog", "workout"]} />
//         <h2>Tomorrow</h2>
        
//         <List tasks={["walk dog", "workout", 'match']} />
//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

//------------------- Use Default Props ----------------------------

// React also has an option to set default props.
// You can assign default props to a component as a property on the component
// itself and React assigns the default prop if necessary.
// This allows you to specify what a prop value should be if no value
// is explicitly provided

// const ShoppingCart = (props) => {
//   return (
//     <div>
//       <h1>Shopping Cart Component</h1>
//     </div>
//   )
// };
// // Change code below this line
// ShoppingCart.defaultProps = { items: 0 }

//------------------- Override Default Props ----------------------------

// The ability to set default props is a useful feature in React.
// The way to override the default props is to explicitly set the prop values
// for a component.

//	const Items = (props) => {
//	  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
//	}

//	Items.defaultProps = {
//	  quantity: 0
//	}

//	class ShoppingCart extends React.Component {
//	  constructor(props) {
//	    super(props);
//	  }
//	  render() {
//	    { /* Change code below this line */ }
//	    return <Items quantity={10} />
//	    { /* Change code above this line */ }
//	  }
//	};

//------------------- Use PropTypes to Define the Props You Expect ----------------------------

// React provides useful type-checking features to verify that components receive
// props of the correct type. For example, your application makes an API call 
// to retrieve data that you expect to be in an array, which is then passed
// to a component as a prop. You can set propTypes on your component to require
// the data to be of type array. This will throw a useful warning when the data
// is of any other type.

// It's considered a best practice to set propTypes when you know the type
// of a prop ahead of time. You can define a propTypes property for a component
// in the same way you defined defaultProps. Doing this will check that props
// of a given key are present with a given type. Here's an example to require
// the type function for a prop called handleClick:

//	MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }

// const Items = (props) => {
//   return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
// };

// // Change code below this line
// Items.propTypes = {
//   quantity: PropTypes.number.isRequired
//   }
// // Change code above this line

// Items.defaultProps = {
//   quantity: 0
// };

// class ShoppingCart extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <Items />
//   }
// };

//------------------- Access Props Using this.props ----------------------------

// The ES6 class component uses a slightly different convention to access props.

// Anytime you refer to a class component within itself, you use the this keyword.
// To access props within a class component, you preface the code that you use
// to access it with this. For example, if an ES6 class component has a prop 
// calleddata, you write {this.props.data} in JSX.

// class ReturnTempPassword extends React.Component {
//   constructor(props) {
//     super(props);

//   }
//   render() {
//     return (
//         <div>
//             { /* Change code below this line */ }
//             <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
//             { /* Change code above this line */ }
//         </div>
//     );
//   }
// };

// class ResetPassword extends React.Component {
//   constructor(props) {
//     super(props);

//   }
//   render() {
//     return (
//         <div>
//           <h2>Reset Password</h2>
//           <h3>We've generated a new temporary password for you.</h3>
//           <h3>Please reset this password from your account settings ASAP.</h3>

//           { /* Change code below this line */ }
//             <ReturnTempPassword tempPassword={'abcdefgh123'} />
//           { /* Change code above this line */ }

//         </div>
//     );
//   }
// };

//------------------- Review Using Props with Stateless Functional Components ----------------------------

// A stateless functional component is any function you write
// which accepts props and returns JSX. A stateless component, on the other hand,
// is a class that extends React.Component, but does not use internal state
// (covered in the next challenge). Finally, a stateful component is a class
// component that does maintain its own internal state. You may see stateful
// components referred to simply as components or React components.

// A common pattern is to try to minimize statefulness and to create stateless
// functional components wherever possible. This helps contain
// your state management to a specific area of your application.
// In turn, this improves development and maintenance of your app by making
// it easier to follow how changes to state affect its behavior.

// class CampSite extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <Camper/>
//       </div>
//     );
//   }
// };
// // Change code below this line
// class Camper extends React.Component {
//   constructor(props){
//     super(props)
//   }
//   render(){
//   return(
//       <div>
//       <p>{this.props.name}</p>
//       </div>
//   );
//  }
// }

// Camper.propTypes = {
//     name: PropTypes.string.isRequired
//   }

// Camper.defaultProps = {
//     name: 'CamperBot'
//   }

//------------------- Create a Stateful Component ----------------------------

// One of the most important topics in React is state.
// State consists of any data your application needs to know about, 
// that can change over time. You want your apps to respond to state 
// changes and present an updated UI when necessary. React offers a nice solution
// for the state management of modern web applications.

// You create state in a React component by declaring a state property
// on the component class in its constructor.
// This initializes the component with state when it is created.
// The state property must be set to a JavaScript object.
// Declaring it looks like this:

//	this.state = {

//		}

// You have access to the state object throughout the life of your component.
// You can update it, render it in your UI, and pass it as props to child
// components. The state object can be as complex or as simple as you need
// it to be. Note that you must create a class component by extending
// React.Component in order to create state like this.

// class StatefulComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     // Only change code below this line
//       this.state = {
//           name: 'ismail'
//       }
//     // Only change code above this line
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//       </div>
//     );
//   }
// };

//------------------- Render State in the User Interface ----------------------------

// Once you define a component's initial state, you can display any part of it
// in the UI that is rendered. If a component is stateful, it will always
// have access to the data in state in its render() method. 
// You can access the data with this.state.

// If you want to access a state value within the return of the render method,
// you have to enclose the value in curly braces.

// state is one of the most powerful features of components in React. 
// It allows you to track important data in your app and render a UI
// in response to changes in this data. If your data changes, your UI will change. 
// React uses what is called a virtual DOM, to keep track of changes
// behind the scenes. When state data updates, it triggers a re-render of the
// components using that data - including child components that received the data
// as a prop. React updates the actual DOM, but only where necessary.
// This means you don't have to worry about changing the DOM.
// You simply declare what the UI should look like.

// Note that if you make a component stateful, no other components are aware
// of its state. Its state is completely encapsulated, or local to that component,
// unless you pass state data to a child component as props.
// This notion of encapsulated state is very important because it allows
// you to write certain logic, then have that logic contained and isolated in
// one place in your code.

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'freeCodeCamp'
//     }
//   }
//   render() {
//     return (
//       <div>
//         { /* Change code below this line */ }
//           <h1>{this.state.name}</h1>
//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

//------------------- Render State in the User Interface Another Way ----------------------------

// There is another way to access state in a component. In the render() method,
// before the return statement, you can write JavaScript directly. 
// For example, you could declare functions, access data from state or props, 
// perform computations on this data, and so on. Then, you can assign any data
// to variables, which you have access to in the return statement.

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'freeCodeCamp'
//     }
//   }
//   render() {
//     // Change code below this line
//        const name = this.state.name
//     // Change code above this line
//     return (
//       <div>
//         { /* Change code below this line */ }
//           <h1>{name}</h1>
//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

//------------------- Set State with this.setState ----------------------------

// There is also a way to change the component's state.
// React provides a method for updating component state called setState. 
// You call the setState method within your component class like so: 
// this.setState(), passing in an object with key-value pairs.
// The keys are your state properties and the values are the updated state data. 
// For instance, if we were storing a username in state and wanted to update it, 
// it would look like this:

//	this.setState({
//	  username: 'Lewis'
//	});

// React expects you to never modify state directly, 
// instead always use this.setState() when state changes occur. Also, 
// you should note that React may batch multiple state updates in order to improve 
// performance. What this means is that state updates through the setState method 
// can be asynchronous. There is an alternative syntax for the setState method 
// which provides a way around this problem. This is rarely needed 
// but it's good to keep it in mind! Please consult the React documentation 
// for further details.

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'Initial State'
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     // Change code below this line
//     this.setState({
//         name: "React Rocks!"
//       });
//     // Change code above this line
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>Click Me</button>
//         <h1>{this.state.name}</h1>
//       </div>
//     );
//   }
// };

//------------------- Bind 'this' to a Class Method ----------------------------

// In addition to setting and updating state, you can also define methods
// for your component class. A class method typically needs to use the this 
// keyword so it can access properties on the class (such as state and props) 
// inside the scope of the method. There are a few ways to allow your class methods 
// to access this.

// One common way is to explicitly bind this in the constructor so this becomes 
// bound to the class methods when the component is initialized. You may have 
// noticed the last challenge used this.handleClick = this.handleClick.bind(this) 
// for its handleClick method in the constructor. 
// Then, when you call a function like this.setState() within your class method, 
// this refers to the class and will not be undefined.

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "Hello"
//     };
//     // Change code below this line
//      this.handleClick = this.handleClick.bind(this)
//     // Change code above this line
//   }
//   handleClick() {
//     this.setState({
//       text: "You clicked!"
//     });
//   }
//   render() {
//     return (
//       <div>
//         { /* Change code below this line */ }
//         <button onClick={this.handleClick}>Click Me</button>
//         { /* Change code above this line */ }
//         <h1>{this.state.text}</h1>
//       </div>
//     );
//   }
// };

//------------------- Use State to Toggle an Element ----------------------------

// Sometimes you might need to know the previous state when updating the state. 
// However, state updates may be asynchronous- this means React may batch multiple
// setState() calls into a single update. This means you can't rely on the previous 
// value of this.state or this.props when calculating the next value. So, 
// you should not use code like this:

// 	this.setState({
//		counter: this.state.counter + this.props.increment
//	});

// Instead, you should pass setState a function that allows you to access state 
// and props. Using a function with setState guarantees you are working with 
// the most current values of state and props. This means that the above should 
// be rewritten as:	

//	this.setState((state, props) => ({
//  	counter: state.counter + props.increment
//	}));

// You can also use a form without props if you need only the state:

//	this.setState(state => ({
//		 counter: state.counter + 1
//	}));

// Note that you have to wrap the object literal in parentheses, 
// otherwise JavaScript thinks it's a block of code.

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { visibility: false };
//     // Change code below this line
//       this.toggleVisibility = this.toggleVisibility.bind(this)
//     // Change code above this line
//   }
//   // Change code below this line
//   toggleVisibility(){
//     this.setState((state) => {
//          if(state.visibility) { return {visibility: false} }
//          else { return {visibility: true} }
//      })  
//    } 
//   // Change code above this line
//   render() {
//     if(this.state.visibility) {
//       return (
//         <div>
//           <button onClick={this.toggleVisibility}>Click Me</button>
//           <h1>Now you see me!</h1>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <button onClick={this.toggleVisibility}>Click Me</button>
//         </div>
//       );
//     }
//   }
// }

//------------------- Write a Simple Counter ----------------------------

// You can design a more complex stateful component by combining the concepts
// covered so far. These include initializing state, writing methods that set 
// state, and assigning click handlers to trigger these methods.

// The Counter component keeps track of a count value in state. There are two 
// buttons which call methods increment() and decrement(). Write these methods 
// so the counter value is incremented or decremented by 1 when the appropriate 
// button is clicked. Also, create a reset() method so when the reset button is 
// clicked, the count is set to 0.

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//     // Change code below this line
//       this.increment = this.increment.bind(this)
//       this.decrement = this.decrement.bind(this)
//       this.reset = this.reset.bind(this)
//     // Change code above this line
//   }
//   // Change code below this line
//     increment(){
//       this.setState((state) => {
//        return state.count = this.state.count + 1      
//       })
//     }
//     decrement(){
//       this.setState((state) => {
//        return state.count = this.state.count - 1       
//       })
//     } 
//     reset(){
//      this.setState((state) => {
//       return this.state.count = 0     
//       })
//     } 
//   // Change code above this line
//   render() {
//     return (
//       <div>
//         <button className='inc' onClick={this.increment}>Increment!</button>
//         <button className='dec' onClick={this.decrement}>Decrement!</button>
//         <button className='reset' onClick={this.reset}>Reset</button>
//         <h1>Current Count: {this.state.count}</h1>
//       </div>
//     );
//   }
// };

//------------------- Create a Controlled Input ----------------------------

// The code editor has the skeleton of a component called ControlledInput 
// to create a controlled input element. The component's state is already 
// initialized with an input property that holds an empty string. 
// This value represents the text a user types into the input field.

// First, create a method called handleChange() that has a parameter called event. 
// When the method is called, it receives an event object that contains a string 
// of text from the input element. You can access this string with 
// event.target.value inside the method. Update the input property of the 
// component's state with this new string.

// In the render method, create the input element above the h4 tag. 
// Add a value attribute which is equal to the input property of the component's 
// state. Then add an onChange() event handler set to the handleChange() method.

// When you type in the input box, that text is processed by the handleChange() 
// method, set as the input property in the local state, and rendered as the value 
// in the input box on the page. The component state is the single source of 
// truth regarding the input data.

// Last but not least, don't forget to add the necessary bindings in the 
// constructor.

// class ControlledInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: ''
//     };
//     // Change code below this line
//     this.handleChange = this.handleChange.bind(this)
//     // Change code above this line
//   }
//   // Change code below this line
//   handleChange(event){
//     this.setState( (state) => {
//      return state.input = event.target.value;
//     })
//   }
//   // Change code above this line
//   render() {
//     return (
//       <div>
//         { /* Change code below this line */}
//       <input value={this.state.input} onChange={this.handleChange.bind(this)} />
//         { /* Change code above this line */} 
//         <h4>Controlled Input:</h4>
//         <p>{this.state.input}</p>
//       </div>
//     );
//   }
// };

//------------------- Create a Controlled Form ----------------------------

// The MyForm component is set up with an empty form with a submit handler. 
// The submit handler will be called when the form is submitted.

// We've added a button which submits the form. You can see it has the type 
// set to submit indicating it is the button controlling the form. 
// Add the input element in the form and set its value and onChange() attributes 
// like the last challenge. You should then complete the handleSubmit method so 
// that it sets the component state property submit to the current input value 
// in the local state.

// Note: You also must call event.preventDefault() in the submit handler, to 
// prevent the default form submit behavior which will refresh the web page.

// Finally, create an h1 tag after the form which renders the submit value from 
// the component's state. You can then type in the form and click the button 
// (or press enter), and you should see your input rendered to the page.

