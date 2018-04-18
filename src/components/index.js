import React from 'react';
// import site navigation.
import Nav from './Nav';
// import pages components
import { Home, Blog, Services, About, Research, Dashboard, NotFound } from './pages';
import { Route, Switch } from 'react-router';
const index = (props) => {
	return(<div>
		<Route path='/' render={() => <Nav navPage={props.Data[0].Components[0]} />} />
		<Switch>
					<Route exact path='/' render={() => <Home homePage={props.Data[0].Components[1]} />} />
					<Route exact path='/dashboard' render={() => <Dashboard homePage={props.Data[0].Components[1]} />} />
					<Route exact path='/research' render={() => <Research researchPage={props.Data[0].Components[1]} />} />
					<Route exact path='/services' render={() => <Services servicePage={props.Data[0].Components[1]} />} />
					<Route exact path='/blog' render={() => <Blog blogPage={props.Data[0].Components[1]} />} />
					<Route exact path='/about' render={() => <About aboutPage={props.Data[0].Components[1]} />} />
						{/* 404Error page */}
						<Route component={NotFound} />
				</Switch>
		</div>);
}
export default index;