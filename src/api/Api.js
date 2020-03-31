const apikey = process.env.REACT_APP_API_KEY;
function getItems(dispatch,text_search,type_movie,type_series,type_episode,filter_year){
  let text = text_search
  let type = ""
  if(type_movie!==""){
    type = "movie";
  }
  if(type_series!==""){
    type = "series";
  }
  if(type_episode!==""){
    type = "episode";
  }
  let year= filter_year;
  let request = `https://www.omdbapi.com/?apikey=${apikey}&s=${text}&type=${type}&y=${year}&page=1`
  let query_page = `https://www.omdbapi.com/?apikey=${apikey}&s=${text}&type=${type}&y=${year}&page=`
  
  requestFetch(dispatch,request,query_page);
}

function getItemById(dispatch,id_item){
  let id = id_item;
  let request = `https://www.omdbapi.com/?i=${id}&apikey=${apikey}&plot=full`
  fetch(request)
    .then(function(response){
      return response.json();
    })
    .then(function(myjson){
      let data = myjson;
      dispatch({type:"SET_ITEM_ONLY", item_only: data, error: ""});
    })
    .catch(function(error_fetch){
      dispatch({type:"SET_ITEM_ONLY", item_only: [], error: error_fetch.toString()});
    })
}

function getQuery(dispatch,query,pag){
  let request = query + pag;
  let query_page = query;
  requestFetch(dispatch,request,query_page);
}

function requestFetch(dispatch,request, query_page){
  fetch(request)
  .then(function(response){
    return response.json();
  })
  .then(function(myjson){
    if(myjson.Search){
      let data = myjson.Search;
      let totalResults = myjson.totalResults;
      let pages = parseInt(totalResults/10)+1;
      dispatch({type:"SET_ITEMS", items: data, error: "", query:query_page,number_page:pages});
    }
    else{
      dispatch({type:"SET_ITEMS", items: [], error: myjson.Error,query:"",number_page:"0"});
    }
  })
  .catch(function(error_fetch){
    dispatch({type:"SET_ITEMS", items: [], error: error_fetch.toString(),query:"",number_page:"0"});
  })
}

export default{
  getItems,
  getItemById,
  getQuery
}