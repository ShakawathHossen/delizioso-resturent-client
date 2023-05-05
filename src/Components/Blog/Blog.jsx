import React, { useEffect, useState } from 'react';

// const [blogs,setBlogs]=useState([])


const Blog = () => {
    return (
        <div className='md:w-10/12 mx-auto md:my-16'>
            <div className='md:py-6'>
                <h1 className='text-orange-500 text-3xl'>
                    Differences between uncontrolled and controlled components</h1>
                <p className='md:py-4'>An uncontrolled component is one that manages its own state internally, without any external intervention or control. The component's state is completely encapsulated within the component, and any updates or changes to its state are managed by the component itself. Uncontrolled components are often used in simple, stateless UI elements that don't require complex state management.On the other hand, a controlled component is one that has its state managed by an external source, such as a parent component or a state management library like Redux. The component's state is passed down to it as props, and any updates to the state are managed externally, through callbacks or other mechanisms. Controlled components are often used in complex UI elements that require more advanced state management, such as forms, dropdowns, and other interactive widgets.</p>
            </div>
            <div className='md:py-3'>
                <h1 className='text-orange-500 text-3xl'>

                    How to validate React props using PropTypes ?</h1>
                <p className='md:py-4'>To validate React props using PropTypes, you first need to import PropTypes from the 'prop-types' library at the top of your file. Next, you can define propTypes for a component by adding a propTypes property to the component function or class. The propTypes property is an object that specifies the name and type of each prop you want to validate. You can use the PropTypes library to specify the type of each prop. There are a number of different PropTypes validators available, including PropTypes.string, PropTypes.number, PropTypes.bool, and PropTypes.object. If you want to mark a prop as required, you can append .isRequired to the end of the prop type. If a required prop is not passed to the component, a warning will be logged to the console. Once you have defined the propTypes for your component, React will automatically validate the props that are passed to the component. If a prop has the wrong type or is missing a required prop, a warning will be logged to the console. By using PropTypes to validate the props for your components, you can catch errors early and ensure that your components are being used correctly.</p>
            </div>
            <div className='md:py-3'>
                <h1 className='text-orange-500 text-3xl'>Difference between nodejs and express js. ?</h1>
                <p className='md:py-4'>"Node.js is a runtime environment that allows you to run JavaScript code on the server-side. It provides an event-driven, non-blocking I/O model that makes it lightweight and efficient for building scalable network applications. Node.js includes built-in modules such as HTTP, HTTPS, File System, and others that allow you to build server-side applications using JavaScript.Express.js, on the other hand, is a popular web framework built on top of Node.js that provides a set of features and tools for building web applications and APIs. It simplifies the process of creating server-side applications by providing a set of abstractions and features for handling HTTP requests and responses, routing, middleware, and more. Express.js is built on top of Node.js and provides a higher level of abstraction, making it easier to create web applications using Node.js</p>
            </div>
            <div className='md:py-6'>
                <h1 className='text-orange-500 text-3xl'>What is a custom hook, and why will you create a custom hook?</h1>
                <p className='md:py-4'>A custom hook is a JavaScript function that allows you to reuse stateful logic across multiple React components. Custom hooks are a way to extract logic from components so that it can be reused across your application.You might create a custom hook to solve a specific problem or provide a specific functionality that is not provided by React out of the box. For example, you might create a custom hook that manages the state of a form, or a custom hook that handles authentication logic.ustom hooks allow you to abstract away complex logic and provide a clean, reusable interface for other components to consume. They can help reduce the amount of code you need to write and make your code more modular and easier to maintain.Custom hooks follow a specific naming convention, which is to prefix the name of the hook with 'use'. This naming convention is important because it signals to other developers that the function is a hook and should be used accordingly.</p>
            </div>


        </div>
    );
};

export default Blog;