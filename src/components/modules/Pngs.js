import React from 'react';
// import Dependencies
import { NavLink } from 'react-router-dom';
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
export default Pngs;