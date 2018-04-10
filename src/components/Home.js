import React from 'react';
import twitterIcon from './assets/images/social/twitter.svg';
import facebookIcon from './assets/images/social/facebook.svg';
import googlePlusIcon from './assets/images/social/google-plus.svg';
import instagramIcon from './assets/images/social/instagram.svg';
import replayIcon from './assets/images/icons-home/replay.png';
import statsIcon from './assets/images/icons-home/stats.png';
import tacticalIcon from './assets/images/icons-home/tactical.png';

const Home = (props) => {
	const page = props.homePage;
	return (
		<header id="home-section">
      <div className="dark-overlay">
        <div className="home-inner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 social-media-container">
                <ul className="social-media">
{/* // Social Media Icons */}
                  <li><img src={twitterIcon} alt="Twitter Logo" height="20" /></li>
                  <li><img src={facebookIcon} alt="Facebook Logo" height="20" /></li>
                  <li><img src={googlePlusIcon} alt="Google-Plus Icon" height="20" /></li>
                  <li><img src={instagramIcon} alt="Instram Icon" height="20" /></li>
                </ul>
              </div>
            
              <div className="col-lg-12 main-content">
                <h1 className="top-text">
                  <span>{page.title}</span>{page.titleTopColored}{page.titleTopAfter}
                </h1>
                <p className="bottom-text">{page.titleTag}<span>{page.titleTagColored}</span>{page.titleTagAfter}</p>
              </div>
              <div className="service-icons-container">
{/* // Service Icons */}
                <a href="/"><figure class="service-item">
                  <img src={replayIcon} alt="replay-icon" height="80"/>
                  <figcaption class="caption">Replay Analysis</figcaption>
                </figure></a>

                <a href="/"><figure class="service-item">
                  <img src={statsIcon} alt="replay-icon" height="80"/>
                  <figcaption class="caption">Overall Stats</figcaption>
                </figure></a>

                <a href="/"><figure class="service-item">
                  <img src={tacticalIcon} alt="replay-icon" height="80"/>
                  <figcaption class="caption">Tactical Analysis</figcaption>
                </figure></a>

              </div>

              <div className="corner-ribbon bottom-right sticky orange shadow">Beta</div>
              
            </div>
          </div>
        </div>
      </div>

  </header>
	);
}
export default Home;