import { combineReducers } from "redux";
import * as types from "../actions/actionTypes";

const dataState = { data: [], loading: true };

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case types.RECEIVE_HELTH_NEWS:
      return Object.assign({}, state, { data: action.data, loading: false });
    default:
      return state;
  }
};

// Combine all the reducers
const rootReducer = combineReducers({
  dataReducer,
  // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});

export default rootReducer;
