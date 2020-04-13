import * as types from "./actionType";
export default function countActions(changeType = types.INC_DEC, amount = 2) {
  return { type: changeType, payload: amount };
}
