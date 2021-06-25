import React, { useState, useEffect} from "react";
import '../css/App.css';
import Header from "./Header";
import Services from "../components/Services";
import Footer from "../components/Footer";


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
    <div className="App" style={{marginTop: "80px", backgroundColor: "#ffefff"}}>
      <Header />
      <Services serviceData={serviceData} ap={ap}/>
      <Footer />
    </div>
  );
}

export default App;