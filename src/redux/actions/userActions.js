import * as types from "./actionType";

export function addUser(user) {
  return { type: types.ADD_NEW_USER, payload: user };
}

export function removeUser(user) {
  return { type: types.REMOVE_USER, payload: user };
}
