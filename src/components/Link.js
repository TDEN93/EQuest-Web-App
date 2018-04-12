import React from 'react';
import { // BS import  Or li
  NavItem
} from 'react-bootstrap'; // Dependencies
import {NavLink} from 'react-router-dom';
const Link = (props) => {
  return (<NavItem eventKey={2} title="Item">
    <NavLink to={`/${props.name}`}>{props.name}</NavLink>
  </NavItem>);
}
export default Link;