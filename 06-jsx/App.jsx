// jsx means Syntax extension to Javascript.
// React uses JSX to describe UI appearances

/*
const Button = ({children, backgroundColor})=> {
 return <button style={{backgroundColor}}>{children}</button>
}

const Alert = ({children})=> {
return (
  <>
    <div className="Overlay"/>
    <div className="Alert">{children}</div>
  </>
);
};

const DeleteButton = ()=> {
  return(
    <Button backgroundColor="red">Delete</Button>
  )
}

export default function App(){
  return(
    <div className="App">
  <header>Little Lemon Restaurant</header>
  <Alert>
    <h4>Delete Account</h4>
    <p>
      Are you sure you want to Proceed?
    </p>
  </Alert>
  <DeleteButton />
    </div>
  )
}
*/

// Manipulating children dynamically in jsx
//  React.cloneElement  api
//  React.children api
/*

import * as React from "react"


const Row = ({children, spacing}) =>{

  const childStyle = {
    marginLeft: `${spacing}px`,
  };
return (
  <div className="Row">
    {React.Children.map(children, (child, index) => {
      return React.cloneElement(child),{
        style: {
          ...child.props.style,
          ...(index > 0 ? childStyle : {

          })
        }
      }
    })}
    {children}
  </div>
);
};

function LiveOrder(){
return(
  <div className="App">
    <Row spacing={32}>
    <p>Pizza Margarita</p>
    <p>2</p>
    <p>30$</p>
    <p>18:30</p>
    <p>John</p>
    </Row>

  </div>
)
}

export default LiveOrder
*/
/*
import "./App.css";
import { RadioGroup, RadioOption } from "./Radio/";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default App;
*/



const orderAmend = {
  ...order,
  item: "Pizza Prosciutto"
}

function OrderList(){
  const order = {
    id: 1,
    username: "John Doe",
    item: "Pizza Margherita",
    price: "$30.00",
  };
  return(
    <Order {...order} />
  )
}
