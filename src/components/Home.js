import React from 'react';
// import { Replay, Stats, Tactical } from './assets/images/icons-home';  Import png icons.
// Import components
// import Svg from './Svgs';
// import Png from './Pngs';
import { // BS import
  Grid,
  Row,
  Col,
  Clearfix
} from 'react-bootstrap';
// import 'font-awesome/css/font-awesome.min.css';
import replayIcon from './assets/images/icons-home/replay.png';
import statsIcon from './assets/images/icons-home/stats.png';
import tacticalIcon from './assets/images/icons-home/tactical.png';
const Home = (props) => {
  const page = props.homePage;
  return (<header id="home-section">
    <Grid fluid={true}>
      <Row className="home-title">
        <Col className="social-media-container">
          <ul className="social-media">
            <li>
              <a href="/">
                <i className="fa fa-twitter fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-facebook-square fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-google-plus fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-instagram fa-2x"></i>
              </a>
            </li>
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
            <a href="/">
              <figure className="service-item">
                <img src={replayIcon} alt="replay-icon" height="80"/>
                <figcaption className="caption">{page.replayService}</figcaption>
              </figure>
            </a>
            <a href="/">
              <figure className="service-item">
                <img src={statsIcon} alt="replay-icon" height="80"/>
                <figcaption className="caption">{page.overallService}</figcaption>
              </figure>
            </a>
            <a href="/">
              <figure className="service-item">
                <img src={tacticalIcon} alt="replay-icon" height="80"/>
                <figcaption className="caption">{page.tacticalService}</figcaption>
              </figure>
            </a>
          </div>
        </Col>
        <div className="corner-ribbon bottom-right sticky orange shadow">Beta</div>
      </Row>
    </Grid>
  </header>);
}
export default Home;