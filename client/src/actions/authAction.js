export const userLoaded = (data) => {
  return {
    type: "USER_LOADED",
    payload: data,
  };
};
