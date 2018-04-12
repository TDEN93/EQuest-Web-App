import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import rocketLeagueHeader from './assets/images/game-headers/headerRL.jpg';
import { // BS import
    Grid,
    Row,
    Col,
    Clearfix
  } from 'react-bootstrap';

const Games = (props) => {
    const page = props.gamePage;
    return (
        <header id="home-section">
            <Grid fluid={true}>
                <Row className="home-inner">
                    <Col className="main-content supported-game-container">
                        <a href="/"><figure class="header-item">
                            <img src={rocketLeagueHeader} alt="replay-icon" height="250" />
                        </figure></a>

                        <a href="/"><figure class="header-item">
                            <img src={rocketLeagueHeader} alt="replay-icon" height="250" />
                        </figure></a>

                        <a href="/"><figure class="header-item">
                            <img src={rocketLeagueHeader} alt="replay-icon" height="250" />
                        </figure></a>

                        <a href="/"><figure class="header-item">
                            <img src={rocketLeagueHeader} alt="replay-icon" height="250" />
                        </figure></a>

                        <a href="/"><figure class="header-item">
                            <img src={rocketLeagueHeader} alt="replay-icon" height="250" />
                        </figure></a>

                        <a href="/"><figure class="header-item">
                            <img src={rocketLeagueHeader} alt="replay-icon" height="250" />
                        </figure></a>

                    <div className="corner-ribbon bottom-right sticky orange shadow">{page.betaTag}</div>
                    </Col>
                </Row>
            </Grid >

        </header >
    );
}
export default Games;