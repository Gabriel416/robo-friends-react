import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_FAIL,
  REQUEST_ROBOTS_SUCCESS
} from "./constants";

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = () => dispatch => {
  console.log("fired");
  dispatch({
    type: REQUEST_ROBOTS_PENDING
  });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      console.log(data, "Data");
      dispatch({
        type: REQUEST_ROBOTS_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: REQUEST_ROBOTS_FAIL,
        payload: err
      });
    });
};
