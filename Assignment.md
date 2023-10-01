### Chapter 06 - Exploring the world

1. ### What is a Microservice?
  - A microservice is a software architectural style that structures an application as a collection of small, independent, and loosely coupled services. 
 - Each service in a microservices architecture represents a specific functional module and operates as a separate unit with its own dedicated processes. 
 - These services communicate with each other through well-defined APIs (Application Programming Interfaces) typically over HTTP or other lightweight protocols.
 - It follows single responsibility principle
 - Separation of concerns -> All teams (Backend,UI,DB,SMS,Authentications,Email) work on their own independent services
 - On different ports we can deploy different service
 - At the end of the day, all these ports can be mapped to domain name
 - They interact by making a call to different ports/URLs
  - You can have different tech stacks for different things..(i.e)..You can write microservices in any architecture you want to
- eg: UI(react),backend(java),DB(python),SMS(golan)

2. ### What is a Monolith Architecture?
 - In software development, a monolith architecture refers to a traditional and older style of designing applications where the entire application is built as a single, large, and tightly integrated unit. 
 - In a monolithic architecture, all the different components and functionalities of the application are bundled together into a single codebase, typically running in a single process and sharing the same database.
 - All teams (Backend,UI,DB,SMS,Authentications,Email) work on a single repository/service
 - Single tech stack per appication/project
 - eg: If java is used in a service then Java will be used for all services in a application/Project

3. ### What is the difference between Monolith and Microservice?
 - Monolith and microservice architectures is the level of coupling and the size of the building blocks. 
 - Monoliths are a single, tightly integrated unit, while microservices are a collection of small, independent services that communicate through well-defined interfaces.
 - Microservices provide advantages in terms of scalability, flexibility, and ease of maintenance, but they also come with increased complexity and operational challenges, which need to be carefully managed.

 4. ### Why do we need a useEffect Hook?
    - The useEffect Hook allows you to perform side effects in your components.Examples of side effects are: fetching data, directly updating the DOM, and timers.
    - By using useEffect Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.
    - useEffect takes two arguments. The first argument is a function called effect and the second argument (optional) is an array of dependencies.

5. ### What is Optional Chaining?
   -  ? -> operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.
   - Eg: json?.data?.cards[2]?.card?.card?.restaurants

6. ### What is Shimmer UI?
   - Fake cards are shown untill the page loads.
   - It is a version of the UI that doesn't contain actual content, but instead mimics the layout and shapes of the content that will eventually appear. 
   - It uses a gradient animation that creates a shimmering effect over the placeholders,thereby giving a better user experience untill the page loads

7. ### What is the difference between JS expression and JS statement.
   - A JavaScript program consists of a sequence of statements. Each statement is an instruction to do something, like create a variable, run an if/else condition, or start a loop.
   - Expressions produce a value, and these values are slotted into statements.
   - Expressions are always part of a statement, even if that statement is otherwise empty. For example, the code below runs a loop without using a for statement, but it still includes an “empty wrapper” statement:

8. ### What is Conditional Rendering, explain with a code example
   - Displaying different content or components based on certain conditions or logical expressions.It allows developers to control what gets rendered on the user interface based on the state of the application, user input, or other factors.
   eg:
   if(listOfRestaurants.length === 0)
{
   return <Shimmer/>;
}

9. ### What is CORS?
   - Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

10. ### What is async and await?
    - Techniques used tlo resolve a promise
    - The async keyword is used to declare that a particular function is asynchronous. 
    - The await keyword waits for the execution of the async function's code block until a promise is fulfilled or rejected.

11. ### What is the use of 'const json = await data.json;' in getRestaurants()
    - The expression `const json = await data.json()`` is used to extract and parse the JSON data from an HTTP response received from a fetch operation or any other asynchronous operation that returns a Promise.

    - `data`: It represents the result of an asynchronous operation, usually an HTTP response from a fetch request. The data object is a Promise that resolves to the HTTP response.

    - `await`: The await keyword is used inside an async function to pause the execution of the function until the promise (in this case, the data promise) is settled (resolved or rejected).

    - `data.json()`: This is a method call on the data object. In the context of an HTTP response, the json() method is a built-in method that reads the response body and parses it as JSON data. It returns a new Promise that resolves to the JSON data once it's been parsed.

    - `const json = ...`: This line declares a constant variable named json to store the parsed JSON data. The await keyword is used here to ensure that the assignment to json happens only after the JSON data has been fully parsed and the Promise returned by data.json() has been resolved.