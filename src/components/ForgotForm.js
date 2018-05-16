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

	onSubmit = async (evt) => {
		evt.preventDefault();
		//make await aixos call
		// await axios.post('#', user)
		// .then(res => {
		// 	this.setState({ status: res.data})
			this.props.history.push('/signin?forgot=true')
		// })
		// .catch(err => this.setState({ fieldErrors: err.response.data }));
	}

	validate = () => {
		const user = this.state.fields;
		// const fieldErrors = this.state.fieldErrors;
		// const errMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k]);

		if(!isEmail(user.email)) return true;
		// if(errMessages.length) return true;

		return false;
	}

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
			      {this.state.fieldErrors.err &&
			      <div className="notification is-danger">
			          Reset failed
			      </div>
			      }
			        <form onSubmit={this.onSubmit} >
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
			            <button
			            disabled={this.validate()}
			            type="submit"
			            className="button is-iklanku"
			           >Request Password Baru</button>
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