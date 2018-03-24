import React from 'react';
import {
	NavLink
} from 'react-router-dom';

const Link = (props) => {
	return (
		<li>
      <NavLink to={`/${props.name}`}>{props.name}</NavLink>
    </li>
	);
}
export default Link;