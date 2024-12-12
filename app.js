import { getUsers, addUser, updateUser, deleteUser } from "./controller.js";

app.get("/users", (req, res) => {
  getUsers((req, res, next) => {
    res.send();
  });
});

app.post("/add", (req, res) => {
  addUser(req.body, (cb) => {
    res.send();
  });
});

app.put("/update", (req, res) => {
  updateUser(req.body, (cb) => {
    res.send(cb); //  we passe cb to see weather user is updated correctly
  });
});

app.delete("/delete", (req, res) => {
  deleteUser(req.body, (cb) => {
    res.send(cb); //  we passe cb to see what user is deleted
  });
});

export default app;
