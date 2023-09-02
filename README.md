React - JS library developed by Facebook
Browsers does not understand react
React can work with existing apps and also can work on small portions of your app

To insert react into your project:
Go to CDN React and paste the 2 scripts in your code

- react.development.js => Core of React (all codes,variables,functions are present)
- react-dom.development.js => Used for all DOM Operations

React native - React used in your mobile


react.createElement -> normal JS object -> when it renders => becomes html tag (browser understands)
it takes 3 arguments:

- type of html element like heading or p or div
- object which used to give attributes to your tag like {id:"heading"}
- children or content like "I am h1 tag"

Props(can be found under console): Children + Attributes

To pass more than 1 children in React.createElement we have to convert this into a array of functions.

Order of the file matters , else will thrwo an error

Anything u write inside root will be replaced by whatever u pass it on render method
eg: In html:
<body>
    <div id="header">
        <h1>Hello!</h1>
    </div>

    In JS:
    const parent = React.createElement("h3",{id:"heading"},"I am h3 tag!");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);

    O/P: Hello! will be replaced by I am h3 tag!
