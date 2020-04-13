import * as types from "./actionType";

export function addTitle(title) {
  return { type: types.ADD_TITLE, payload: title };
}

export function addViewCount(viewCount) {
  return { type: types.ADD_VIEW_COUNT, payload: viewCount };
}

export function addUpVotes(upVotes) {
  return { type: types.UP_VOTE, payload: upVotes };
}

export function addDownVotes(downVotes) {
  return { type: types.DOWN_VOTE, payload: downVotes };
}
