import React from 'react';
import { NavLink } from 'react-router-dom';
// import Dependencies
export const Svgs = (props) => {
  return(
    // {/*  Social Media Icons */}
    <li><img src={props.src} alt="Graphics Icons" height="20"/></li>);
}
const Pngs = (props) => {
  return(
    // {/*  Service Icons */}
    <NavLink to="/">
    <figure className="service-item">
      <img src={props.src} alt="icon" height="80"/>
      <figcaption className="caption">{props.caption}</figcaption>
    </figure>
  </NavLink>);
}
export default { Svgs, Pngs };