import React from 'react';
import logo from './assets/images/logo-full.svg';
import { NavLink } from 'react-router-dom';
import { // BS import
  Nav,
<<<<<<< HEAD
  Col,
  Grid,
  Navbar,
  Row
=======
  NavItem,
  Navbar
>>>>>>> 07522f53e36b642b7600c7fa3ee127e4eab1450a
} from 'react-bootstrap';
import AnchorLink from './Link';
const SiteNav = (props) => {
  const Links = props.navPage.navNames.map((link, index) => {
    return <AnchorLink key={index} name={link}/>
  });

  function handleSelect(selectedKey) {
    alert(`selected ${selectedKey}`);
  }
  return(<Grid fluid={true}>
      <Row>
        <Col xs={12}>
    <Navbar inverse="inverse" collapseOnSelect="collapseOnSelect">
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to='/'>
            <img src={logo} alt="logo" height="50"/>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight="pullRight">
          {Links}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Col>
    </Row>
  </Grid>);
}
export default SiteNav;