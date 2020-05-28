import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import jwtRouter from './jwt/routes.ts'
import userRouter from "../app/routes/UserRoute.ts";

const app = new Application();
const router = new Router();



app.use(userRouter.routes());
app.use(jwtRouter.routes());
app.use(router.allowedMethods());

export default app;