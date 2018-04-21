// import React from 'react';
// import rocketLeagueHeader from '../assets/images/game-headers/headerRL.jpg';
// import { // BS import
// 	Grid,
// 	Row,
// 	Col,
//     Clearfix,
//     Panel
// } from 'react-bootstrap';
// import { FigureImages } from '../modules/IconList'; // Import icons with Figcaption.
// const Blog = (props) => {
//     const page = props.blogPage;
//     const figureImages = page.figureImages.map((figureImages, i) => { // Map header images with figure
// 		return <FigureImages key={i} src={figureImages}/>
// 	});
// 	return(<header id="home-section">
//             <Grid fluid={false}>
//                 <Row>
//                     <Col xs={12} md={12} lg={8}>
//                         {/* Title */}
//                         <h1 className="mt-4">Post Title</h1>

//                         {/* Author */}
//                         <p className="lead">
//                             by 
//                             <a href="#"> Start Bootstrap</a>
//                         </p>

//                         <hr></hr>

//                         {/* Date/Time */}
//                         <p>Posted on January 1, 2018 at 12:00 PM</p>

//                         <hr></hr>

//                         {/* Preview Image */}
//                         <img className="img-fluid rounded" src="http://placehold.it/900x300" alt=""></img>

//                         <hr></hr>

//                         {/* Post Content */}
//                         <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>

//                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>

//                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>

//                         <blockquote className="blockquote">
//                             <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
//                             <footer className="blockquote-footer">Someone famous in
//                             <cite title="Source Title">Source Title</cite>
//                             </footer>
//                         </blockquote>

//                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>

//                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>

//                         <hr></hr>

//                         {/* Comments Form */}
//                         <Panel>
//                             <Panel.Heading>Leave A Comment</Panel.Heading>
//                             <Panel.Body>
//                                 <form>
//                                     <div className="form-group">
//                                     <textarea className="form-control" rows="3"></textarea>
//                                     </div>
//                                     <button type="submit" className="btn btn-primary">Submit</button>
//                                 </form>
//                             </Panel.Body>
//                         </Panel>

//                         {/* Single Comment */}
//                         <div className="media mb-4">
//                             <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""></img>
//                             <div className="media-body">
//                                 <h5 className="mt-0">Commenter Name</h5>
//                                 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
//                             </div>
//                         </div>

//                         {/* Comment with nested comments  */}
//                         <div className="media mb-4">
//                             <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""></img>
//                             <div className="media-body">
//                                 <h5 className="mt-0">Commenter Name</h5>
//                                 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
//                             </div>
//                         </div>
//                         <div className="media mt-4">
//                             <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""></img>
//                             <div className="media-body">
//                                 <h5 className="mt-0">Commenter Name</h5>
//                                 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
//                             </div>
//                         </div>

//                         <div className="media mt-4">
//                             <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""></img>
//                             <div className="media-body">
//                                 <h5 className="mt-0">Commenter Name</h5>
//                                 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
//                             </div>
//                         </div>

//                     </Col>
//                     {/* Sidebar Widgets Column */}
//                     <Col xs={12} md={12} lg={4}>
//                         {/* <!-- Search Widget --> */}
//                         <Panel>
//                             <Panel.Heading>Search</Panel.Heading>
//                             <Panel.Body>
//                                 <div class="input-group">
//                                     <input type="text" class="form-control" placeholder="Search for..."></input>
//                                     <span class="input-group-btn">
//                                         <button class="btn btn-secondary" type="button">Go!</button>
//                                     </span>
//                                 </div>
//                             </Panel.Body>
//                         </Panel>
                        
//                         {/* <!-- Categories Widget --> */}
//                         <Panel>
//                             <Panel.Heading>Categories</Panel.Heading>
//                             <Panel.Body>
//                                 <Row>
//                                     <Col xs={12} md={12} lg={6}>
//                                         <ul class="list-unstyled mb-0">
//                                             <li>
//                                                 <a href="#">Web Design</a>
//                                             </li>
//                                             <li>
//                                                 <a href="#">HTML</a>
//                                             </li>
//                                             <li>
//                                                 <a href="#">Freebies</a>
//                                             </li>
//                                         </ul>
//                                     </Col>
//                                     <Col xs={12} md={12} lg={6}>
//                                         <ul class="list-unstyled mb-0">
//                                             <li>
//                                             <a href="#">JavaScript</a>
//                                             </li>
//                                             <li>
//                                             <a href="#">CSS</a>
//                                             </li>
//                                             <li>
//                                             <a href="#">Tutorials</a>
//                                             </li>
//                                         </ul>
//                                     </Col>
//                                 </Row>
//                             </Panel.Body>
//                         </Panel>
//                         <Panel>
//                             <Panel.Heading>Side Widget</Panel.Heading>
//                             <Panel.Body>
//                                 <p className="side-text">
//                                     You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
//                                 </p>
//                             </Panel.Body>
//                         </Panel>
//                     </Col>
//                 </Row>
//             </Grid >

//         </header >);
// }
// export default Blog;


// Container
// #home-section {
//     margin-top: 100px;
// }
// // Spacing
// .mt-4, .my-4 {
//     margin-top: 1.5rem !important;
// }
// .mb-4, .my-4 {
//     margin-bottom: 1.5rem !important;
// }
// .mr-3, .mx-3 {
//     margin-right: 1rem !important;
// }
// .mt-0 {
//     margin-top: 0 !important;
// }
// .d-flex {
//     display: -webkit-box !important;
//     display: -ms-flexbox !important;
//     display: flex !important;
// }
// .rounded-circle {
//     border-radius: 50% !important;
// }
// img {
//     vertical-align: middle;
//     border-style: none;
// }
// .media {
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-box-align: start;
//     -ms-flex-align: start;
//     align-items: flex-start;
// }
// .media-body {
//     -webkit-box-flex: 1;
//     -ms-flex: 1;
//     flex: 1;
// }
// .lead {
//     font-size: 1.25rem;
//     font-weight: 300;
// }
// hr {
//     margin: 1rem, 0, 1rem, 0;
//     border: 0;
//     border-top: 1px solid rgba($color-prim,.2); // Works but hard to see.
// }
// .side-text {
//     color: black;
// }

// .panel-heading {
//     padding: .75rem 1.25rem;
//     margin-bottom: 0;
//     background-color: $color-prim !important;
//     border-bottom: 1px solid $color-prim !important;
// }
// .panel {
//     background-color: transparent !important;
// }
// .panel-default {
//     border-color: $color-prim;
// }