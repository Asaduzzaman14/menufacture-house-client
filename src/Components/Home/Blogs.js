import React from 'react';

const Blogs = () => {
    return (
        <div>

            <div className="card w-full bg-base-100 shadow-xl">

                <div className="card-body items-center text-center">
                    <h3 className="card-title">1.  How will you improve the perhtmlFormance of a React Application?  </h3>
                    <p>  Firebase PerhtmlFormance Monitoring, a real time app perhtmlFormance monitoring tool, helps you keep a close eye on your app as you roll out new features or make configuration changes. PerhtmlFormance Monitoring also gives you control over your perhtmlFormance data with a customizable dashboard that makes it easy to focus on your most important metrics. </p>
                </div>
            </div>

            <div className="card w-full bg-base-100 shadow-xl">

                <div className="card-body items-center text-center">
                    <h3 className="card-title">   2.Why you do not set the state directly in react ?</h3>
                    <p>Ans: To change a value in the state object, use the this. setState() method. When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).</p>
                </div>
            </div>

            <div className="card w-full bg-base-100 shadow-xl">

                <div className="card-body items-center text-center">
                    <h3 className="card-title">   3.How does prototypical inheritance work ?</h3>
                    <p> Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.I understand, ‘this’ refers to itself, to its own object or global object. Using ‘this’ are partitioned in 3 locations of code. These are in functions, outside of functions (global scope, ex: window object), and in Javascript’s eval() function.Common pitfalls when using ‘this’ are usually relevant to scope issues in real functions, methods, and constructors. Though there are ways to fix these common issues by using ES5, bind() or ES6 arrow functions</p>
                </div>
            </div>


            <div className="card w-full bg-base-100 shadow-xl">

                <div className="card-body items-center text-center">
                    <h1 className='card-title'>4. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>

                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">

                <div className="card-body items-center text-center">
                    <h1 className='card-title'>5. What is a unit test? Why should write unit tests?</h1>
                    <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>

                </div>
            </div>



        </div>
    );
};







export default Blogs;