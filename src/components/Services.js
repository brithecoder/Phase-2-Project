import React from "react";
import ServiceCard from "../components/ServiceCard";


function Services({serviceData}){
    console.log(serviceData)

    // const fromSignIn = serviceData.map((service) => <ServiceCard  key={service.id} service={service}
    // />)

    return(
        <div className="ui centered card service-collection" >
            {serviceData.map((service) => <ServiceCard  key={service.id} service={service}
            />)}
            {/* {fromSignIn} */}
        </div> 
    );
}
export default Services;