### Chapter 05 - Lets's Get Hooked

1. ### what is difference between named export and defaault export and *as export ? 

Named export:
   used when exporting more than 1 variable/component etc..

- Named Export/Import

export const Component;
import {Component} from "path";

default export:
  used when exporting a single variable/component etc..

- Default Export/Import

export default Component;
import Component from "path";

2. ### what is importance of config.js file ?
    - also can be named as common.js or utils.js (standard practics)
    - All the utility files can be kept under this folder, inside a file named constants.js
    - these utilities can be used all across your app.
    - config.js file is used to store to configuration setting or variable that are used throughout the application
3. ### what are React Hooks ?
    React hooks are function provided that allows to use state and other react feature . 
    (Normal JS utility functions)

   2 important types of Hooks:
    - useState() - Superpowerful State Variables in react
    - useEffect() 

4. ### why do we need a useState Hook ? 
     useState Hooks is used to add state to functional component it allows you to manage and update state within a component.
     It returns an array with two values: the current state and a function to update it.
     When we use normal JS variable like let,const..it will not update the UI
     Only using useState Hook we can update the UI becuase they are Superpowerful State Variables in react  

  How it works behind the scens?
     when ever a state variable updates, react re-renders the component

      React16 -> uses Reconcilliation algorithm -> (React Fiber) => whenever something changes on the UI. This is a new way of finding the diff and updating the DOM

     currently we are using React18

     Virtual DOM -> Representation of Actual DOM 
            -> Normal JS Object

     Actual DOM -> Tags like <div> 
                           <div>
                            <img>

       Diff Algorithm -> Finds out the difference between old virtual dom and new virtual dom , 
                         re renders the component and updates the DOM

Why React is fast?
React is doing efficient DOM manipulation.
How? -> React has a virtual DOM
React can efficiently find out the difference between virtual DOM's and update the UI
