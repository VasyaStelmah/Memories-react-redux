export const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case "AUTH":
      if (action.data) {
        localStorage.setItem("profile", JSON.stringify({ ...action.data }));
      }
      if (action.payload) {
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      }
      return { ...state, authData: action.data, loading: false, errors: null };
    case "LOGOUT":
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};
