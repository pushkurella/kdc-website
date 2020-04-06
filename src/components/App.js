import React from 'react';
import '../styles/App.css';
import Nav from './Nav';
import Alumni from './Alumni';
import Footer from './Footer';
import Quotes from './Quotes';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import history from '../history';
import ValueProp from './ValueProp';
import ProblemStatement from './problemStatement';
import EventsPage from './Events/Events';
import Contact from './Contact';
import Home from './Home';
import Teams from './Teams';


class App extends React.Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="app">
				<Nav />
				<div className="app-body">
					<BrowserRouter history={history}>
						<Switch>
							<Route path="/about" exact component={Nav} />
							<Route path="/projects" exact component={Nav} />
							<Route path="/teams" exact component={Teams} />
							<Route path="/alumni" exact component={Alumni} />
							<Route path="/" exact component={Home} />
							<Route path="/value-prop" exact component={ValueProp} />
							<Route path="/problem-statement" exact component={ProblemStatement}/>
							<Route path="/events" exact component={EventsPage} />
							<Route path="/contact" exact component={Contact} />
							<Route path="/leaveyourmark" exact component={Quotes} />
						</Switch>
					</BrowserRouter>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
