import React from "react";
import ServiceCard from "../components/ServiceCard";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


function Services({serviceData, fromSignIn, ap}){
    console.log(serviceData)

    // const useStyles = makeStyles((theme) => ({
    //     // root: {
    //     //   flexGrow: 1,
    //     // },
    //     // paper: {
    //     //   padding: theme.spacing(2),
    //     //   textAlign: 'center',
    //     //   color: theme.palette.text.secondary,
    //     // },
    //   }));
  
    // const classes = useStyles();
    return(
        <div className="service-collection" style={{backgroundColor: "#ffefff"}} >
            <div >
                <Grid container spacing={6}>
                    {serviceData.map((service) => <Grid class="ui centered card" item xs={12} sm={6}> <ServiceCard  key={service.id} service={service} fromSignIn={fromSignIn} ap={ap}/> </Grid>
                    )}    
                    {/* <Paper className={classes.paper}>xs=6</Paper>  */}
                </Grid>
            </div>

            <div style={{paddingBottom: "200px", margin: "206px"}}></div>
        </div> 
    );
}
export default Services;