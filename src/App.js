import React, { Component } from 'react';
import HomeWrapper from './components/HomeWrapper';
import DashboardWrapper from './components/DashboardWrapper';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
	    	<Router>
		    	<Switch>
			    	<Route path="/dashboard" component={DashboardWrapper} />
			    	<Route path="/" component={HomeWrapper} />
		    	</Switch>
	    	</Router>
    );
  }
}

export default App;
