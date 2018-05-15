import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { Redirect } from 'react-router-dom';

export default class Facebook extends Component {
	state = {
		isLoggedIn: false,
	};

	responseFacebook = response => {
		localStorage.setItem('fbAuth', JSON.stringify({
			userID: response.userID,
			name: response.name,
			email: response.email,
			picture: response.picture.data.url
		}))
		this.setState({
			isLoggedIn: true
		})
	};

	render() {
		let fbContent;

		if (this.state.isLoggedIn) {
			fbContent = (
				<Redirect to='/dashboard' />
			);
		} else {
			fbContent = (
				<FacebookLogin
					appId="177027366462545"
					fields="name,email,picture"
					cssClass="button is-fb"
					callback={this.responseFacebook}
					textButton={this.props.buttonText}
				/>
			);
		}
		return <div>{fbContent}</div>;
	}
}
