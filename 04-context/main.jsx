import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ThemeContext from './components/themeContext'


// const ThemeContext = React.createContext()
// ThemeContext.Provider & ThemeContext.Consumer






ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <ThemeContext.Provider value="dark">
      <App />
    </ThemeContext.Provider>
    ,
  </React.StrictMode>
);
