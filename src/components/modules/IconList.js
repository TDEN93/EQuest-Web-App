import React from 'react';
import { NavLink } from 'react-router-dom';
// import Dependencies
const Svg = (props) => {
	return(
		// {/*  Social Media Icons */}
    <span className="icon-img"><NavLink to="/"><i className={props.src}></i></NavLink></span>
  );
}
const Png = (props) => {
	return(
		// {/*  Service Icons */}
		<NavLink to="/">
            <figure className="service-item">
                <img src={props.src} alt="replay-icon" height="80" />
                <figcaption className="caption">{props.caption}</figcaption>
            </figure>
        </NavLink>);
}
const FigureImages = (props) => {
  return (
      <a href="/"><figure class="header-item">
        <img src={props.src} alt="replay-icon" />
      </figure></a>
    )
}
export { Svg, Png, FigureImages };
