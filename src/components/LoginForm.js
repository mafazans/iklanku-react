import React, { Component } from 'react';
import Field from './Field';
import axios from 'axios';
import { isEmail } from 'validator';
import Facebook from './Facebook';
import Google from './Google';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
	state = {
		fields: {
			email: '',
			password: ''
		},
		fieldErrors: {},
	  status: {},
	  checkbox: false
	};

	onFormSubmit = async evt => {
		const user = this.state.fields;
		evt.preventDefault();

		if(this.validate()) return;

		await axios.post('#', user)
		.then(res => {
			this.setState({ status: res.data})
			this.props.history.push('/dashboard')
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
		if(!user.password) return true;
		if(errMessages.length) return true;

		return false;
	}

	onCheck = () => {
		this.setState({
			checkbox: !this.state.checkbox
		})
	}

	render() {
		const params = new URLSearchParams(this.props.location.search);
		return(
			<div className="hero-body line-one">
			  <div className="container">
			    <div className="content welcome-home has-text-centered">
			      <h1 className="title is-1">Masuk Dashboard Akun</h1>
			      <h2 className="subtitle is-4">Masukkan email dan password atau gunakan <br />akun media sosial untuk mengakses dashboard Anda</h2>
			    </div>
			    <div className="columns pt1">
			      <div className="column is-4">
			      </div>
			      <div className="column">
			      {params.get('forgot') &&
			      <div className="notification is-info">
			          Silahkan cek email Anda untuk mendapatkan password baru.
			      </div>
			      }
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
			          </div>
			          <div className="field">
			            <div className="control">
			            	<Field
			            		className="input input-custom"
			            		name="password"
			            		value={this.state.fields.password}
			            		placeholder="Password"
			            		onChange={this.onInputChange}
			            		type="password"
			            		validate={ val =>(val ? false : 'Masukkan password anda')}
			            	/>
			            </div>
			          </div>
			          <div className="block">
			            <div className="level">
			              <div className="level-left">
			                <div className="level-item">
			                  <div className="field">
			                    <label className="checkbox">
			                      <input type="checkbox" onChange={this.onCheck} />
			                      <small>Ingat Saya</small>
			                    </label>
			                  </div>
			                </div>
			              </div>
			              <div className="level-right">
			                <small className="forgot-pass"><Link to="/lupa-password">Lupa Password</Link></small>
			              </div>
			            </div>
			          </div>
			          <div className="block">
			            <button
			            type="submit"
			            disabled={this.validate()}
			            className="button is-iklanku">Masuk</button>
			          </div>
			        </form>
			        <div className="content ortext has-text-centered" style={{paddingTop: '1.5rem'}}>
			          <small>atau</small>
			        </div>
			        <div className="block">
			        	<Facebook buttonText="Masuk melalui akun Facebook"/>
			        </div>
			        <div className="block">
			          <Google buttonText="Masuk melalui akun Google"/>
			        </div>
			      </div>
			      <div className="column is-4">
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}

export default LoginForm;