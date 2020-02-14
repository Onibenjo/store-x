export const UserActionTypes = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  GOOGLE_SIGN_IN_START: "GOOGLE_SIGN_IN_START",
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  SIGN_IN__FAILURE: "SIGN_IN_FAILURE",
  EMAIL_SIGN_IN__START: "EMAIL_SIGN_IN_START",
  CHECK_USER_SESSION: "CHECK_USER_SESSION",
  SIGN_OUT_START: "SIGN_OUT_START",
  SIGN_OUT_SUCCESS: "SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILURE: "SIGN_OUT_FAILURE"
};
const INITIAL_STATE = {
  currentUser: null,
  loading: false,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.GOOGLE_SIGN_IN_START:
    case UserActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        loading: true
      };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        currentUser: action.payload
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
