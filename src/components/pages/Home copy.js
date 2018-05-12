import React from 'react';
import { // BS import
	Grid,
	Row,
	Col,
	Clearfix
}
from 'react-bootstrap';
import logo from '../assets/images/logo-full.png';
import icon from '../assets/images/icons.svg';
import exampleDash from '../assets/images/demo.png';
import { Png, Svg} from '../modules/IconList'; // Import icons with Figcaption.
const Home = (props) => {
	const page = props.homePage;
	const svgs = page.svgs.map((svg, i) => { // Map svg files and append.
		return <Svg key={i} src={svg}/>
	});
	const pngs = page.pngs.map((pngs, i) => { // Map png icons files  with figcaption and append.
		return <Png key={i} src={pngs} caption={page.figcaption[i]}/>
  });
	return(<header id="home-section">
    <Grid fluid={true}>
{/* Main Home Content */}
      <Row className="sct-1-home-cont">
        <Col xs={12} md={12} lg={12} className="intro-title">
          <h1>
            <span>{page.title}</span>{page.titleTopColored}{page.titleTopAfter}
          </h1>
          <p><strong>{page.titleTag}</strong><span><strong>{page.titleTagColored}</strong></span><strong>{page.titleTagAfter}</strong></p>
          <button>Join Open Beta</button>
          <p className="beta_notice">We’re in open beta — <strong>sign up for free account!</strong></p>
        </Col>
      </Row>
{/* Scroll Button */}
      <section id="scroll-btn">
        <a href="#serviceRow"><span></span></a>
      </section>
{/* Service Information */}
      <Row className="sct-2-servInfo-cont" id="serviceRow">
        <Col xs={12} md={12} lg={12} className="servInfo-Title">
          {/* // add to content.js */}
          <h2>How does EQuest help you become a better player?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat congue varius. Maecenas sit amet hendrerit enim, eu venenatis turpis. Integer at orci elementum, aliquet elit scelerisque, elementum massa. Cras vitae lacinia leo, sit amet sagittis ante. Cras pellentesque est ut felis laoreet facilisis. Phasellus bibendum consectetur finibus. Sed id elit non eros auctor laoreet. </p>
        </Col>
        <Col xs={12} md={12} lg={12} className="servInfo-icon-cont">
          <div className="feature-item">
            <div className="feature-icon">
              <img className="icon" src={icon}></img>
            </div>
            <h4><strong>Measure</strong><p>how good your game is</p></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat congue varius. Maecenas sit amet hendrerit enim, eu venenatis turpis. Integer at orci elementum, aliquet elit scelerisque, elementum massa. </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <img className="icon" src={icon}></img>
            </div>
            <h4><strong>Measure</strong><p>how good your game is</p></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat congue varius. Maecenas sit amet hendrerit enim, eu venenatis turpis. Integer at orci elementum, aliquet elit scelerisque, elementum massa. </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
            <img className="icon" src={icon}></img>
            </div>
            <h4><strong>Measure</strong><p>how good your game is</p></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat congue varius. Maecenas sit amet hendrerit enim, eu venenatis turpis. Integer at orci elementum, aliquet elit scelerisque, elementum massa. </p>
          </div>

        </Col>
      </Row>
{/* Key Features Section */}
      <Row className="sct-3-keyFeat">
        <Col xs={12} md={12} lg={12} className="intro-keys">
          {/* // add to content.js */}
          <h2>Key Features</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat congue varius. Maecenas sit amet hendrerit enim, eu venenatis turpis. Integer at orci elementum, aliquet elit scelerisque, elementum massa. Cras vitae lacinia leo, sit amet sagittis ante. Cras pellentesque est ut felis laoreet facilisis. Phasellus bibendum consectetur finibus. Sed id elit non eros auctor laoreet. </p>
        </Col>
        <Col xs={12} md={12} lg={12} className="tabsContainer">
          <ul>
            <li data-tab-id="1">
              <i className="fa fa-user-circle fa-2x"></i>
              <p className="tabName">This</p>
            </li>
            <li data-tab-id="2">
            <i className="fa fa-server fa-2x"></i>
              <p className="tabName">This</p>
            </li>
            <li data-tab-id="3">
            <i className="fa fa-clipboard fa-2x"></i>
              <p className="tabName">This</p>
            </li>
            <li data-tab-id="4">
            <i className="fa fa-pie-chart fa-2x"></i>
              <p className="tabName">This</p>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={12} lg={12} className="tabs-info">
          {/* // add to content.js */}
          <div className="tabs-info-container" data-tab-id="1">
            <div className="tabs-info-text">
              <h3>What's this?</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat congue varius. Maecenas sit amet hendrerit enim, eu venenatis turpis. Integer at orci elementum, aliquet elit scelerisque, elementum massa. Cras vitae lacinia leo, sit amet sagittis ante. Cras pellentesque est ut felis laoreet facilisis. Phasellus bibendum consectetur finibus. Sed id elit non eros auctor laoreet. </p>
            </div>
            <div className="tabs-info-images">
              <img className="icon" src={exampleDash}></img>
           </div>
          </div>
        </Col>
      </Row>
{/* Footer Section */}
      <Row className="footer-row">
        <footer>
          <Col xs={12} md={12} lg={12} className="about">
            <a className="footer-logo"><img src={logo} alt="logo" height="50" /></a>
            <div className="footer-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat congue varius. Maecenas sit amet hendrerit enim, eu venenatis turpis. </p>
            </div>
            <div className="discord-msg">
              <p>Talk to our team on: Discord</p>
              <span>
                {/* <a href="discordLink"><img src=""></img></a> */}
              </span>
            </div>
            <div className="social-icons">
              <p>Follow us:</p>
              <span>
                {svgs}
              </span>
            </div>
          </Col>
          <Col xs={12} md={12} lg={12} className="contact">
            <h5>CONTACT US</h5>
            <div className="contact-item">
              <div className="contact-icon">
                <i class="fa fa-envelope"></i>
              </div>
              <div className="contact-content">
                <a href="mailto: equestresearch@gmail.com">equestresearch@gmail.com</a>
              </div>
            
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i class="fa fa-map-marker"></i>
              </div>
              <div className="contact-content">
                2483 Irving Road, Santa Monica,
                <br></br>
                CA 90401, United States
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i class="fa fa-phone"></i>
              </div>
              <div className="contact-content">
                580-555-555
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} lg={12} className="tweet-ftr-container">
            <h5>RECENT TWEETS</h5>
            <p>Test</p>
            <p>Test</p>
          </Col>

        </footer>
        <Col xs={12} md={12} lg={12} className="footer-menu">
            <ul className="ftr-nav">
              <a href="/"><li>Academy</li></a>
              <a href="/"><li>Press</li></a>
              <a href="/"><li>Terms</li></a>
              <a href="/"><li>Privacy</li></a>
              <a href="/"><li>Dev Blog</li></a>
              <a href="/"><li>Careers</li></a>
            </ul>
            <p>Handcrafted with love by Gamers for Gamers</p>
        </Col>
        <Col xs={12} md={12} lg={12} className="lgl-copy">
          <p>Copyright @ 2017-2018 All rights reserved by EQuest Research, Inc. <br></br> EQuest Research and Gamer Efficiency Rating are trademarks or registered trademarks of EQuest Research, Inc.</p>
          <p>EQuest Research isn't endorsed by Psyonix and doesn't reflect the veiws or opinions of Psyonix or anyone officially involved in producing or <br></br> managing Rocket League. Rocket League and Psyonix are trademarks or registered trademarks of Psyonix, Inc</p>

        </Col>
      
      </Row>
      <div className="corner-ribbon bottom-right sticky orange shadow">Beta</div>
    </Grid>
  </header>);
}
export default Home;