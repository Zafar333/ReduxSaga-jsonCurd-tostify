import axios from "axios";
export const loadUsersApi = async () =>
  await axios.get("http://localhost:5000/users");

export const createUsersApi = async (user) =>
  await axios.post("http://localhost:5000/users", user);

export const deleteUsersApi = async (userid) =>
  await axios.delete(`http://localhost:5000/users/${userid}`);

export const updateUsersApi = async (userid, userinfo) =>
  await axios.put(`http://localhost:5000/users/${userid}`, userinfo);
