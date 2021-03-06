const initialState = {
  // token: localStorage.getItem("auth-token"),
  token: localStorage.getItem("auth-token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,

};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_LOADED":
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
      case "UPDATE_SUCCESS":
        return{
          ...state,
          user:action.payload,
        }
    case "AUTH_ERROR":
    case "LOGIN_FAILED":
    case "LOGOUT_SUCCESS":
    case "REGISTER_FAIL":
      localStorage.removeItem("auth-token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default authReducer;
