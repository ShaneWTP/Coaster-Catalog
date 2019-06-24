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
				// this will reset the form to blank
				// username: "",
				// password: ""
			});
		})
	}

	render() {

		const inputStyle = {
			// 'background-color':'#468609'
			'margin' : '10px'
		}

		const buttonStyle ={
			'color' : 'white',
      'background-color':'#0A1E5F',
      'font-size': '18px'
		}

		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div className="SignupForm">
					<h1>Welcome</h1>

          <div className="row">
            <div className="col-sm-3">
          </div>

					<div className="col-sm-6">
						<div className="card">
						{/* <img className="card-img-top" src="images/roller-coaster-2538846_1280.jpg" alt="Card image cap"/>   */}
							<article className="card-body">
								<a href="/signin" className="float-right btn btn-outline-primary">Sign in</a>
								<h4 className="card-title mb-4 mt-1"> Create Profile </h4>
								<form>
								<div className="form-group">
										<label className="float-left">First Name</label>
											<input  className="form-control" 
												type="text"
												name="firstName" 
												// value={this.state.username}
												// onChange={this.handleChange}
												style={inputStyle}
											/>
									</div>
									<div className="form-group">
										<label className="float-left">Last Name</label>
											<input  className="form-control" 
												type="text"
												name="lastName" 
												// value={this.state.username}
												// onChange={this.handleChange}
												style={inputStyle}
											/>
									</div>
									<div className="form-group">
										<label className="float-left">Email</label>
											<input  className="form-control" 
												type="email"
												name="email" 
												// value={this.state.username}
												// onChange={this.handleChange}
												style={inputStyle}
											/>
									</div>
									<div className="form-group">
										<label className="float-left"><i className="fas fa-asterisk"></i> Username</label>
											<input  className="form-control" 
												type="text"
												name="username" 
												value={this.state.username}
												onChange={this.handleChange}
												style={inputStyle}
											/>
									</div>
									<div className="form-group">
										<label  className="float-left"><i className="fas fa-asterisk"></i> Password</label>
										<input className="form-control"  
											type="password"
											name="password"
											value={this.state.password}
											onChange={this.handleChange}
											style={inputStyle}
										/>

									</div> 
									{this.state.error ? <h2>{this.state.errorInfo}</h2> : <br/>}
									<div className="form-group">
											<button onClick={this.handleSubmit} 
											disabled={!(this.state.username && this.state.password)}
											type="submit"
											className="btn  "
												style={buttonStyle}> Sign Up  </button>
									</div>                                                         
								</form>
							</article>
						</div> 
					</div>
            
					<div className="col-sm-3">
					</div>
				</div>

			</div>
		)
	}
}

export default SignupForm