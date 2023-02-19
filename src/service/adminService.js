import { https } from "./configURL";

// get all users
export const getUserList = () => {
  return https.get("/users");
};

// create a user
export const postUser = () => {
  return https.post("/users");
};

// find a user
export const getFindUser = () => {
  return https.get(`/users/${id}`);
};

// update user
export const updateUser = () => {
  return https.patch(`/users/${id}`);
};

// delete user
export const deleteUser = (id) => {
  return https.delete(`users/${id}`);
};
