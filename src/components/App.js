import React, {useState,useEffect} from "react";
import '../css/App.css';
import Header from "./Header";
import SignIn from "../components/SignIn";
import Services from "../components/Services"
import Footer from "../components/Footer";


function App() {
  const[serviceData, setServiceData]=useState([])
  const [signIn, setSignIn] = useState(false)
  
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
    if(signIn === false) {
      setSignIn(signIn => !signIn)
      console.log("Welcome to the Hair Salon")
    }
    return "Hello"

  }


  return (
    <div className="App">
      <Header />
      {/* <SignIn fromSignIn={fromSignIn}/> */}
      <Services serviceData={serviceData} />
      <Footer />
      <hr/> <hr/>
    </div>
  );
}

export default App;
