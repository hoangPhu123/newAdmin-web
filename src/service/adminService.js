import { https } from "./configURL";

export const getUserList = () => {
  return https.get("/users");
};

export const postUser = () => {
  return https.post("/users");
};

export const deleteUser = (id) => {
  return https.delete(`users/${id}`);
};
