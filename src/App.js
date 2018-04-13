import React, { Component } from 'react';
import './styles/index.css';
import './styles/App.css';
// Import fonts & icons.
import 'font-awesome/css/font-awesome.min.css';
//Import DataBase
import Data from './Data/content';
// import Lib
import Nav from './components/Nav';
import Home from './components/Home';
import Dashboard from './components/dashboard';
import Games from './components/Games';
import Services from './components/Services';
import About from './components/About';
import Research from './components/Research';
import { BrowserRouter, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return(<BrowserRouter>
				<div>
					<Route path='/' render={() => <Nav navPage={Data[0].Components[0]} />} />
					<Route exact path='/' render={() => <Home homePage={Data[0].Components[1]} />} />
					<Route exact path='/dashboard' render={() => <Dashboard homePage={Data[0].Components[1]} />} />
					<Route exact path='/research' render={() => <Research researchPage={Data[0].Components[1]} />} />
					<Route exact path='/services' render={() => <Services servicePage={Data[0].Components[1]} />} />
					<Route exact path='/games' render={() => <Games gamePage={Data[0].Components[1]} />} />
					<Route exact path='/about' render={() => <About aboutPage={Data[0].Components[1]} />} />
				</div>
			</BrowserRouter>);
	}
}
export default App;