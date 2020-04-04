import initialState from "../store/initialState";
import * as actionTypes from "../actions/actionTypes";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        showLogin: true
      };

    case actionTypes.CLOSE_LOGIN:
      return {
        ...state,
        showLogin: false,
        message: "",
        showArticleForm: false
      };

    case actionTypes.GREETING:
      return {
        ...state,
        message: action.payload
      };

    case actionTypes.AUTHENTICATE:
      return {
        ...state,
        ...action.payload
      };

    case actionTypes.CREATE_ARTICLE:
      return {
        ...state,
        showArticleForm: true
      };

    default:
      return state;
  }
};

export default rootReducer;
