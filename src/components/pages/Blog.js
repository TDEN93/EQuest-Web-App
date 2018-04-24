import React from 'react';
import blogImage from '../assets/images/blog-images/blogImage.jpg';
import { // BS import
	Grid,
	Row,
	Col,
    Clearfix,
    Panel,
    Tabs,
    Tab
} from 'react-bootstrap';

const Blog = (props) => {
    const page = props.blogPage;
	return(<header id="blog-section">
            <Grid fluid={true} className="blog-container">
                <Row>
                    <Col xs={12} md={12} lg={12} className="blogCol">
                        <div className="tabs">
                            <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                                <Tab eventKey={1} title="Most Recent">
                                    
                                </Tab>
                                <Tab eventKey={2} title="Popular">
                                    
                                </Tab>
                                <Tab eventKey={3} title="Rocket League">
                                    
                                </Tab>
                            </Tabs>
                        </div>
                        <div className="articleContainer">
                            <div className="card">
                                <img src={blogImage} alt="Avatar" className="card-image"></img>
                                <div className="container">
                                    <h4><b>John Doe</b></h4>
                                    <p>Architect & Engineer</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={blogImage} alt="Avatar" className="card-image"></img>
                                <div className="container">
                                    <h4><b>John Doe</b></h4>
                                    <p>Architect & Engineer</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={blogImage} alt="Avatar" className="card-image"></img>
                                <div className="container">
                                    <h4><b>John Doe</b></h4>
                                    <p>Architect & Engineer</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={blogImage} alt="Avatar" className="card-image"></img>
                                <div className="container">
                                    <h4><b>John Doe</b></h4>
                                    <p>Architect & Engineer</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={blogImage} alt="Avatar" className="card-image"></img>
                                <div className="container">
                                    <h4><b>John Doe</b></h4>
                                    <p>Architect & Engineer</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={blogImage} alt="Avatar" className="card-image"></img>
                                <div className="container">
                                    <h4><b>John Doe</b></h4>
                                    <p>Architect & Engineer</p>
                                </div>
                            </div>           
                        </div>
                    </Col>
                </Row>
            </Grid >

        </header >);
}
export default Blog;