import React from 'react';
// import 'font-awesome/css/font-awesome.min.css';
// import rocketLeagueHeader from './assets/images/game-headers/headerRL.jpg';
// import statsIcon from './assets/images/icons-home/stats.png';
// import tacticalIcon from './assets/images/icons-home/tactical.png';
// import 'font-awesome/css/font-awesome.min.css';
import { // BS import
  Grid,
  Row,
  Col,
  Clearfix
} from 'react-bootstrap';
const Services = (props) => {
  const page = props.servicePage;
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
export default Services;