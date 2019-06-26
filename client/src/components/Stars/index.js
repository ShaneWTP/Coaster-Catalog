import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';


class Stars extends Component {
    state= {
        rating: 0
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }
    render() {
        return (
            <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={this.state.rating}
          onStarClick={this.onStarClick.bind(this)} 
        />
    );
}
};

export default Stars