
import React from "react";
import NewJSFeatures from "./NewJSFeatures";
import Card from "./Card"
import RoundedImg from "./RoundedImg";


function App() {
  return (
    <div>
      <NewJSFeatures />
      <div>
        <Card cardColor="red" height={200} width={200} />
        {/* <Card cardColor="blue" /> */}
        <Card cardColor="blue" />
        <Card cardColor="green" />
      </div>
      <RoundedImg
        src="https://picsum.photos/id/237/300/300"
        borderRadius="10px"
      />
    </div>
  );
}

export default App;
