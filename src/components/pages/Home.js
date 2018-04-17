import React from 'react';
import { // BS import
	Grid,
	Row,
	Col,
	Clearfix
}
from 'react-bootstrap';
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
        <Col xs={12} md={12} lg={12} className="intro-content">
          <h1>
            <span>{page.title}</span>{page.titleTopColored}{page.titleTopAfter}
          </h1>
          <p><strong>{page.titleTag}</strong><span><strong>{page.titleTagColored}</strong></span><strong>{page.titleTagAfter}</strong></p>
          <button>Join Open Beta</button>
          <p className="beta_notice">We’re in open beta — <strong>sign up for free account!</strong></p>
        </Col>
        
        
      </Row>
      <Row className="secondRow">
      <Col xs={12} md={12}>
          <div className="service-icons-container">
            {/* Append all png icons and figcaptions to page */}
            {/* {pngs} */}
          </div>
        </Col>
      </Row>
      <Row className="thirdRow">
        
      </Row>
      <div className="corner-ribbon bottom-right sticky orange shadow">Beta</div>
    </Grid>
  </header>);
}
export default Home;