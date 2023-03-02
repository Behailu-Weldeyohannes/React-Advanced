import React from "react"
// import CTA from "./CTA"
// import Favorite from "./components/Favorite";
// import Menu from "./components/Menu";
import Example from "./Example";


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
      {/* <div>
        <Menu />
        <hr />
        <Favorite />
      </div> */}
      
        <Example  render={
          function(number){
            return (
            <h1>{number >= 0 ? "Positive" : "Negative"}</h1>
            
            )}
        }/>
        <Example  render={function(bool, number){
             return(
              <div>
                <h1>{number}</h1>
                <h1>{bool ? "true" : "False"}</h1>
              </div>
             )
        }}/>
      
    </div>
  );
}

export default App
