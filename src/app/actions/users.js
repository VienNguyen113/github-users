import { request } from "app/utils/request";
import { GET_USERS, GET_PERSON } from "./actionTypes";

export function setUsers(users) {
  return { users, type: GET_USERS };
}

export function getUsers() {
  return dispatch => {
    return request().get("/users")
    .then(response => {
      dispatch(setUsers(response.data));
    });
  };
}

export function setPerson(person) {
  return { person, type: GET_PERSON };
}

export function getPerson(username) {
  return dispatch => {
    return request().get(`/users/${username}`)
    .then(response => {
      dispatch(setPerson(response.data));
    });
  };
}

export default {
  getUsers,
  getPerson,
};
