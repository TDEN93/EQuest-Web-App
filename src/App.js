import React, {
	Component
} from 'react';
import './App.css';
//Import DataBase
import Data from './Data/content';
// import Lib
import Nav from './components/Nav';
import Home from './components/Home';
import Dashboard from './components/dashboard';
import {
	BrowserRouter,
	Route
} from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
			   <div>
           <Route path='/' render={() => <Nav navPage={Data[0].Components[0]} />} />
           <Route exact path='/' render={() => <Home homePage={Data[0].Components[1]}/>} />
		   <Route exact path='/dashboard' render={() => <Dashboard homePage={Data[0].Components[1]}/>} />
        </div>
      </BrowserRouter>
		);
	}
}

export default App;
