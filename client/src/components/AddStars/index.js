import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Row, Col } from "../Grid";
import API from "../../utils/API";




class AddStars extends Component {
    state= {
        rating: 0
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }

  // this method needs to be here because it's the only place where the star state is
  // adds a rate to the rollercoaster
  handleRateSubmit(event) {
    event.preventDefault();
    console.log('handleRateSubmit ' + event.target.id);


    API.addRating({coaster: event.target.id, rating: this.state.rating})
      .then(response => {
        console.log(response);
        if (!response.data.error) {
          console.log("you're good");
          // getUser will update display
          // HLS this wont work cause not being passed in
          this.props.getUser();
          // reset the state
          this.setState({rating: 0});
        } else {
          console.log('Error: ' + response.data.error);
        }
      }).catch(error => {
        console.log('addcoaster error: ' + error)
      })
  }

  render() {
        return (

          <div className="card">
          <div className="card-body" >
              <h4>Rate This Coaster</h4>
              <Row>
              <Col size="sm-12">
                <StarRatingComponent 
                  name="rate1" 
                  starCount={5}
                  value={this.state.rating}
                  onStarClick={this.onStarClick.bind(this)} 
                />
              </Col>
              </Row>
              <Row>
                  <div className="col-sm-12 align-self-center">
                      <button id={this.props.userCoaster.coaster._id} onClick={this.handleRateSubmit.bind(this)} >Submit</button>
                  </div>
              </Row>
          </div>
      </div>
    );
  }
};

export default AddStars