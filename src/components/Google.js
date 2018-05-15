import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";

export default class Google extends Component {
	state = {
		isLoggedIn: false
	};

	responseGoogle = response => {
		localStorage.setItem(
			"googleAuth",
			JSON.stringify({
				isLoggedIn: true,
				userID: response.profileObj.googleId,
				name: response.profileObj.name,
				email: response.profileObj.email,
				picture: response.profileObj.imageUrl
			})
		);
		this.setState({
			isLoggedIn: true
		});
	};

	failedGoogle = response => {
		console.log(response);
	};

	render() {
		let googleContent;

		if (this.state.isLoggedIn) {
			googleContent = <Redirect to="/dashboard" />;
		} else {
			googleContent = (
				<GoogleLogin
					clientId="488037513348-1cb2isoepn796qun7u0qfn4549e53doo.apps.googleusercontent.com"
					buttonText={this.props.buttonText}
					className="button is-google"
					onSuccess={this.responseGoogle}
					onFailure={this.failedGoogle}
				/>
			);
		}
		return <div>{googleContent}</div>;
	}
}
