import React from 'react';
import { // BS import
	Grid,
	Row,
	Col,
	Clearfix
}
from 'react-bootstrap';
import { Png, Svg } from './modules/IconList'; // Import icons with Figcaption.
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
      <Row className="home-title">
        <Col className="social-media-container">
          <ul className="social-media">
            {/* Append svg icons to page */}
            {svgs}
          </ul>
        </Col>
        <Col xs={12} md={12} lg={12} className="main-content">
          <h1>
            <span>{page.title}</span>{page.titleTopColored}{page.titleTopAfter}
          </h1>
          <p>{page.titleTag}<span>{page.titleTagColored}</span>{page.titleTagAfter}</p>
        </Col>
        <Col xs={12} md={12}>
          <div className="service-icons-container">
            {/* Append all png icons and figcaptions to page */}
            {pngs}
          </div>
        </Col>
        <div className="corner-ribbon bottom-right sticky orange shadow">Beta</div>
      </Row>
    </Grid>
  </header>);
}
export default Home;