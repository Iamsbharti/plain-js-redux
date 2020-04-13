import videosReducers from "./videosReducers";
import favThingsReducers from "./favThingsReducers";
import countReducers from "./countReducers";
import userReducers from "./userReducers";
const redux = require("redux");
//const { combineReducers, createStore } = redux;

const rootReducers = redux.combineReducers({
  count: countReducers,
  favoriteThings: favThingsReducers,
  youTubeVideos: videosReducers,
  user: userReducers
});

const store = redux.createStore(rootReducers);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
