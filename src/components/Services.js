import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { // BS import
    Grid,
    Row,
    Col,
    Clearfix
} from 'react-bootstrap';

import bgImage from './assets/images/services/keyboard.jpeg';


const Services = (props) => {
    const page = props.servicePage;
    return (
        <header id="home-section">
            <Grid fluid={true}>
                <Row className="home-inner">
                    <Col className="main-content">
                        <div className="services-container">
                            {/* <h1>We are research professionals</h1> */}
                            <img src={bgImage} alt="replay-icon" />
                        </div>
                        <div className="service-navigation-container">
                            <div className="service-nav-item serv1"><p>{page.replayService}</p></div>
                            <div className="service-nav-item serv2"><p>{page.tacticalService}</p></div>
                            <div className="service-nav-item serv3"><p>{page.apiService}</p></div>
                        </div>

                        <div className="corner-ribbon bottom-right sticky orange shadow">{page.betaTag}</div>
                    </Col>
                </Row>
            </Grid >

        </header >
    );
}
export default Services;