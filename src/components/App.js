import React from 'react';
import '../styles/App.css';
import Nav from './Nav';
import Footer from './Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import history from '../history';
import ValueProp from './ValueProp';
import ProblemStatement from './problemStatement';

class App extends React.Component {

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
              <Route path="/team" exact component={Nav} />
              <Route path="/" exact component={Nav} />
              <Route path="/events" exact component={Nav} />
              <Route path="/value-prop" exact component={ValueProp} />
              <Route path="/contact" exact component={Nav} />
              <Route path="/problem-statement" exact component={ProblemStatement} />
            </Switch>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;