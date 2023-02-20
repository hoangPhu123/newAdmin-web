import { https } from "./configURL";

// get all users
export const getUserList = () => {
  return https.get("/users");
};

// create a user
export const postUser = (payload) => {
  return https.post("/users", payload.user.name);
};

// find a user
export const getFindUser = (id) => {
  return https.get(`/users/${id}`);
};

// update user
export const updateUser = (id) => {
  return https.patch(`/users/${id}`);
};

// delete user
export const deleteUser = (id) => {
  return https.delete(`users/${id}`);
};

export const getUserListPagination = (page) => {
  return https.get(`users?page=${page}&totalPages=10`);
};
