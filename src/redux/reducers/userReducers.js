import * as types from "../actions/actionType";
import { initialState } from "../initialState";

export default function userReducers(user = initialState.user, action) {
  console.log(action.payload);
  switch (action.type) {
    case types.ADD_NEW_USER:
      return {
        ...user,
        ...action.payload
      };
    default:
      return user;
  }
}
