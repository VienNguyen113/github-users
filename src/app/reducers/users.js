import { GET_USERS, GET_PERSON } from "app/actions/actionTypes";

const initialState = {
  list: [],
  person: {},
};

export default function(state = initialState, payload) {
  switch (payload.type) {
    case GET_USERS:
      return {
        list: payload.users,
      };
    case GET_PERSON:
      return {
        person: payload.person,
      };
    default:
      return state;
  }
}
