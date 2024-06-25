import 'bootstrap/dist/css/bootstrap.min.css';
import react from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Shopping from './Components/Shopping/Shopping';
import SignUpPage from './Components/SignUp/SignUpPage';
import LoginPage from './Components/LoginPage/LoginPage';
import AddToCart from './Components/AddToCart/AddToCart';
// import axios from 'axios';

function App() {
  // const [itemData, setItemData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await axios.get('http://localhost:7777/shoppingCart/getAllItems');
  //       setItemData(result.data);
  //       console.log(result.data); 
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      {/* <div>
        <h1>React App</h1>
        {itemData && itemData.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div> */}
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Shopping" element={<Shopping />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/addtocart" element={<AddToCart />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

// import 'bootstrap/dist/css/bootstrap.min.css';
// import {useEffect, useState} from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Home from './Components/Home/Home';
// import Shopping from './Components/Shopping/Shopping';
// import SignUpPage from './Components/SignUp/SignUpPage';
// import LoginPage from './Components/LoginPage/LoginPage';
// import AddToCart from './Components/AddToCart/AddToCart';
// import axios from 'axios';


// function App(){
//   const [itemData, setItemData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios('http://localhost:7777/shoppingCart/getAllItems'); // Assuming your API endpoint is '/api/data'
//       setItemData(result.data);
//       console.log(result.data);
//     };

//     fetchData();
//   }, []);

//     return (
//       <>
//       <div>
//        <h1>React App</h1>
//         {itemData.map(e) =>{
//           return console.log(e)
//         }}
//       </div>
//       <Router>
//         <div className="App">
//           <Routes>
//             <Route
//               path="/"
//               element={<Home />}
//             ></Route>
//             <Route
//               path="/Shopping"
//               element={<Shopping />}
//             ></Route>
//             <Route
//               path="/signup"
//               element={<SignUpPage />}
//             ></Route>
//             <Route
//               path="/login"
//               element={<LoginPage />}
//             ></Route>
//             <Route
//               path="/addtocart"
//               element={<AddToCart />}
//             ></Route>
//           </Routes>
//         </div>
//        </Router>
//       </>
//     );
// }

// export default App;
