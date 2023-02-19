import { https } from "./configURL";

export let postLogin = (data) => {
  return https.post("/auth/login", data);
};
