Q1. 1. What is emmet? 
Ans: Emmet is a set of plug-ins for text editors that allows 
for high-speed coding and editing in HTML, XML, XSLT, and other 
structured code formats via content assist. When emmet is plugged in the IDE,
the editor will show the suggestion and we can simply add the HTML tag without the angular bracket and many more.

Q2. Difference between library and framework?
Ans : The key difference between a library and a framework is “Inversion of Control”. 
When you call a method from a library, you are in control.
But with a framework, the control is inverted: the framework calls your code.
Example of library : Reactjs 
Example of framework: Nodejs

Q3. What is CDN? Why do we use it?
Ans : A CDN, or Content Delivery Network, is a geographically distributed network of proxy servers and their data centers. 
The goal of a CDN is to provide high availability and performance by distributing the service spatially relative to end-users.
CDNs are primarily used to serve content to users more quickly and efficiently, reducing latency and improving user experience. 
They are often used for delivering large files, streaming video and audio, serving software updates, and more.

Q4.Why is React known as React?
React is called "React" because of its core feature, which is its ability to "react" or respond dynamically to changes in data, React's 
primary goal is to simplify the creation of complex, interactive user interfaces by breaking them down into smaller, reusable components

Q5. What is cross-origin in the script tag?
-   The cross-origin is a attribute used to share resource from one domain to another domain.Mainly it is used to handle CORS(Cross-Origin Resource sharing) request that checks whether it is safe to allow for sharing the resources from 
other domains. Resources like external script, links, img, vedio.

Q6. What is the difference between React and reactDOM?
React: React is a javascript library, designed for building better user interfaces.
 React-DOM: React-DOM is a complimentary library to React which glues React to the browser DOM use component, classes, elements, etc.
We’re using React and whenever we use methods like render() or findDOMNode() we’re using React-DOM.

Q7- What is difference between react.development.js and react.production.js files via cdn?
In production mode, compression and minification of Javascript and other resources happens to reduce size of the code which is not the case when it comes to development mode. Performance will be much faster in production mode when compared to development mode.

Q8- What are async and defer? 
Async allows your script to run as soon as it's loaded, without blocking other elements on the page. 
Defer means your script will only execute after the page has finished loading