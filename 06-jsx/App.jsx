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

/*
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
*/

// Higher-order components HOC
/*
import React, { useState, useEffect } from "react";

const withMousePosition = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMousePositionChange = () => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };
      window.addEventListener("mousemove", handleMousePositionChange);

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);
    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <div className="Row">
        <span>X: {mousePosition.x}</span>
        <span>Y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};
const PanelMouseTracker = withMousePosition(PanelMouseLogger)
const PointMouseTracker = withMousePosition(PointMouseLogger)
function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
}
export default App;
*/
/*
// Render props
import React, { useEffect, useState } from "react";

const DataFetcher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (URL.includes("desserts")) {
      setData(["cake", "ice cream", "pie", "brownie"]);
    } else {
      setData(["water", "soda", "juice"]);
    }
  }, []);

  return render(data);
};

const DessertsCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/desserts"
      render={(data) => <p>{data.length} desserts</p>}
    />
  );
};

const DrinksCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/drinks"
      render={(data) => <h3>{data.length} drinks</h3>}
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header"> Little Lemon Restaurant 🍕</header>
      <DessertsCount />
      <DrinksCount />
    </div>
  );
}

export default App;
*/
// Implementing scroller position with render props

import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  return render({ mousePosition });
};

const PanelMouseLogger = () => {
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <MousePosition
        render={({ mousePosition }) => (
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        )}
      />
    </div>
  );
};

const PointMouseLogger = () => {
  return (
    <MousePosition
      render={({ mousePosition }) => (
        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>
      )}
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
