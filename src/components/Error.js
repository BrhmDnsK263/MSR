import React from 'react';
import {connect} from 'react-redux';

function Error(props){
  return(
      <div className="Error" aria-label="error">
        <p>{props.error}</p>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps)(Error);
