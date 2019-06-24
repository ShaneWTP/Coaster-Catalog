import React, { Component } from 'react'
import API from "../utils/API";
import { Redirect } from 'react-router-dom'

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
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
		API.signup(this.state.username, this.state.password) 
		.then(response => {
			console.log(response)
			if (!response.data.errmsg) {
				console.log('youre good');

				// update App.js state to show user as loggedin
				this.props.updateUser({
					loggedIn: true,
					username: response.data.username
				});

				console.log('now populate the props with a getUser');
				// populate the props for the app
				this.props.getUser();

				this.setState({
					redirectTo: '/'
				});
			} else {
				console.log('duplicate');
			}
		}).catch(error=> {
			console.log('login error: ')
			console.log(error.response.data.error);
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