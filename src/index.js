import "./styles.css";
import * as types from "./redux/actions/actionType";
import countActions from "./redux/actions/countActions";
import favoriteActions from "./redux/actions/favoriteActions";
import * as videosActions from "./redux/actions/videosActions";
import store from "./redux/reducers/";

store.dispatch(countActions(types.INC_DEC, -92));
store.dispatch(countActions(types.DOUBLE, 2));
store.dispatch(favoriteActions(types.ADD_FAVORITE, "Hi"));
store.dispatch(videosActions.addTitle("Good day"));
store.dispatch(videosActions.addUpVotes());
store.dispatch(videosActions.addDownVotes());
store.dispatch(videosActions.addViewCount());
