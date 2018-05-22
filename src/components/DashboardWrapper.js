import React, { Component } from 'react';
import Dashboard from './dashboard/Dashboard';
import Campaign from './dashboard/Campaign';
import BasicWizard from './dashboard/BasicWizard';
import SideNav from './layouts/SideNav';
import IconNav from './layouts/IconNav';
import NotFound from './layouts/NotFound';
import { Route, Switch } from 'react-router-dom';

class DashboardWrapper extends Component {
	render(){
		return(
	    <div className="flexcontainer">
				<aside className="column is-2 is-hidden-mobile is-paddingless">
					<SideNav />
				  <div className="saldo-balance">
				    <span>Sisa Saldo</span>
				    <h3 id="saldo_sidebar" className="title is-4 is-text-blue is-marginless">Rp 0</h3>
				    <small id="withdraw" className="withdraw is-text-blue" style={{cursor: 'pointer'}}>Tarik Saldo</small>
				  </div>
				</aside>
				<div className="column dashboard-container">
					<IconNav />
					<Switch>
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/dashboard/campaign" component={Campaign} />
						<Route exact path="/dashboard/campaign/wizard" component={BasicWizard} />

						<Route component={NotFound} />
					</Switch>
				</div>
			</div>
		)
	}
}

export default DashboardWrapper