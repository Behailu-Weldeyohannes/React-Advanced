// document.getElementById("button").addEventListener("click", function () {
//   console.log("Clicked!");
// });

// document.getElementById("input").addEventListener("input", function () {
//   console.log("Input changed!");
// });

// document.getElementById("box").addEventListener("mouseover", function () {
//   console.log("Hovered in box!");
// });




// render props example

import React from "react";

function Example(props) {
  return (
    <div>
      <div>{props.render(40)} </div>
      <div>{props.render(true, 40)} </div>
    </div>
  );
}

export default Example;