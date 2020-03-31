import React from 'react';
import {connect} from 'react-redux';
import RatingComponent from './RatingComponent';

function MovieComponent(props){
  if(props.itemOnly.imdbID){
    return (
      <div className="MovieComponent">
        <article>
          <header>
            <h2>{props.itemOnly.Title}</h2>
          </header>
          <div>
            <section className="poster-big">
              <img alt="poster"  src={props.itemOnly.Poster} />
            </section>

            <section className="datamovie">
              <div className="plot">
                <h4 className="title-data">Plot </h4>
                <p>
                  {props.itemOnly.Plot}
                </p>
              </div>
              <div className="info">
                <h4 className="title-data">Info </h4>
                <p><b>Rated:</b> {props.itemOnly.Rated}</p>
                <p><b>Release:</b> {props.itemOnly.Released}</p>
                <p><b>Runtime:</b> {props.itemOnly.Runtime}</p>
                <p><b>Genre:</b> {props.itemOnly.Genre}</p>
                <p><b>Director:</b> {props.itemOnly.Director}</p>
                <p><b>Writer:</b> {props.itemOnly.Writer}</p>
                <p><b>Actors:</b> {props.itemOnly.Actors}</p>
                <p><b>Language:</b> {props.itemOnly.Language}</p>
                <p><b>Country:</b> {props.itemOnly.Country}</p>
                <p><b>Production:</b> {props.itemOnly.Production}</p>
                <p><b>Website:</b> <a href={props.itemOnly.Website}>{props.itemOnly.Website}</a></p>
              </div>
              <RatingComponent ratings={props.item_rating}/>
            </section>
          </div>

          <div className="clear-fix"></div>
        </article>
      </div>
    );
  }
  else{
    return "";
  }
}


const mapStateToProps = (state) => {
  return {
    itemOnly: state.itemOnly,
    item_rating: state.item_rating
  }
}

export default connect(mapStateToProps)(MovieComponent);
