import "./styles.css";
import * as types from "./redux/actions/actionType";
import countActions from "./redux/actions/countActions";
import favoriteActions from "./redux/actions/favoriteActions";
import * as videosActions from "./redux/actions/videosActions";
import * as userActions from "./redux/actions/userActions";
import store from "./redux/reducers/";

store.dispatch(countActions(types.INC_DEC, -92));
store.dispatch(countActions(types.DOUBLE, 2));
store.dispatch(favoriteActions(types.ADD_FAVORITE, "Hi"));
store.dispatch(videosActions.addTitle("Good day"));
store.dispatch(videosActions.addUpVotes());
store.dispatch(videosActions.addDownVotes());
store.dispatch(videosActions.addViewCount());
store.dispatch(favoriteActions(types.REMOVE_FAVORITE, "Hi"));
store.dispatch(favoriteActions(types.ADD_FAVORITE, "GHGhg"));
const user = {
  firstName: "Saurabh",
  lastName: "Bharti",
  id: "32462376",
  email: "dhgfh@agd.com"
};
store.dispatch(userActions.addUser(user));
const user1 = {
  firstName: "sdgdf",
  lastName: "dfgd",
  id: "dfgg",
  email: "dhgdffh@agd.com"
};
store.dispatch(userActions.addUser(user1));
store.dispatch(userActions.removeUser("dfgg"));
store.dispatch(userActions.addUser(user));
