import React, {useState,useEffect} from "react";
import '../css/App.css';
import Header from "./Header";
import SignIn from "../components/SignIn";
import Services from "../components/Services"
import UserForm from "./UserForm";
import Footer from "../components/Footer";
import ServiceModal from "../components/ServiceModal"
import Comments from "../components/Comments"
import SimpleModal from "./SimpleModal";


function App() {
  const[serviceData, setServiceData]=useState([])
  const [signIn, setSignIn] = useState(false)
  const [selectBooking, setSelectBooking] = useState(false)
  
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
      return (
        <ServiceModal />
      )
    }
  }

  const testing = () => {
    if(selectBooking === false){
      setSelectBooking(selectBooking => !selectBooking)
      return (
        <ServiceModal />
      )
    } else {
      return (
        <SimpleModal />
      )
    }
  }


  return (
    <div className="App" style={{marginTop: "70px"}}>
      <Header />
      {/* <SignIn fromSignIn={fromSignIn}/> */}
      <Services serviceData={serviceData} fromSignIn={fromSignIn}/> 
      <br/>
      <Comments />
      <Footer />
    </div>
  );
}

export default App;
