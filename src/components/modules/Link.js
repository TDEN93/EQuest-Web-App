import React from 'react';
import { // BS import  Or li
  NavItem
} from 'react-bootstrap'; // Dependencies
import { NavLink } from 'react-router-dom';
const Link = (props) => {
  return(<NavItem xsHidden eventKey={2} title="Nav Item">
    <NavLink to={`/${props.name}`}>{props.name}</NavLink>
  </NavItem>);
}
export default Link;