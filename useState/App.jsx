// import {useState} from "react";

/*
function App(){
  const [restaurantName, setRestaurantName] = useState("Lemon")
  // console.log(restaurantName);
  function updateRestaurantName(){
    setRestaurantName("Little Lemon")
  }
return(
  <div>
    <h1>{restaurantName}</h1>
    <button onClick={updateRestaurantName}>Update restaurant name</button>
  </div>
)
}

export default App
*/
/*
//use objects as state variables when using useState

export default function App() {
  const [greeting, setGreeting] = useState({
    greet: "Hello",
    place: "World",
  });
  console.log(greeting, setGreeting);

  function updateGreeting() {
    setGreeting((prevState) => {
      return { ...prevState, place: "World-Wide Web" };
    });
  }

  return (
    <div>
      <h1>
        {greeting.greet}, {greeting.place}
      </h1>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
} 
*/
/*
// managing state within a component
import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState({
    firstName: "Jennifer",
    lastName: "Smith",
    text: "Free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, click the button below.",
  });

  function spendGiftCard() {
    setGiftCard(prevState => {
      return{
        ...prevState,
        text: "Your coupon has been used.",
        valid: false,
        instructions: "Please visit our restaurant to renew your gift card"
      }
    })
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Gift Card Page</h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>{giftCard.text}</h3>
      <p>{giftCard.instructions}</p>
      {giftCard.valid && (
        <button onClick={spendGiftCard}>Spend Gift Card</button>
      )}
    </div>
  );
}

*/
/*
// use effect
import React from "react"
function App(){
  const [toggle, setToggle] = React.useState(false);
  const clickHandler = () => {
    setToggle(!toggle)
  }

  React.useEffect(()=> {
    document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect hook"
  }, [toggle])

  return(
    <div>
     <h1>Using the useEffect hook</h1>
     <button onClick={clickHandler}>Toggle message</button>
     {toggle && <h2>Welcom to Little Lemon</h2>}
    </div>
  )
}

export default App
*/

//fetching data 
//fetching data from a third-party API is considered a side-effect that requires the use of the useEffect hook to deal with the Fetch API calls in React.
/*
//option 1

import { useState, useEffect } from "react";

export default function App() {
  const [btcData, setBtcData] = useState({});
  useEffect(() => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((response) => response.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Current BTC/USD data</h1>
      <p>Code: {btcData.code}</p>
      <p>Symbol: {btcData.symbol}</p>
      <p>Rate: {btcData.rate}</p>
      <p>Description: {btcData.description}</p>
      <p>Rate Float: {btcData.rate_float}</p>
    </>
  );
} 
*/
/*
//option 2 better organzed

import { useState, useEffect } from "react";

export default function App() {
  const [btcData, setBtcData] = useState({});

  const fetchData = () => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((response) => response.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Current BTC/USD data</h1>
      <p>Code: {btcData.code}</p>
      <p>Symbol: {btcData.symbol}</p>
      <p>Rate: {btcData.rate}</p>
      <p>Description: {btcData.description}</p>
      <p>Rate Float: {btcData.rate_float}</p>
    </>
  );
} 
*/
// The fetchData function initially fetches data from the randomuser.me API, next it retrieves a response from the API in JSON format, and finally updates the state variable with the returned data.  
//random user 
/*
import React from "react"

function App(){

  const [user, setUser] = React.useState([]);

  const fetchData = ()=> {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }

  React.useEffect(()=> {
    fetchData();
  }, [])

  return Object.keys(user).length > 0 ? (
    <div style={{ padding: "40px" }}>
      <h1>Data returned</h1>
      <h2>First Name: {user.results[0].name.first}</h2>
      <h2>Last Name: {user.results[0].name.last}</h2>
      <h2>Email: {user.results[0].email}</h2>
      <img src={user.results[0].picture.large} alt="" />
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App
*/
/*
// Advanced hook

//useReducer
//The useState hook is best used on less complex data. Better to use it with primitive data types, such as strings, numbers, or booleans.
// The useReducer hook is best used on more complex data, specifically, arrays or objects.

import React, {useReducer} from "react"

const reducer = (state, action) => {
  if(action.type === 'buy_ingredients') return {money: state.money - 10}
  if(action.type === 'sell_a_meal') return {money: state.money + 10};
  if(action.type === 'celebrity_visit') return {money: state.money + 5000};
  return state;
}

export default function App(){
  const initialState = {money: 100}
  const [state, dispatch] = useReducer(reducer, initialState)

  return(
    <div>
 <h1>Wallet: {state.money}</h1>
 <div>
  <button onClick={()=> dispatch({type: "buy_ingredients"})}>Shopping for veggies!</button>
  <button onClick={()=> dispatch({type: "sell_a_meal"})}>Serve a meal to the customer</button>
  <button onClick={()=> dispatch({type: "celebrity_visit"})}>Celebrity visit</button>
 </div>
    </div>
  )
}
*/
/*
//useRef


import React from "react"

export default function App(){
const formInputRef = React.useRef(null);
  const focusInput = () => {
    formInputRef.current.focus();
  }
return(
  <div>
    <h1>Using useRef to access underlying DOM</h1>
    <input ref={formInputRef} type="text" />
    <button onClick={focusInput}>Focus Input</button>
  </div>
)
}

*/

// custom hook
/*
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Plus 1</button>
    </div>
  );
}

export default App;

*/

import { useState, useEffect, useRef } from "react";
export default function App() {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday");
    } else if (day === "Tuesday") {
      setDay("Wednesday");
    } else if (day === "Wednesday") {
      setDay("Thursday");
    } else if (day === "Thursday") {
      setDay("Friday");
    } else if (day === "Friday") {
      setDay("Monday");
    }
  };
  return (
    <div style={{ padding: "40px" }}>
      <h1>
        Today is: {day}
        <br />
        {prevDay && <span>Previous work day was: {prevDay}</span>}
      </h1>
      <button onClick={getNextDay}>Get next day</button>
    </div>
  );
}
function usePrevious(val) {
  const ref = useRef();
  useEffect(() => {
    ref.current = val;
  }, [val]);
  return ref.current;
}

