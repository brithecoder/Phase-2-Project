<<<<<<< HEAD
import React, { useState } from "react";
import { Button, Card } from 'semantic-ui-react';
import Calendar from "../components/Calendar";



function ServiceCard({service}){
    console.log(service)
    
    // function handleClick(){
    //     calendarFunction(service);
    // }

    return(
    
=======
import React from "react";



function ServiceCard({service, fromSignIn}){

    const handleBook =() => {
        console.log("Book Me")
        fromSignIn()
    }
    
   // console.log(service)

    return (
>>>>>>> main
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
                    <button onClick={handleBook} class="ui right floated button">Book Now</button>
                    <br/> Duration: {service.duration} 
                </h5>
            </div>
            {/* <div class="extra content">
                <a> <i class="users icon"></i>  2 Members </a>
            </div>
            </div>
                <div class="card">
                    <div class="blurring dimmable image">
                        <div class="ui inverted dimmer">
                            <div class="content">
                                <div class="center">
                                <div class="ui primary button">Add Friend</div>
                            </div>
                        </div>
                    </div>
                    <img src="/images/avatar/large/jenny.jpg"/> 
                </div>
                <div class="content">
                    <a class="header">Team Hess</a>
                    <div class="meta">
                        <span class="date">Created in Aug 2014</span>
                    </div>
                </div>
                <div class="extra content">
                    <a href="./">
                    <i class="users icon"></i>
                     price: ${service.price} 
                      <br/> Duration: {service.duration}
                    </a>
<<<<<<< HEAD
                </div>
                 
                   Book Now<Calendar />
            </div>
        </div>         
    </div> 
    );
}
export default ServiceCard;


=======
                </div> */}
                </div>
            </div>         
        </div> 
    );
}
export default ServiceCard;
>>>>>>> main
