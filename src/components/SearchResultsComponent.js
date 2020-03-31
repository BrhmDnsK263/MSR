import React from 'react';
import {connect} from 'react-redux';
import Api from "../api/Api";
import  logo from '../logo/logo.svg'

function SearchResultsComponent(props){
  let pages = []
  for (var pag = 0; pag < props.max_page; pag++) {
    pages.push(
        <button key={pag+1} data-query={props.query_for_pager} value={pag+1} onClick={props.paging}>{pag+1}</button>
    )
  }
  if(props.searchedItemsList.length===0){
    return (
      <div></div>
    );
  }
  return(
      <div className="SearchResultsComponent">
        <div className="movie-boxes-container">
          {props.searchedItemsList.map((item,index)=>{
            return(
                <div key={index} className="MovieBoxComponent" onClick={()=>props.clicked(item.imdbID)}>
                  <div className="imagebox">
                    <img aria-label="poster" alt="poster"  src={ (item.Poster==="N/A") ?  logo : item.Poster }/>
                  </div>
                  <h4 aria-label="title">
                    {item.Title}
                  </h4>
                </div>
              );
            })}
        </div>
        <div className="pager" aria-label="pages">
          {pages}
        </div>
        <div className="clear-fix"></div>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    searchedItemsList: state.searchedItemsList,
    query_for_pager:state.query_for_pager,
    max_page: state.max_page
  }
}

function mapDispatchToProps(dispatch){
  return{
    clicked: (id) => {
      Api.getItemById(dispatch,id);
    },
    paging: (evt) =>{
      let query = evt.target.getAttribute('data-query');
      Api.getQuery(dispatch, query, evt.target.value)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsComponent);
