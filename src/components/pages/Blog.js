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
                        <div className="blog-title">
                            <h1>Latest News & Research</h1>
                            <p>Stay up to date with the latest in esports news and research.</p>
                        </div>
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
                                <div className="container">
                                    <img src={blogImage} alt="Avatar" className="card-image"></img>
                                    <div className="card-content">
                                        <p className="card-category">Category: <span><a href="#">Rocket League</a></span></p>
                                        <h4 className="card-title"><b>Rocket League Finally Fixes Servers</b></h4>
                                        <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed velit dignissim, placerat augue at, sagittis eros. Mauris eleifend lacinia dapibus.</p>
                                        <div className="card-info">
                                            by John Smith - April 24, 2018 - 999 comments
                                        </div>
                                    </div> 
                                </div>
                            </div>

                            <div className="card">
                                <div className="container">
                                    <img src={blogImage} alt="Avatar" className="card-image"></img>
                                    <div className="card-content">
                                        <p className="card-category">Category: <span><a href="#">Rocket League</a></span></p>
                                        <h4 className="card-title"><b>Rocket League Finally Fixes Servers</b></h4>
                                        <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed velit dignissim, placerat augue at, sagittis eros. Mauris eleifend lacinia dapibus.</p>
                                        <div className="card-info">
                                            by John Smith - April 24, 2018 - 999 comments
                                        </div>
                                    </div> 
                                </div>
                            </div>

                            <div className="card">
                                <div className="container">
                                    <img src={blogImage} alt="Avatar" className="card-image"></img>
                                    <div className="card-content">
                                        <p className="card-category">Category: <span><a href="#">Rocket League</a></span></p>
                                        <h4 className="card-title"><b>Rocket League Finally Fixes Servers</b></h4>
                                        <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed velit dignissim, placerat augue at, sagittis eros. Mauris eleifend lacinia dapibus.</p>
                                        <div className="card-info">
                                            by John Smith - April 24, 2018 - 999 comments
                                        </div>
                                    </div> 
                                </div>
                            </div>

                            
                              
                        </div>
                    </Col>
                </Row>
            </Grid >

        </header >);
}
export default Blog;