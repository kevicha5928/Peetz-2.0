import { CHANGE_ACTIVE_CARD } from "../types";

const changeActiveCard = (cardName) => ({
  type: CHANGE_ACTIVE_CARD,
  payload: cardName,
});

export { changeActiveCard };
