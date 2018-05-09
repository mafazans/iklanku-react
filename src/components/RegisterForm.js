import React, { Component } from "react";
import Field from './Field';
import axios from 'axios';
import { isEmail } from 'validator';

class RegisterForm extends Component {
	state = {
	  fields: {
	    email: '',
	  },
	  fieldErrors: {},
	  status: {},
	  checkbox: true
	};

	onFormSubmit = async evt => {
		const email = this.state.fields;
		evt.preventDefault();

		if(this.validate()) return;

		await axios.post('#', email)
		.then(res => {
			this.setState({ status: res.data})
			this.props.history.push('/daftar')
		})
		.catch(err => this.setState({ fieldErrors: err.response.data }));
	};

	onInputChange = ({ name, value, error }) => {
		const fields = this.state.fields;
		const fieldErrors = this.state.fieldErrors;

		fields[name] = value;
		fieldErrors[name] = error;

		this.setState({ fields, fieldErrors });
	};

	validate = () => {
		const user = this.state.fields;
		const fieldErrors = this.state.fieldErrors;
		const errMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k]);

		if(!user.email) return true;
		if(errMessages.length) return true;

		return false;
	}

	onCheck = () => {
		this.setState({
			checkbox: !this.state.checkbox
		})
	}

	render() {
		return (
			<div className="tile is-child is-6">
				<form method="POST" onSubmit={this.onFormSubmit}>
					<div className="field">
						<div className="control">
							<Field
								className="input input-custom"
								name="email"
								value={this.state.fields.email}
								placeholder="Alamat email"
								onChange={this.onInputChange}
								validate={ val =>(isEmail(val) ? false : 'Alamat email tidak valid')}
							/>
						</div>
						<small className="is-text-red">
							<i className="mdi mdi-block-helper" />
							{}
						</small>
					</div>
					<div className="field">
						<div className="control box-flex">
							<label className="checkbox">
								<input type="checkbox" onChange={this.onCheck} />
								<small>Saya setuju</small>
							</label>
							<small>
								{" "}
								<span className="checkbox-home">
									<a href="{{ route('syarat') }}" className="ml03">
										syarat dan ketentuan layanan iklanku
									</a>
								</span>
							</small>
						</div>
					</div>
					<div className="block">
						<button
						type="submit"
						disabled={(this.validate()	|| this.state.checkbox)}
						className="button is-iklanku"
						>
							<span>Daftar Gratis</span>
						</button>
					</div>
				</form>
				<div className="content ortext has-text-centered pt1h">
					<small>atau</small>
				</div>
				<div className="block">
					<form
						method="POST"
						action="{{ route('social_redirect', 'facebook') }}"
					>
						<button type="submit" className="button is-fb">
							Daftar melalui akun Facebook
						</button>
					</form>
				</div>
				<div className="block">
					<form
						method="POST"
						action="{{ route('social_redirect', 'google') }}"
					>
						<button type="submit" className="button is-google">
							Daftar melalui akun Google
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default RegisterForm;
