import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Shopping from './Components/Shopping/Shopping';

function App(){
    return (
      <>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<Home act={"Home"}/>}
            ></Route>
            <Route
              path="/Shopping"
              element={<Shopping act={"Shopping"}/>}
            ></Route>
          </Routes>
        </div>
       </Router>
      </>
    );
}

export default App;
