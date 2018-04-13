import React from 'react';
// import 'font-awesome/css/font-awesome.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import { // BS import
  Grid,
  Row,
  Col,
  Clearfix
} from 'react-bootstrap';
const Research = (props) => {
  const page = props.researchPage;
  return(<header id="home-section">
            <Grid fluid={true}>
                <Row className="home-inner">
                    <Col className="main-content">


                    <div className="corner-ribbon bottom-right sticky orange shadow">{page.betaTag}</div>
                    </Col>
                </Row>
            </Grid >

        </header >);
}
export default Research;