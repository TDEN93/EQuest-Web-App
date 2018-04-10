import React from 'react';
import Link from './Link';
import logo from './assets/images/logo-full.svg';
import {
	NavLink
} from 'react-router-dom';

const Nav = (props) => {
	const Links = props.navPage.navNames.map((link, index) => {
		return <Link key={index} name={link} />
	});
	return (
		<div className="container-full">
    
        <nav className="navbar navbar-expand-lg fixed-top">
          <NavLink to='/' className="navbar-brand">
            <img src={logo} alt="" height="50" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {Links}
            </ul>

          </div>
        </nav>

      </div>
	);
}
export default Nav;