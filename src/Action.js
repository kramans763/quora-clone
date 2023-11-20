const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

 export const decrement = () => {
  return { type: DECREMENT, payload: 5 };
};

export const increment = () => {
  return { type: INCREMENT, payload: 5 };
};