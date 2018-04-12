import React from 'react';
<<<<<<< HEAD
// import 'font-awesome/css/font-awesome.min.css';
const Research = (props) => {
  const page = props.researchPage;
  return (<header id="home-section">
    <div className="dark-overlay">
      <div className="home-inner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 main-content supported-game-container"></div>
            <div className="corner-ribbon bottom-right sticky orange shadow">{page.betaTag}</div>
          </div>
        </div>
      </div>
    </div>
  </header>);
=======
import 'font-awesome/css/font-awesome.min.css';

import { // BS import
    Grid,
    Row,
    Col,
    Clearfix
  } from 'react-bootstrap';

const Research = (props) => {
    const page = props.researchPage;
    return (
        <header id="home-section">
            <Grid fluid={true}>
                <Row className="home-inner">
                    <Col className="main-content">
                       

                    <div className="corner-ribbon bottom-right sticky orange shadow">{page.betaTag}</div>
                    </Col>
                </Row>
            </Grid >

        </header >
    );
>>>>>>> 07522f53e36b642b7600c7fa3ee127e4eab1450a
}
export default Research;