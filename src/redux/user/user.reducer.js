export const UserActionTypes = {
    SET_CURRENT_USER : 'SET_CURRENT_USER'
}
const INITIAL_STATE = {
  currentUser: null,
  loading: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
          currentUser: action.payload,
          loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
