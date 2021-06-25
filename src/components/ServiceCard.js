import React from "react";
import ServiceModal from "../components/ServiceModal"


function ServiceCard({service, fromSignIn, ap}){

    const handleBook =() => {
        console.log("Book Me")
        fromSignIn()
    }
   function test(){
       return (
        <div class="ui right floated button"> 
        <ServiceModal ap={ap} service={service}/>
        </div>
       )
   }
    return (
        <div class="service-card">
            <div class="ui special cards">
                <div class="card">
                    <div class="blurring dimmable image">
                        <div class="ui dimmer">
                            <div class="content">
                                <div class="center">
                                    <div class="ui inverted button">Add Friend</div>
                                </div>
                            </div>
                        </div>
                        <img src={service.img_url} alt={service.name}/>
                    </div>
                    <div class="content">
                        <a href="./" class="header">{service.name} </a>
                        <div class="meta">
                            <span class="date">{service.description}</span>
                        </div>
                    </div>
                    <div class="extra content">
                        <h5>
                            <i class="users icon"></i>Price: ${service.price} 
                            {test()}
                            {/* <button onClick={handleBook} class="ui right floated button">Book Now</button> */}
                            <br/> Duration: {service.duration} 
                        </h5>
                    </div>
                </div>
            </div>         
        </div> 
    );
}
export default ServiceCard;