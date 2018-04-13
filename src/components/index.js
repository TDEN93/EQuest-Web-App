import React from 'react';
// import site navigation.
import Nav from './Nav';
// import pages components
import { Home, Games, Services, About, Research, Dashboard } from './pages';
import { Route } from 'react-router-dom';
const index = (props) => {
	return(<div>
					<Route path='/' render={() => <Nav navPage={props.Data[0].Components[0]} />} />
					<Route exact path='/' render={() => <Home homePage={props.Data[0].Components[1]} />} />
					<Route exact path='/dashboard' render={() => <Dashboard homePage={props.Data[0].Components[1]} />} />
					<Route exact path='/research' render={() => <Research researchPage={props.Data[0].Components[1]} />} />
					<Route exact path='/services' render={() => <Services servicePage={props.Data[0].Components[1]} />} />
					<Route exact path='/games' render={() => <Games gamePage={props.Data[0].Components[1]} />} />
					<Route exact path='/about' render={() => <About aboutPage={props.Data[0].Components[1]} />} />
				</div>);
}
export default index;