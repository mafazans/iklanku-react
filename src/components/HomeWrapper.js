import React,{Component} from 'react';
import Nav from './Nav';
import LandingPage from './LandingPage';
import Footer from './Footer';
import LoginForm from './LoginForm';
import RegisterSuccess from './RegisterSuccess';
import NotFound from './NotFound';
import { Route, Switch } from 'react-router-dom';

class HomeWrapper extends Component {
	render() {
		return(
			<div>
			<Nav />
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/signin" component={LoginForm} />
				<Route exact path="/daftar" component={RegisterSuccess} />

				<Route component={NotFound} />
			</Switch>
			<Footer />
			</div>
		)
	}
}

export default HomeWrapper;