import React, {useState,useEffect} from "react";
import '../css/App.css';
import Header from "./Header";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";

function App() {
  const[serviceData, setServiceData] = useState([])
  //const [signIn, setSignIn] = useState(false)
 // const [selectBooking, setSelectBooking] = useState(false)
  
  useEffect(() =>{
    fetch('http://localhost:3000/services')
    .then((res) => res.json())
    .then((data)=>{
      setServiceData(data);
    }
    )
  },[])

  function fromSignIn () {
    console.log("You tryna get yo hair did? Errythang did?")

    // setSelectBooking(selectBooking => !selectBooking)
  }


  return (
    <div className="App" style={{marginTop: "70px"}}>
      <Header />
      <Services serviceData={serviceData} fromSignIn={fromSignIn}/>
      <Footer />
    </div>
  );
}

export default App;
