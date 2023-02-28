import React from "react"
// import CTA from "./CTA"
import Favorite from "./components/Favorite";
import Menu from "./components/Menu";


function App() {
  

  return (
    <div>
      {/* <CTA /> */}
      {/* <CTA>
        <h1>This is an important CTA</h1>
        <button>Click me now or you'll miss out!</button>
      </CTA>
      <CTA>
        <form>
          <input type="email" placeholder="Enter email address here" />
          <br />
          <button>Submit</button>
        </form>
      </CTA> */}
      <div>
        <Menu />
        <hr />
        <Favorite />
      </div>
    </div>
  );
}

export default App
