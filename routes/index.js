import express from "express";
// TODO: import router from users.route
import userRouter from "./user.route.js";
import employeeRouter from "./employees.route";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

// TODO: use the imported router to handle all routes matching "/users"
router.use("/users", userRouter);

router.use("/employees", employeeRouter);

export default router;
