export const additem = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

export const dellitem = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
