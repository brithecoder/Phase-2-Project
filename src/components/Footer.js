import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import "../css/App.css"

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation class="footer"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <div>
        @Copyright 2021
  
        <button class="ui circular facebook icon button ui right floated button">
          <i class="facebook icon"></i>
        </button>
        <button class="ui circular twitter icon button right floated ">
          <i class="twitter icon"></i>
        </button>
        <button class="ui circular linkedin icon button right floated ">
          <i class="linkedin icon"></i>
        </button>
        <button class="ui circular google plus icon button right floated ">
          <i class="google plus icon"></i>
        </button>
      </div>

    </BottomNavigation>
  );
}