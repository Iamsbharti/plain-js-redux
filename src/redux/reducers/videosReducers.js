import * as types from "../actions/actionType";
import { initialState } from "../initialState";

export default function videosReducers(
  youTubeVideos = initialState.youTubeVideos,
  action
) {
  switch (action.type) {
    case types.ADD_TITLE:
      return {
        ...youTubeVideos,
        title: action.payload
      };
    case types.ADD_VIEW_COUNT:
      return {
        ...youTubeVideos,
        viewCount: youTubeVideos.viewCount + 1
      };
    case types.UP_VOTE:
      return {
        ...youTubeVideos,
        votes: {
          ...youTubeVideos.votes,
          up: youTubeVideos.votes.up + 1
        }
      };
    case types.DOWN_VOTE:
      return {
        ...youTubeVideos,
        votes: {
          ...youTubeVideos.votes,
          down: youTubeVideos.votes.down + 1
        }
      };
    default:
      return youTubeVideos;
  }
}
