import React from "react";
import ServiceCard from "../components/ServiceCard";


function Services({serviceData, fromSignIn}){
    console.log(serviceData)

    // const fromSignIn = serviceData.map((service) => <ServiceCard  key={service.id} service={service}
    // />)

    return(
        <div className="ui centered card service-collection" style={{marginBottom: "30px", backgroundColor: "#ffefff"}} >
            {serviceData.map((service) => <ServiceCard  key={service.id} service={service} fromSignIn={fromSignIn}
            />)}
            <div style={{margin: "56px"}}></div>
        </div> 
    );
}
export default Services;