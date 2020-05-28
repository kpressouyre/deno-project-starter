import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import {login, auth, guest} from './service.ts'
import jwt from './jwt.ts';

const jwtRouter = new Router({prefix: '/jwt'});

jwtRouter
  .post('/login', login)
  .get('/guest', guest)
  .get('/auth', jwt, auth);

export default jwtRouter;