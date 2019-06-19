import React, { Component } from 'react';
import axios from 'axios';

class UserProfile extends Component {
	constructor() {
		super();
		this.state = {
			username: '',

			// error handling for errors from the server
			error: null, 
			errorInfo: null
		};
	}
  
  	  // When this component mounts, grab the userinfo
      componentDidMount() {
        this.loadUser();
        console.log("I have loaded the user info from the server");
      }
  
      loadUser = () => {
        axios
        .get('/user')
        .then(response => {
          console.log(response);
          if (!response.data.error) {
  
            console.log('youre good');
            // update App.js state to show user as loggedin
            this.setState({
              username: response.data.username
            });
            console.log('updated user');        
          } else {
            console.log('Error: ' + response.data.error);
          }
        }).catch(error => {
          //this is where we set the error for display
          console.log('login error: ')
          console.log(error.response.data.error);
          this.setState({
            error: true,
            errorInfo: error.response.data.error
          });
         })
    }
    

  render() {

    return (
				
        <div >
          <h1> Welcome {this.state.username} </h1>

          <h4>Total Number of Coasters Ridden</h4>
          <h4>5</h4>

          <h4>Total Number of Rides on Coasters</h4>
          <h4>15</h4>
        </div>
			)
		}
	}

export default UserProfile;
