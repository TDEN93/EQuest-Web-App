import React from 'react';
import logo from './assets/images/logo-full.png';
import { NavLink } from 'react-router-dom'; // Dependencies
import { // BS import
	Nav,
	Col,
	Grid,
	Navbar,
	Row,
} from 'react-bootstrap';
import AnchorLink from './modules/Link'; // Import links module.
const SiteNav = (props) => {
	const Links = props.navPage.navNames.map((link, index) => {
		return <AnchorLink key={index} name={link} />
	});
	return(<Grid fluid={true}>
    <Row>
      <Col xs={12}>
        <Navbar fluid={true} collapseOnSelect={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <NavLink to='/'>
                <div className="svg-cont">
                    <svg viewBox="0.334 0.334 85.647 79.215" width="85.647" height="79.215">
                        <g id="logo">
                            <path id="outside" d=" M 65.077 76.609 L 69.798 68.074 L 55.035 76.628 L 65.077 76.609 Z  M 64.91 3.298 L 69.63 11.834 L 54.867 3.279 L 64.91 3.298 Z  M 22.026 76.721 L 31.78 76.646 L 17.082 67.98 L 22.026 76.721 Z  M 22.026 3.195 L 31.78 3.27 L 17.082 11.936 L 22.026 3.195 Z  M 85.814 39.878 L 80.795 31.514 L 80.795 48.576 L 85.814 39.878 Z  M 0.502 39.878 L 5.52 31.514 L 5.52 48.576 L 0.502 39.878 Z "
                                fill-rule="evenodd" fill="rgb(248,147,31)" vector-effect="non-scaling-stroke" stroke-width="0.335" stroke="rgb(0,0,0)" stroke-opacity="1000000" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
                            <path id="inside" d=" M 44.259 79.382 L 34.292 61.959 L 72.967 62.191 L 44.259 79.382 Z  M 42.257 0.502 L 52.223 17.926 L 13.548 17.694 L 42.257 0.502 Z  M 9.535 60.414 L 19.666 43.085 L 38.755 76.721 L 9.535 60.414 Z  M 77.095 19.456 L 66.964 36.786 L 47.875 3.149 L 77.095 19.456 Z  M 78.453 58.947 L 58.38 58.947 L 77.784 25.492 L 78.453 58.947 Z  M 8.532 20.808 L 28.605 20.808 L 9.2 54.264 L 8.532 20.808 Z "
                                fill-rule="evenodd" fill="rgb(248,147,31)" vector-effect="non-scaling-stroke" stroke-width="0.335" stroke="rgb(0,0,0)" stroke-opacity="1000000" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
                        </g>
                    </svg>
                </div>
                {/* <img src={logo} alt="logo" height="50" /> */}
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight={true}>
              {Links}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  </Grid>);
}
export default SiteNav;