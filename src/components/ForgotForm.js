import React, { Component } from 'react';
import Field from './Field';
import { isEmail } from 'validator';

export default class ForgotForm extends Component{
	state = {
		fields: {
			email: ''
		},
		fieldErrors: {},
	  status: {}
	};

	onInputChange = ({ name, value, error }) => {
		const fields = this.state.fields;
		const fieldErrors = this.state.fieldErrors;

		fields[name] = value;
		fieldErrors[name] = error;

		this.setState({ fields, fieldErrors });
	};


	render(){
		return(
			<div className="hero-body line-one">
			  <div className="container">
			    <div className="content welcome-home has-text-centered">
			      <h1 className="title is-1">Lupa Password</h1>
			      <h2 className="subtitle is-4">Silahkan masukkan email anda.</h2>
			    </div>
			    <div className="columns pt1">
			      <div className="column is-4">
			      </div>
			      <div className="column">
			        <form method="POST" action="{{ route('forgot-send') }}">
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
			          <div className="block">
			            <button type="submit" className="button is-iklanku">Request Password Baru</button>
			          </div>
			        </form>
			      </div>
			      <div className="column is-4">
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}