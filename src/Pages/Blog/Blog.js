import React from "react";

const Blog = () => {
  return (
    <div className="w-3/4 mx-auto">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          what are the different ways to manage a state in a react application
        </div>
        <div className="collapse-content">
          <p>
            There are four main types of state you need to properly manage in
            your React apps:<br></br>1. Local state<br></br>2. Global state
            <br></br> 3.Server state<br></br>4. URL state.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          how does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p>
            Every object with its methods and properties contains an internal
            and hidden property known as [[Prototype]]. The Prototypal
            Inheritance is a feature in javascript used to add methods and
            properties in objects. It is a method by which an object can inherit
            the properties and methods of another object. Traditionally, in
            order to get and set the [[Prototype]] of an object, we use
            Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern
            language, it is being set using __proto__.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          What is unit test? Why should we write unite tests?
        </div>
        <div className="collapse-content">
          <p>
            Unit testing is a software development process in which the smallest
            testable parts of an application, called units, are individually and
            independently scrutinized for proper operation. This testing
            methodology is done during the development process by the software
            developers and sometimes QA staff. The main objective of unit
            testing is to isolate written code to test and determine if it works
            as intended. Unit testing is an important step in the development
            process, because if done correctly, it can help detect early flaws
            in code which may be more difficult to find in later testing stages.
            Unit testing is a component of test-driven development (TDD), a
            pragmatic methodology that takes a meticulous approach to building a
            product by means of continual testing and revision. This testing
            method is also the first level of software testing, which is
            performed before other testing methods such as integration testing.
            Unit tests are typically isolated to ensure a unit does not rely on
            any external code or functions. Testing can be done manually but is
            often automated.<br></br>
            <span className="font-bold"> How unit tests work </span>
            <br></br>A unit test typically comprises of three stages: plan,
            cases and scripting and the unit test itself. In the first step, the
            unit test is prepared and reviewed. The next step is for the test
            cases and scripts to be made, then the code is tested. Test-driven
            development requires that developers first write failing unit tests.
            Then they write code and refactor the application until the test
            passes. TDD typically results in an explicit and predictable code
            base.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          difference between react vs angular vs vue
        </div>
        <div className="collapse-content">
          <p>
            <span className="font-bold">React vs Vue</span><br /> While Talking about Vue JS vs React, both front-end
            tools are used to build web applications for enterprises. However,
            both open-source tools have their own use cases; we will explore
            comprehensive differences - React JS vs Vue JS. Vue is a popular
            progressive, open-source framework for developing complex user
            interfaces, while React is a JavaScript library for building web
            development for interactive elements on UIs. React is also used to
            develop SPAs and mobile apps. Vue JS is more oriented to novice
            developers, while React requires in-depth knowledge of JavaScript.
            React uses a virtual DOM (copy of the actual DOM) to interact with
            HTML files, but every element is represented as a JavaScript object.
            Vue has two-way binding and uses a virtual DOM. <br />
            <span className="font-bold">Angular vs Vue</span><br /> But now a question comes – which one is better, Vue
            or Angular? As we have seen a comparison between Angular JS vs React
            JS in the above section, let’s understand how Vue and Angular differ
            from each other and which one is a better framework for you. Angular
            is a TypeScript-based structure framework, while Vue is a
            progressive lightweight framework. Both - Angular JS and React JS
            frameworks are used to create web interfaces for front end
            development. Angular is Google’s matured and advanced JavaScript
            framework based on TypeScript, whereas Vue is a progressive
            open-source front-end JavaScript framework created by Evan You.
            While comparing Vue JS vs Angular, Vue is known for its clean
            architecture and its elegant designs. On the other hand, Angular is
            considered for many organizations due to its vast functionality and
            high performance..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
