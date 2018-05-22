import React,{Component} from 'react';
import Nav from './layouts/Nav';
import LandingPage from './LandingPage';
import Footer from './layouts/Footer';
import LoginForm from './LoginForm';
import ForgotForm from './ForgotForm';
import RegisterSuccess from './RegisterSuccess';
import NotFound from './layouts/NotFound';
import { Route, Switch } from 'react-router-dom';

class HomeWrapper extends Component {
	render() {
		return(
			<div>
			<Nav />
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/daftar" component={RegisterSuccess} />
				<Route exact path="/signin" component={LoginForm} />
				<Route exact path="/lupa-password" component={ForgotForm} />
				<Route component={NotFound} />
			</Switch>
			<Footer />
			</div>
		)
	}
}

export default HomeWrapper;