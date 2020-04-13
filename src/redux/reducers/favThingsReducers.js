import * as types from "../actions/actionType";
import { initialState } from "../initialState";

export default function favThingsReducres(
  favoriteThings = initialState.favoriteThings,
  action
) {
  switch (action.type) {
    case types.ADD_FAVORITE:
      return [...favoriteThings, action.payload];
    case types.REMOVE_FAVORITE:
      return favoriteThings.filter(thing => thing !== action.payload);
    default:
      return favoriteThings;
  }
}
