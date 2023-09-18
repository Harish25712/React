Two types of Export/Import:

- Default Export/Import

export default Component;
import Component from "path";


- Named Export/Import

export const Component;
import {Component} from "path";

a file can have both named and default exports together

# React Hooks
 (Normal JS utility functions)
- useState() - Superpowerful State Variables in react
- useEffect()

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
