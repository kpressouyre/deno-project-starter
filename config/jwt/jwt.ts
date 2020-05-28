import { Context } from "https://deno.land/x/oak/mod.ts";
import { validateJwt } from "https://deno.land/x/djwt/validate.ts"
import key from './key.ts'

const jwt = async (context: Context, next: any) => {

  const headers: Headers = context.request.headers;
  const authorization = headers.get('Authorization')
  if (!authorization) {
    context.response.status = 401;
    context.response.body = {message: 'No jwt token'};
    return;
  }
  const auth = authorization.split(' ')[1];
  if (!auth) {
    context.response.status = 401;
    return;
  }
  if (await validateJwt(auth, key, {isThrowing: false})){
    await next();
    return;
  }

  context.response.status = 401;
  context.response.body = {message: 'Invalid jwt token'};
}

export default jwt;