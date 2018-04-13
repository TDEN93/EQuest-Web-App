import React from 'react';
import { // BS import  Or li
	NavItem
} from 'react-bootstrap'; // Dependencies
import { NavLink, Link } from 'react-router-dom';
const AnchorLink = (props) => {
	return(<li role='presentation'>
    <NavLink to={`/${props.name}`}>{props.name}</NavLink>
  </li>);
}
export default AnchorLink;