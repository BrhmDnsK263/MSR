import {createStore} from 'redux';

const initialState = {
  inputTextSearch: "",
  checkTypeMovie: "",
  checkTypeSeries: "",
  checkTypeEpisode: "",
  inputYearFilter: "",

  searchedItemsList: [],
  itemOnly : [],
  item_rating:[],
  error:"",

  query_for_pager:"",
  max_page: "0"
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "CHANGE_INPUT_TEXT_SEARCH":
      return Object.assign({}, state, {inputTextSearch: action.text});
    case "CHANGE_FILTER_YEAR":
      return Object.assign({}, state, {inputYearFilter: action.text});
    case "CHANGE_INPUT_SERIE":
      return Object.assign({}, state, {checkTypeSeries: action.text,checkTypeMovie:"",checkTypeEpisode:""});
    case "CHANGE_INPUT_MOVIE":
      return Object.assign({}, state, {checkTypeMovie: action.text,checkTypeSeries:"",checkTypeEpisode:""});
    case "CHANGE_INPUT_EPISODE":
      return Object.assign({}, state, {checkTypeEpisode: action.text,checkTypeMovie:"",checkTypeSeries:""});
    case "SET_ITEMS":
      return Object.assign({}, state, {searchedItemsList:action.items, error:action.error,itemOnly:[],item_rating:[], query_for_pager:action.query, max_page:action.number_page})
    case "SET_ITEM_ONLY":
      let ranting = action.item_only.Ratings;
      return Object.assign({}, state, {itemOnly:action.item_only, error:action.error,searchedItemsList:[], item_rating:ranting,max_page:"0"})
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
