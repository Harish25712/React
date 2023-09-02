5. Create a nested header element using React.createElement(h1,h2,h3 inside div with class "title")

const nester = React.createElement("div",{},[React.createElement("h1",{class:"title"},"I am h1 tag"),
                  React.createElement("h2",{class:"title"},"I am h2 tag"),
                  React.createElement("h3",{class:"title"},"I am h3 tag")]); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nester);

6. Create same element using JSX.

const nesterJSX = <div>
                  <h1 className="title">I am h1 tag</h1>
                  <h2 className="title">I am h2 tag</h2>
                  <h3 className="title">I am h3 tag</h3>
                  </div>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nesterJSX);

7. Create a functional component of the same with JSX. Pass attributes into the tag in JSX.

const FuncComponent = ({id}) =>(
   <div>
      <h1 className="title">I am h1 tag using func component{id}</h1>
      <h2 className="title">I am h2 tag using func component{id}</h2>
      <h3 className="title">I am h3 tag using func component{id}</h3>
   </div>
) 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FuncComponent/>);

8. Composition of Component(Add a component inside another)

const Parent = () =>{
   return <h1>I am the parent</h1>
}

const Child = () =>{
   return <h1>{Parent()} I am your child mom</h1> // component composition
} 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Child/>);

9. Create a Header Component from scratch using Functional Components with JSX

const Header = () => {
   return (<div className="container">
       <div className="logo-container">
           <img className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGtg3cJ7uzyoxqdYkY2BhFbiwOoKjrJvqgoA&usqp=CAU" />
       </div>
       <div className="search-align">
           Search: <input type="text" placeholder="Search"/>
       </div>
       <div>
           <img className="profile" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU" />
       </div>
   </div>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);


.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.logo {
    width: 120px;
    height: 120px;
}

.search-align {
    padding: 58px;
}

.profile {
    width: 60px;
    height: 60px;
    padding: 25px;
}