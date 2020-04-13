import * as types from "./actionType";

export default function addUser(user) {
  return { type: types.ADD_NEW_USER, payload: user };
}
