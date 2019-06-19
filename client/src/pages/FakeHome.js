import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Home extends Component {
    constructor() {
        super()
		this.state = {
			redirectTo: null,

			error: null, 
			errorInfo: null
		};
		this.handleSubmit = this.handleSubmit.bind(this);
    }

	handleSubmit(event) {
		event.preventDefault();
        console.log('handleSubmit');
        
		axios.get('/logout').then(response => {
				console.log(response);
				if (!response.data.error) {

					console.log('youre good');
					// update App.js state to show user as loggedin
					this.props.updateUser({
						loggedIn: false,
						username: null
					});
					console.log('updated user for logout');
				this.setState({
						redirectTo: '/'
					});
			
				} else {
					console.log('Error: ' + response.data.error);
				}
			
			}).catch(error => {
				// HLS this is where the real meat of the error is
				console.log('logout error: ')
				// throw the error so it catches componentDidCatch
				// throw new Error(error.response.data.error);
				this.setState({
					error: true,
					errorInfo: error.response.data.error
				});
			 })
	}



    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>It's good to be home</p>
                <img style={imageStyle} src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" />
								<br/>
                <button onClick={this.handleSubmit} >Logout</button>
            </div>
        )

    }
}

export default Home