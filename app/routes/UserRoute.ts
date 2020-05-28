import { Router } from "https://deno.land/x/oak/mod.ts";
import { getUsers, createUser } from "../controllers/UserController.ts";

const userRouter = new Router({prefix: '/user'});

userRouter
  .get("/", getUsers)
  .post("/", createUser);

export default userRouter;