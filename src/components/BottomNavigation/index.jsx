import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles({
  root: {
    width: "100vw",
  },
  content: {
    color: "#2D3436",
  },
  navbar: {
    backgroundColor: "#DFE6E9",
    left: 0,
    bottom: 0,
    width: "100%",
    overflow: "hidden",
    position: "fixed"
  },
});

const BottomNavigationComponent = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => handleChange(event, newValue)}
      className={classes.navbar}
      showLabels
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Home"
        value="home"
        icon={<HomeIcon />}
        className={classes.content}
      />
      <BottomNavigationAction
        component={Link}
        to="/playing"
        label="Playing"
        value="playing"
        icon={<PlayArrowIcon />}
        className={classes.content}
      />
      <BottomNavigationAction
        component={Link}
        to="/playlist"
        label="Playlist"
        value="playlist"
        icon={<PlaylistPlayIcon />}
        className={classes.content}
      />
    </BottomNavigation>
  );
};

export default BottomNavigationComponent;
