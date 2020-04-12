import "./styles.css";
const redux = require("redux");

const initialState = {
  count: 0,
  favoriteThing: [],
  youTubeVideos: {
    title: "",
    viewCount: 0,
    votes: {
      up: 0,
      down: 0
    }
  }
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
function addTitle(title) {
  return { type: "ADD-TITLE", payload: title };
}
function upVote() {
  return { type: "UP-VOTE" };
}
function downVote(downCount) {
  return { type: "DOWN-VOTE", payload: downCount };
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
        ...state,
        favoriteThing: state.favoriteThing.filter(
          thing => thing !== action.payload
        )
      };
    case "ADD-TITLE":
      return {
        ...state,
        youTubeVideos: {
          ...state.youTubeVideos,
          title: action.payload
        }
      };
    case "UP-VOTE":
      return {
        ...state,
        youTubeVideos: {
          ...state.youTubeVideos,
          viewCount: state.youTubeVideos.votes.up + 1,
          votes: {
            ...state.youTubeVideos.votes,
            up: state.youTubeVideos.votes.up + 1
          }
        }
      };
    case "DOWN-VOTE":
      return {
        ...state,
        youTubeVideos: {
          ...state.youTubeVideos,
          viewCount: state.youTubeVideos.votes.up + 1,
          votes: {
            ...state.youTubeVideos.votes,
            down: state.youTubeVideos.votes.up - 1
          }
        }
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
store.dispatch(addFavorite("Node"));
store.dispatch(changeCount("HALVE"));
store.dispatch(addFavorite("I love react"));
store.dispatch(removeFavorite("I love react"));
store.dispatch(removeFavorite("Node"));
store.dispatch(addTitle("Good ddeed"));
store.dispatch(addTitle("Hi there"));
store.dispatch(upVote());
store.dispatch(upVote());
store.dispatch(downVote());
