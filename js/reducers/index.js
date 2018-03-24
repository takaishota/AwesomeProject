import { combineReducers } from "redux";

import { DATA_AVAILABLE } from "../actions/"; // Import the actions types constant we defined in our actions

const dataState = { data: [], loading: true };

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
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
