1. What is JSX? => It is not HTML in JS, rather it is a xml/html like syntax and developer friendly

2. Superpowers of JSX:
     - Attributes in JSX are camel case eg: className,tabIndex 
     - Anywhere inside JSX u can use any piece of JS code enclosed within {}
     - JSX take care of any malicious data and prevent from cross site scripting/    Injection attacks
     - JSX basically escapes it and sanitises your data before passing it

3. Role of type attribute in script tag? What options can i use there?

  The type attribute in the <script> tag specifies the type of scripting language used in the script.
    - In HTML5, JavaScript is the default scripting language. If you omit the type attribute, the browser assumes the content is JavaScript.
        ex - <script></script> // <script type="text/javascript"></script>
    - type="module" - This indicates that the script is a module, allowing you to use ES6 module syntax to import/export code

4.     {TitleComponent} - this tells that whatever is inside this is considered to be a javascript expression and it will get evaluated.
                       you can assign some variable inside {} to extract the value.
    {<TitleComponent />} - this tells the component returning the jsx value will be evaluated. so the `TitleComponent` component is function 
                        which will return jsx. We define component within < />.
    {<TitleComponent></TitleComponent>} - this is similar to `{<TitleComponent />}`. We can write it like this.
    { TitleComponent() } - this is calling the `TitleComponent` and it will return jsx. so the o/p of it is same o/p as {<TitleComponent />}.


