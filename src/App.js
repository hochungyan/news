import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://github.com/digital-futures-academy"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Digital Futures Academy
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import Header from "./Components/Header"
import Footer from "./Components/Footer";
import AllNewsItems from './Components/AllNewsItems';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
//

//
function App() {

  // return (
  //   <div className="container">
  //     <Header />
  //     <div className="container">
  //       <h4><AllNewsItems/></h4>
  //     </div>
  //     <Footer />
  //   </div>
  // );
  const [data, setData] = useState([]);

  const getArticles = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/response`);
      console.log(response.data.results);
      setData(response.data.results);



    }
    catch (e) {
      console.log(e.message);
    }
  }


  useEffect(() => {
    setTimeout(() => {
      getArticles()
    }, 3000)

  }, []);
  return (
   <div>
    <header>
      <Header />
       <AllNewsItems data={data}/> 
    </header>
    <main>  
  <footer>
      <Footer />
    </footer>
 
</main>
</div >
);
  }
export default App; 
