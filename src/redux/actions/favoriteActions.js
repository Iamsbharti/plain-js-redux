export default function favoriteActions(favActionType, things) {
  return { type: favActionType, payload: things };
}
