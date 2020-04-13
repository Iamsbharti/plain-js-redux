import videosReducers from "./videosReducers";
import favThingsReducers from "./favThingsReducers";
import countReducers from "./countReducers";
const redux = require("redux");
//const { combineReducers, createStore } = redux;

const rootReducers = redux.combineReducers({
  count: countReducers,
  favoriteThings: favThingsReducers,
  youTubeVideos: videosReducers
});

const store = redux.createStore(rootReducers);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
