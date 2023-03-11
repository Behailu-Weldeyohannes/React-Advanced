/*
Jest provides a good iteration speed combined with powerful features like mocking modules, so you can have more control over how the code executes.
*/
/*
function App() {
  return (
    <div className="App">
      <a href="https://littlelemon.com" className="App-Link">
        Little Lemon Restaurant
      </a>
    </div>
  );
}

export default App;
*/

import "./App.css";
import FeedbackForm from "./FeedbackForm";

function App() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;

