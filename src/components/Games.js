import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import rocketLeagueHeader from './assets/images/game-headers/headerRL.jpg';
import statsIcon from './assets/images/icons-home/stats.png';
import tacticalIcon from './assets/images/icons-home/tactical.png';

const Games = (props) => {
    const page = props.gamePage;
    return (
        <header id="home-section">
            <div className="dark-overlay">
                <div className="home-inner">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 main-content supported-game-container">
                                {/* // Service Icons */}
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

                            </div>

                            <div className="corner-ribbon bottom-right sticky orange shadow">{page.betaTag}</div>

                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}
export default Games;