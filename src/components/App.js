import React, { useState, useEffect} from "react";
import '../css/App.css';
import Header from "./Header";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ServiceModal from "../components/ServiceModal"
import Comments from "../components/Comments"
import SimpleModal from "./SimpleModal";


function App() {
  const [serviceData, setServiceData] = useState([])
  const [ap, setAp] = useState([])

  //const [signIn, setSignIn] = useState(false)
 // const [selectBooking, setSelectBooking] = useState(false)
  
  useEffect(() => {
    fetch('http://localhost:3000/services')
    .then((res) => res.json())
    .then((data)=>{
      setServiceData(data);
    }
    )
  },[])
  


  useEffect(() => {
    fetch('http://localhost:3000/appointment')
    .then((res) => res.json())
    .then((newApp)=>{
      setAp(newApp);
    }
    )
  },[])

  
  
console.log(ap)
  return (
    <div className="App" style={{marginTop: "70px"}}>
      <Header />
<<<<<<< HEAD
      <Services serviceData={serviceData} ap={ap}/>
      <Calendar />
=======
      {/* <SignIn fromSignIn={fromSignIn}/> */}
      <Services serviceData={serviceData} fromSignIn={fromSignIn}/> 
      <br/>
      {/* <Comments /> */}
>>>>>>> 0e1a93c402de0d4c550a05e374302b76b1b96faa
      <Footer />
    </div>
  );
}

export default App;
