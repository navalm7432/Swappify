const initialState = {
  token: localStorage.getItem("auth-token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  isModalAction: false,
  isModalOpen: false,
  isModalClose: true,
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
    case "IS_MODAL_ACTION":
      return {
        ...state,
        isModalAction: action.payload,
      };
    // case "IS_MODAL_OPEN":
    //   return {
    //     ...state,
    //     isModalOpen: true,
    //     isModalClose: false,
    //   };
    case "IS_MODAL_CLOSE":
      return {
        ...state,
        isModalOpen: false,
        isModalClose: true,
      };
    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
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
