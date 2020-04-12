import "./styles.css";
const redux = require("redux");

const initialState = {
  count: 0,
  favoriteNumber: []
};

function changeCount(changeType = "INC-DEC", amount = 3) {
  return { type: changeType, payload: amount };
}
function addFavorite(favoriteNumber) {
  return { type: "ADD-FAVORITE", payload: favoriteNumber };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INC-DEC":
      return {
        ...state,
        count: state.count + action.payload
      };
    case "ADD-FAVORITE":
      return {
        ...state,
        favoriteNumber: [...state.favoriteNumber, action.payload]
      };
    case "DOUBLE":
      return {
        ...state,
        count: state.count * 2
      };
    case "HALVE":
      return {
        ...state,
        count: Math.random(state.count / 2)
      };
    default:
      return state;
  }
}

//configure store
const store = redux.createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});
//dispatch actions
store.dispatch(changeCount("INC-DEC", 3));
store.dispatch(changeCount("DOUBLE"));
store.dispatch(addFavorite(4));
