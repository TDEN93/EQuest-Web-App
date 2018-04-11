import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import rocketLeagueHeader from './assets/images/game-headers/headerRL.jpg';
import statsIcon from './assets/images/icons-home/stats.png';
import tacticalIcon from './assets/images/icons-home/tactical.png';

const About = (props) => {
    const page = props.aboutPage;
    return (
        <header id="home-section">
            <div className="dark-overlay">
                <div className="home-inner">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 main-content supported-game-container">
                                
                            </div>

                            <div className="corner-ribbon bottom-right sticky orange shadow">{page.betaTag}</div>

                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}
export default About;