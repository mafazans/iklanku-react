import React, { Component } from 'react';
import HomeWrapper from './components/HomeWrapper';
import { BrowserRouter as Router} from 'react-router-dom';


class App extends Component {
  render() {
    return (
    	<Router>
	      <HomeWrapper />
    	</Router>
    );
  }
}

export default App;
