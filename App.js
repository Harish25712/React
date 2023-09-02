/* const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement(
            "h1",
            {},"I am h1 tag")
    )
); */
/* const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},[
        React.createElement(
            "h1",
            {},"I am h1 tag"),
            React.createElement(
                "h2",
                {},"I am h2 tag")]
    )
); */

const parent=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"I am h1 tag!"),React.createElement("h2",{},"I am h2 tag!")]),
React.createElement("div",{id:"child2"},
[React.createElement("h3",{},"I am h3 tag!"),React.createElement("h4",{},"I am h4 tag!")]),]);

console.log(parent); // object
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

/* const heading=React.createElement("h1",{},"Hello-World from React!");
 console.log(heading); // object
 const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/