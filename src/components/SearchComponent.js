import React from 'react';
import {connect} from 'react-redux';
import Api from "../api/Api";

function SearchComponent(props){
  return (
    <div className="SearchComponent">
      <form onSubmit={(evt)=>props.submit(evt,props.inputTextSearch,props.checkTypeMovie,props.checkTypeSeries,props.checkTypeEpisode,props.inputYearFilter)}>
        <input aria-label="text for the search" className="text-search" type="text" name="search_text" placeholder="TEXT TO SEARCH" value={props.inputTextSearch} onChange={props.inputTextSearchChange} minLength="4" required/>

        <div className="radio-container" aria-label="type of search" >
          <input className="filter" type="radio" name="type" value="movie" id="type_movie" onChange={props.inputMovieChange} />
          <label className="filter" htmlFor="type_movie">Movies</label>
          <input className="filter" type="radio" name="type" value="series" id="type_series"  onChange={props.inputSerieChange}/>
          <label className="filter" htmlFor="type_series">Series</label>
          <input className="filter" type="radio" name="type" value="episode" id="type_episode" onChange={props.inputEpisodeChange}/>
          <label className="filter" htmlFor="type_episode">Episodes</label>
        </div>

        <input aria-label="filter by year"  className="filter-year" type="number" name="filter_year" placeholder="YEAR" onChange={props.filterYearChange} value={props.inputYearFilter}/>

        <button type="submit">SEARCH!</button>
      </form>
    </div>
  );
}

function mapStateToProps(state){
  return{
    inputTextSearch: state.inputTextSearch,
    checkTypeMovie: state.checkTypeMovie,
    checkTypeSeries: state.checkTypeSeries,
    checkTypeEpisode: state.checkTypeEpisode,
    inputYearFilter: state.inputYearFilter
  }
}

function mapDispatchToProps(dispatch){
  return{
    filterYearChange: (evt) => {
      const action = { type: "CHANGE_FILTER_YEAR", text: evt.target.value }
      dispatch(action);
    },
    inputTextSearchChange: (evt) => {
      const action = { type: "CHANGE_INPUT_TEXT_SEARCH", text: evt.target.value }
      dispatch(action);
    },
    inputSerieChange: (evt) => {
      let check = "";
      if(evt.target.checked){
        check="checked";
      }
      else{
        check = "";
      }
      const action = { type: "CHANGE_INPUT_SERIE", text: check}
      dispatch(action);
    },
    inputMovieChange: (evt) => {
      let check = "";
      if(evt.target.checked){
        check="checked";
      }
      else{
        check = "";
      }
      const action = { type: "CHANGE_INPUT_MOVIE", text: check}
      dispatch(action);
    },
    inputEpisodeChange: (evt) => {
      let check = "";
      if(evt.target.checked){
        check="checked";
      }
      else{
        check = "";
      }
      const action = { type: "CHANGE_INPUT_EPISODE", text: check}
      dispatch(action);
    },
    submit: (evt,text_search,type_movie,type_series,type_episode,filter_year) =>{
      evt.preventDefault();
      Api.getItems(dispatch,text_search,type_movie,type_series,type_episode,filter_year)
    }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(SearchComponent);
