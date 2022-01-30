/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

// Material UI icons
import Face from "@mui/icons-material/Face";
import Build from "@mui/icons-material/Build";
import ListIcon from "@mui/icons-material/List";
import MonetizationOn from "@mui/icons-material/MonetizationOn";
import Call from "@mui/icons-material/Call";
import Apps from "@mui/icons-material/Apps";
import School from "@mui/icons-material/School";
// import Work from "@mui/icons-material/Work";
import Receipt from "@mui/icons-material/Receipt";

import styles from "../assets/jss/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
  const smoothScroll = (e, target) => {
    if (props.callbackOnClick != null) {
      props.callbackOnClick();
    }
    if (window.location.pathname === "/") {
      // CxS: Commented out to get working on mobile
      /*
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        */
        e.preventDefault();
        //console.log("target = ", target);
        var targetScroll = document.getElementById(target);
        //console.log("targetScroll = ", targetScroll);
        scrollGo(document.documentElement, targetScroll.offsetTop + document.documentElement.clientHeight - 200, 1250);
      //}
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };

  const classes = useStyles();
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Link
          to="#description"
          className={classes.dropdownLink}
          onClick={e => smoothScroll(e, "description")}
        >
          <Face className={classes.dropdownIcons} />About
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="#services"
          className={classes.dropdownLink}
          onClick={e => smoothScroll(e, "services")}
        >
          <Build className={classes.dropdownIcons} />Services
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="#skills"
          className={classes.dropdownLink}
          onClick={e => smoothScroll(e, "skills")}
        >
        <ListIcon className={classes.dropdownIcons} />Skills
        </Link>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Link
          to="#experience"
          className={classes.dropdownLink}
          onClick={e => smoothScroll(e, "experience")}
        >
        <Work className={classes.dropdownIcons} />Experience
        </Link>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Link
          to="#projects"
          className={classes.dropdownLink}
          onClick={e => smoothScroll(e, "projects")}
        >
          <Apps className={classes.dropdownIcons} />Projects
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="#education"
          className={classes.dropdownLink}
          onClick={e => smoothScroll(e, "education")}
        >
          <School className={classes.dropdownIcons} />Education
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="#patents"
          className={classes.dropdownLink}
          onClick={e => smoothScroll(e, "patents")}
        >
          <MonetizationOn className={classes.dropdownIcons} />Patents
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="#certificates"
          className={classes.dropdownLink}
          onClick={e => smoothScroll(e, "certificates")}
        >
          <Receipt className={classes.dropdownIcons} />Certificates
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="#contact"
          className={classes.dropdownLink}
          onClick={e => smoothScroll(e, "contact")}
        >
          <Call className={classes.dropdownIcons} />Contact
        </Link>
      </ListItem>

    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};
