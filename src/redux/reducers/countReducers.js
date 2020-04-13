import * as types from "../actions/actionType";
import { initialState } from "../initialState";

export default function countReducers(count = initialState.count, action) {
  switch (action.type) {
    case types.INC_DEC:
      return count + action.payload;
    case types.DOUBLE:
      return count * 2;
    case types.HALVE:
      return Math.random(count / 2);
    default:
      return count;
  }
}
