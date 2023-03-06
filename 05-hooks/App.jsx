

import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      // setCount(prevCount => prevCount + 1)
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
    </div>
  );
}

export default App;

/*
function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  // useEffect(() => {
  //   setColor(randomcolor());
  // }, [count]);
  useEffect(() => {
    setColor(randomcolor());
  }, []);

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
*/
/*
// changing more complex state



function App() {
  const [inputData, setInputData] = useState({ firstName: "", lastName: "" });
  const [contactsData, setContactsData] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData((prevInputData) => ({ ...prevInputData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setContactsData((prevContacts) => [...prevContacts, inputData]);
  }

  const contacts = contactsData.map((contact) => (
    <h2 key={contact.firstName + contact.lastName}>
      {contact.firstName} {contact.lastName}
    </h2>
  ));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          name="firstName"
          value={inputData.firstName}
          onChange={handleChange}
        />
        <input
          placeholder="Last Name"
          name="lastName"
          value={inputData.lastName}
          onChange={handleChange}
        />
        <br />
        <button>Add contact</button>
      </form>
      {contacts}
    </>
  );
}

export default App;
*/
/*
function App(){
  const [count, setCount] = useState(0)
  function increment(){
    setCount(prevCount => prevCount +1)
  }
  function decrement(){
    setCount(prevCount => prevCount - 1)
  }
return (
  <div>
    <h1>{count}</h1>
    //  <button onClick={()=>setCount(prevCount => prevCount +1)}>Change!</button> 
    <button onClick={increment}>Increment!</button>
    <button onClick={decrement}>Decrement!</button>
  </div>
);
}

export default App
*/

/*
function App(){
  const [value] = useState("Yes");  // array destructuring
  // object destructuring
  
//  const person = {
//    name: "Joe",
//    age: 42,
//  };

//  const { name, age } = person;
 
  console.log(value);
  return (
    <div>
      <h1>Is state important to know? {value} </h1>
    </div>
  );
}

export default App
*/

/*
// Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!



// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button>Change!</button>
//             </div>
//         )
//     }
// }

// export default App

*/