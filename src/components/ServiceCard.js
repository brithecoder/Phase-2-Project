import React from "react";
import { Button, Card } from 'semantic-ui-react'


function ServiceCard({service}){
    
    console.log(service)

    return(
        <div className="service-card centered card">
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
                    <img src={service.img_url}/>
                </div>
                <div class="content">
                    <a class="header">Team Fu</a>
                    <div class="meta">
                    <span class="date">Created in Sep 2014</span>
                </div>
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
                </div> */}
                <div class="extra content">
                    <a>
                    <i class="users icon"></i>
                    2 Members
                    </a>
                </div>
                </div>
            </div>            
        </div> 
    );
}
export default ServiceCard;



      {/* <h2>{service.name}</h2>
        <img 
        src={service.img_url}
        className="service-img"
        />
        <p> {service.description}</p>
        <p> time:{service.duration}</p>
        <p> price:{service.price}</p>
        <button class="ui button">Click Here</button> */}