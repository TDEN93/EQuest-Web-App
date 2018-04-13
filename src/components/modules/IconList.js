import React from 'react';
import { NavLink } from 'react-router-dom';
// import Dependencies
const Svg = (props) => {
	return(
		// {/*  Social Media Icons */}
		<li><img src={props.src} alt="Graphics Icons" height="20"/></li>);
}
const Png = (props) => {
	return(
		// {/*  Service Icons */}
		<NavLink to="/">
      <figure className="service-item">
        <img src={props.src} alt="replay-icon" height="80"/>
        <figcaption className="caption">{props.caption}</figcaption>
      </figure>
  </NavLink>);
}
export { Svg, Png };