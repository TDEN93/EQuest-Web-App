import React from 'react';
import rocketLeagueHeader from '../assets/images/game-headers/headerRL.jpg';
import { // BS import
	Grid,
	Row,
	Col,
	Clearfix
} from 'react-bootstrap';
import { FigureImages } from '../modules/IconList'; // Import icons with Figcaption.
const Blog = (props) => {
    const page = props.blogPage;
    const figureImages = page.figureImages.map((figureImages, i) => { // Map header images with figure
		return <FigureImages key={i} src={figureImages}/>
	});
	return(<header id="home-section">
            <Grid fluid={true}>
                <Row className="home-inner">
                    <Col className="main-content supported-game-container">
                        {figureImages}
                    </Col>
                </Row>
            </Grid >

        </header >);
}
export default Blog;