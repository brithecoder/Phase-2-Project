import React, {useState,useEffect} from "react";
import Login from "../components/Login";
import Services from "../components/Services"
import '../css/App.css';

function App() {
  const[serviceData, setServiceData]=useState([])
  
  useEffect(() =>{
    fetch('http://localhost:3000/services')
    .then((res) => res.json())
    .then((data)=>{
      setServiceData(data);
    }
    )
  },[])

  return (
    <div className="App">
      <header className="Appheader">
        <h1>The Hair Code</h1>
      </header>
      <Login  />
      <Services serviceData={serviceData} />
    </div>
  );
}

export default App;
