import React from "react";
import ServiceCard from "../components/ServiceCard";


function Services({serviceData}){
    console.log(serviceData)
    return(
        <div className="service-collection">
            {serviceData.map((service) => <ServiceCard  key={service.id} service={service}
            />)}
        </div> 
    );
}
export default Services;