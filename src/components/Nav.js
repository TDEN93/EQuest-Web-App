import React from 'react';
import logo from './assets/images/logo-full.svg';
import { NavLink } from 'react-router-dom';
import { // BS import
  Nav,
  NavItem
} from 'react-bootstrap';
import AnchorLink from './Link';

const SiteNav = (props) => {
  const Links = props.navPage.navNames.map((link, index) => {
    return <AnchorLink key={index} name={link} />
  });
  function handleSelect(selectedKey) {
    alert(`selected ${selectedKey}`);
  }
  return (
    <nav className="navbar navbar-expand-lg ">
      <NavLink to='/' className="navbar-brand">
        <img src={logo} alt="logo" height="50" />
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Nav bsClass='navBar' className='navbar-nav' bsStyle="pills" activeKey={1} onSelect={handleSelect}>
          {Links}
        </Nav>
      </div>
    </nav>
  );
}
export default SiteNav;