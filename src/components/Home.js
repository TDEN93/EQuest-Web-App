import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
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
              <div className="col-lg-1 social-media-container">
                <ul className="social-media">
{/* // Social Media Icons */}
                  <li><a href="/"><i className="fa fa-twitter fa-2x"></i></a></li>
                  <li><a href="/"><i className="fa fa-facebook-square fa-2x"></i></a></li>
                  <li><a href="/"><i className="fa fa-google-plus fa-2x"></i></a></li>
                  <li><a href="/"><i className="fa fa-instagram fa-2x"></i></a></li>
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
                  <figcaption class="caption">{page.replayService}</figcaption>
                </figure></a>

                <a href="/"><figure class="service-item">
                  <img src={statsIcon} alt="replay-icon" height="80"/>
                  <figcaption class="caption">{page.overallService}</figcaption>
                </figure></a>

                <a href="/"><figure class="service-item">
                  <img src={tacticalIcon} alt="replay-icon" height="80"/>
                  <figcaption class="caption">{page.tacticalService}</figcaption>
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
export default Home;