add script for start and build with parcel commands in package.json:
"scripts": {
  "start": "parcel ./index.html",
  "build": "parcel build ./index.html"
},

Development build:
npm run start (or) npm start

build a production version of your code using parcel build:
npm run build

React.createElement => React Element (JS Object) => when JS object is rendered, it becomes => HTML Element

JSX => It is not HTML in JS, rather it is a xml/html like syntax and developer friendly

Javascript => any piece of code that JS Engine understands
              JS engine undrstands ECMAScript (ES6)

const jsxHeading = <h1 id="heading">Harish using JSX</h1>; => not a valid JS code,Js engine doesnt understands this.

But then how we get the output in the browser?
Babel(JS package) -> Is a Javascript compiler that transpiles the code in a way JS engine can undestand before it goes to the JS Engine

How it does?
JSX code is converted to => React.createElement (by babel) => React Element (JS Object) => when JS object is rendered, it becomes => HTML Element

So, both are the same

Attributes in JSX are camel case eg: className,tabIndex but in html attributes we use class,tabindex

React component: 
 Component name should start with a capital letter

Everything is a component in React - header,footer,body etc...

- Class based Component - old method

- Functional component - new method
                 - Normal JS Function which returns some JSX code (or)
                 - JS Function which returns a React element

- component inside component -> Component composition

prefer to write JS arrow functions for creating component rather than normal function

Anywhere inside JSX u can use any piece of JS code enclosed within {}

calling a component inside component can be done in 3 ways:
<component/>
<component></component>
{component}

All means the same 
U can call a component as much time as u want

JSX take care of any malicious data and prevent from cross site scripting/Injection attacks
JSX basically escapes it and sanitises your data before passing it

component cannot be called before initialisation but element can be called before initialisation

component inside element and same element inside same component forms a infinite loop

4 types:
-component inside component => using <component/> or <component></component> or 
{component()}
-component inside element => using <component/> or <component></component> or 
{component()}
-element inside component =>using {element}
-element inside element => using {element}