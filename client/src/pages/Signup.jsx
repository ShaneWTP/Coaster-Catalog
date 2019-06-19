import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			redirectTo: null,

			error: null, 
			errorInfo: null
			
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	handleSubmit(event) {
		event.preventDefault()
		axios
			.post('/signup', {
				username: this.state.username,
				password: this.state.password
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('youre good');

					// update App.js state to show user as loggedin
					this.props.updateUser({
						loggedIn: true,
						username: response.data.username
					});

					this.setState({
						redirectTo: '/'
					});
				} else {
					console.log('duplicate');
				}
			}).catch(error=> {
				// HLS this is where the real meat of the error is
				console.log('login error: ')
				console.log(error.response.data.error);
				// throw the error so it catches componentDidCatch
				// throw new Error(error.response.data.error);
				this.setState({
					error: true,
					errorInfo: error.response.data.error
				});
			 })
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div className="SignupForm">
				<h1>Signup form</h1>
				<label htmlFor="username">Username: </label>
				<input
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				<button onClick={this.handleSubmit} disabled={!(this.state.username && this.state.password)}>Sign up</button>
				{this.state.error ? <h2>{this.state.errorInfo}</h2> : <br/>}
			</div>
		)
	}
}

export default SignupForm