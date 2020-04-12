import "./styles.css";
const redux = require("redux");

const initialState = {
  count: 0,
  favoriteThing: []
};

function changeCount(changeType = "INC-DEC", amount = 3) {
  return { type: changeType, payload: amount };
}
function addFavorite(favoriteThing) {
  return { type: "ADD-FAVORITE", payload: favoriteThing };
}
function removeFavorite(favThingToRemove) {
  return { type: "REMOVE-FAVORITE", payload: favThingToRemove };
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
        favoriteThing: [...state.favoriteThing, action.payload]
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
    case "REMOVE-FAVORITE":
      return {
        favoriteThing: state.favoriteThing.filter(
          thing => thing !== action.payload
        )
      };
    default:
      return state;
  }
}

//configure store
const store = redux.createStore(reducer);
store.subscribe(() => {
  //console.log(store.getState().count);
  console.log(store.getState().favoriteThing);
});
//dispatch actions
store.dispatch(changeCount("INC-DEC", 3));
store.dispatch(changeCount("DOUBLE"));
store.dispatch(addFavorite("Node"));
store.dispatch(changeCount("HALVE"));
store.dispatch(addFavorite("I love react"));
store.dispatch(removeFavorite("I love react"));
store.dispatch(removeFavorite("Node"));
