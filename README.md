What is JSX, and why is it used?
Ans: JSX is JavaScript XML. It allows us to write HTML like code within JavaScript.

What is the difference between State and Props?
Ans: Props are used to pass data from a parent component to a child component, and they are read-only. State is used to store data inside a component that can change over time, such as user actions or dynamic values.

What is the useState hook, and how does it work?
Ans: useState is a React hook used to add state to functional components. It lets us store values and update them when needed. It returns two things: the current state value and a function to update that value. When the state changes, React automatically re-renders the component to show the updated data.

How can you share state between components in React?
Ans: By lifting the state up.

How is event handling done in React?
Ans: Event handling in React is done using functions attached to elements, similar to HTML but written in camelCase. For example, onClick, onChange, or onSubmit. When the event happens, the function runs and can update state or perform other actions.