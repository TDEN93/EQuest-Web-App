import React from 'react';
import { // BS import
	Grid,
	Row,
	Col,
	Clearfix
}
from 'react-bootstrap';
import logo from '../assets/images/logo-full.png';
import { Png, Svg } from '../modules/IconList'; // Import icons with Figcaption.
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
      <Row className="firstRow">
        <Col className="social-media-container">
          <ul className="social-media">
            {/* Append svg icons to page */}
            {/* {svgs} */}
          </ul>
        </Col>
        <Col xs={12} md={12} lg={12} className="intro-title">
          <h1>
            <span>{page.title}</span>{page.titleTopColored}{page.titleTopAfter}
          </h1>
          <p><strong>{page.titleTag}</strong><span><strong>{page.titleTagColored}</strong></span><strong>{page.titleTagAfter}</strong></p>
          <button>Join Open Beta</button>
          <p className="beta_notice">We’re in open beta — <strong>sign up for free account!</strong></p>
        </Col>
        
        
      </Row>
      <Row className="secondRow">
      {/* <Col xs={12} md={12}>
          <div className="service-icons-container">
            Append all png icons and figcaptions to page */}
            {/* {pngs}
          </div>
        </Col> */}
        <Col xs={12} md={12} lg={12} className="intro-features">
          {/* // add to content.js */}
          <h2>How does EQuest help you become a better player?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat congue varius. Maecenas sit amet hendrerit enim, eu venenatis turpis. Integer at orci elementum, aliquet elit scelerisque, elementum massa. Cras vitae lacinia leo, sit amet sagittis ante. Cras pellentesque est ut felis laoreet facilisis. Phasellus bibendum consectetur finibus. Sed id elit non eros auctor laoreet. </p>
        </Col>
        
      </Row>
      <Row className="intro-objects">
        <Col xs={12} md={12} lg={12} className="intro-features">
          <div className="feature-item">
            <div className="feature-icon">
              {/* img */}
            </div>
            <h4><strong>Measure</strong><p>how good your game is</p></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat congue varius. Maecenas sit amet hendrerit enim, eu venenatis turpis. Integer at orci elementum, aliquet elit scelerisque, elementum massa. </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              {/* img */}
            </div>
            <h4><strong>Measure</strong><p>how good your game is</p></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat congue varius. Maecenas sit amet hendrerit enim, eu venenatis turpis. Integer at orci elementum, aliquet elit scelerisque, elementum massa. </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              {/* img */}
            </div>
            <h4><strong>Measure</strong><p>how good your game is</p></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat congue varius. Maecenas sit amet hendrerit enim, eu venenatis turpis. Integer at orci elementum, aliquet elit scelerisque, elementum massa. </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              {/* img */}
            </div>
            <h4><strong>Measure</strong><p>how good your game is</p></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat congue varius. Maecenas sit amet hendrerit enim, eu venenatis turpis. Integer at orci elementum, aliquet elit scelerisque, elementum massa. </p>
          </div>

        </Col>
      </Row>
      <Row className="keyFeatSection">
        <Col xs={12} md={12} lg={12} className="intro-keys">
          {/* // add to content.js */}
          <h2>EQuest key features</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat congue varius. Maecenas sit amet hendrerit enim, eu venenatis turpis. Integer at orci elementum, aliquet elit scelerisque, elementum massa. Cras vitae lacinia leo, sit amet sagittis ante. Cras pellentesque est ut felis laoreet facilisis. Phasellus bibendum consectetur finibus. Sed id elit non eros auctor laoreet. </p>
        </Col>
        <Col xs={12} md={12} lg={12} className="tabsContainer">
          <ul>
            <li data-tab-id="1">
              {/* img */}
              <p className="tabName">This</p>
            </li>
            <li data-tab-id="2">
              {/* img */}
              <p className="tabName">This</p>
            </li>
            <li data-tab-id="3">
              {/* img */}
              <p className="tabName">This</p>
            </li>
            <li data-tab-id="4">
              {/* img */}
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
            {/* img */}
           </div>
          </div>
        </Col>
      </Row>
      <Row className="footer-row">
        <footer>
          <Col xs={12} md={12} lg={12} className="about">
            <a className="footer-logo"><img src={logo} alt="logo" height="50" /></a>
            <div className="footer-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat congue varius. Maecenas sit amet hendrerit enim, eu venenatis turpis. Integer at orci elementum, aliquet elit scelerisque, elementum massa. Cras vitae lacinia leo, sit amet sagittis ante. Cras pellentesque est ut felis laoreet facilisis. Phasellus bibendum consectetur finibus. Sed id elit non eros auctor laoreet. </p>
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
          <Col xs={12} md={12} lg={12} className="social">
          </Col>

        </footer>
      
      </Row>
      <div className="corner-ribbon bottom-right sticky orange shadow">Beta</div>
    </Grid>
  </header>);
}
export default Home;