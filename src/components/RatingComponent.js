import React, { Component } from 'react';

class RatingComponent extends Component {
  render(){
      const rating_list = this.props.ratings.map(
        (rating, index) => {
          return(
            <p> <b>{rating.Source}:</b> {rating.Value}</p>
            );
      }
      )
    return (
      <div className="RatingComponent">
        <h4 className="title-data">Ratings	</h4>
        {rating_list}
      </div>
    );
  }
}

export default RatingComponent;
