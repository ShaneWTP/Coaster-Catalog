import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from "../utils/API";

class LoginForm extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			// what page to see on successful login
			redirectTo: null,

			// error handling for errors from the server
			error: null, 
			errorInfo: null
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}		

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log('handleSubmit');

		API.signin(this.state.username,this.state.password)
		.then(response => {
			console.log(response);
			if (!response.data.error) {

				console.log('youre good');
				// update App.js state to show user as loggedin
				this.props.updateUser({
					loggedIn: true,
					username: response.data.username
				});
				console.log('updated user');

				console.log('now populate the props with a getUser');
				// populate the props for the app
				this.props.getUser();

				// redirect page
				this.setState({
						redirectTo: '/'
					});
			
			} else {
				console.log('Error: ' + response.data.error);
			}
			
		}).catch(error => {
			//this is where we set the error for display
			console.log('login error: ')
			console.log(error);
			if (error.response)
			{
				console.log(error.response.data.error);
				this.setState({
					error: true,
					errorInfo: error.response.data.error
				});
			}
		})
	}

	render() {

		const imageStyle = {
			// 'background-color':'#468609'
		}

		const inputStyle = {
			// 'background-color':'#468609'
			'margin' : '10px'
		}

		const buttonStyle ={
			'color' : 'white',
			'background-color':'#0A1E5F',
		}

		if (this.state.redirectTo) {
				return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				
				<div className="LoginForm" style={imageStyle}>
					<h1>Login to PA Coaster Catalogue</h1>
					<form>
						<label htmlFor="username">Username: </label>
						<input
							type="text"
							name="username"
							value={this.state.username}
							onChange={this.handleChange}
							style={inputStyle}
						/>
						<label htmlFor="password">Password: </label>
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
							style={inputStyle}
						/>
						<br/>
						<button onClick={this.handleSubmit} disabled={!(this.state.username && this.state.password)} style={buttonStyle}>Login</button>
					</form>
					{this.state.error ? <h2>{this.state.errorInfo}</h2> : <br/>}
				</div>
			)
		}
	}
}

export default LoginForm