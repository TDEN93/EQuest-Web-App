import React, { Component } from 'react';
import './styles/index.css';
import './styles/App.css';
// Import fonts & icons.
import 'font-awesome/css/font-awesome.min.css';
//Import DataBase
import Data from './Data/content';
// import components
import Index from './components';
import { BrowserRouter, Route } from 'react-router-dom';
class App extends Component {
	render() {
		return(<BrowserRouter>
				<div>
					<Route path='/' render={() => <Index Data={Data} />} />
				</div>
			</BrowserRouter>);
	}
}
export default App;