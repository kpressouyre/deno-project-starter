import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import userRouter from "../app/routes/UserRoute.ts";

const app = new Application();
const router = new Router();

app.use(userRouter.routes());
app.use(router.allowedMethods());

export default app;