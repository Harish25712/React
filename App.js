import React from "react";
import ReactDOM from "react-dom/client";

//React Element:

/* Method 1 : creating React element using React (Core):
const heading=React.createElement("h1",{id:"heading"},"Harish");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); 
console.log(heading); 
Method2: creating React element using JSX with arrow functions:
Both methods produce same output but , using JSX is developer friendly */

const jsxHeading =<h1 /* id="heading" */ className="head" tabIndex="1">Harish using JSX</h1>; 
console.log(jsxHeading);

//React Component:

/* single jsx line using return wrap it inside {}
   If u use jsx in more than one line, wrap it inside round brackets => ()
   when only one line is used inside functional component no need of return statement 
   when only one jsx line inside React component: 
  Method 1:
  const TitleComponent = () => {
  return <h1 className="heading">React Functional Component</h1>
  } 
  
  Method2:*/

   const TitleComponent = () => <h1 className="title">Title component is here</h1>

// Multiple jsx line inside React component - enclose with round brackets

   const HeadingComponent = () => (
  <div id="container"> 
    <TitleComponent/> 
    <TitleComponent></TitleComponent>
    {TitleComponent()}
    {jsxHeading}
   <h1 className="heading">React Functional components</h1>
   </div>
   ) 

  // Method3: creating React element using JSX with normal functions:

   const NormalComponent = function(){
    return (
    <div id="normal">
    <h1>Normal functional component</h1>
    </div>
    )
   }

   const root = ReactDOM.createRoot(document.getElementById("root"));
   //root.render(jsxHeading);
   //root.render(<TitleComponent/>);
   root.render(<HeadingComponent/>);
   //root.render(<NormalComponent/>);
