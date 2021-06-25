import React from "react";
import ServiceCard from "../components/ServiceCard";
import Grid from '@material-ui/core/Grid';


function Services({serviceData, fromSignIn, ap}){
    console.log(serviceData)

    return(
        <div className="service-collection">      
            <Grid container spacing={4}>
                {serviceData.map((service) => <Grid item xs={12} md={3}> <ServiceCard  key={service.id}     service={service} fromSignIn={fromSignIn} ap={ap}/> </Grid>
                )}    
            </Grid>  
        </div>        
  
    );
}
export default Services;