import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>

                <h2 className="text-3xl text-white py-10 bg-red-500">This is Blogs page</h2>

                <h3>  3.How does prototypical inheritance work ?</h3>
                <p>
                    Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.I understand, ‘this’ refers to itself, to its own object or global object. Using ‘this’ are partitioned in 3 locations of code. These are in functions, outside of functions (global scope, ex: window object), and in Javascript’s eval() function.Common pitfalls when using ‘this’ are usually relevant to scope issues in real functions, methods, and constructors. Though there are ways to fix these common issues by using ES5, bind() or ES6 arrow functions
                </p>
            </div>

            <div>

                <h2>4.Why you do not set the state directly in react ?</h2>
                <p>Ans: To change a value in the state object, use the this. setState() method. When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).</p>
            </div>

        </div>
    );
};

export default Blogs;