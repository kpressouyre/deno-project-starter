import { Context } from "https://deno.land/x/oak/mod.ts";
import UserService from "../../app/services/UserService.ts";
import { makeJwt, setExpiration, Jose, Payload } from "https://deno.land/x/djwt/create.ts"
import key from './key.ts'


const userService = new UserService();
const header: Jose = {
  alg: "HS256",
  typ: "JWT",
}

export const login = async (context: Context) => {
    const { value: {email, password } } = await context.request.body();
    const user = await userService.loginCheck(email, password);
    if(user){
        const payload: Payload = {
            iss: user.email,
            exp: setExpiration(new Date().getTime() + 60000),
        }
        const jwt = makeJwt({key, header, payload});
        if (jwt) {
            context.response.status = 200;
            context.response.body = {
                id: user.id,
                username: user.email,
                jwt,
            }
        }else {
            context.response.status = 500;
            context.response.body = {
                message: 'Internal server error'
            }
        }
        return;
    }

    context.response.status = 422;
    context.response.body = {
    message: 'Invalid username or password'
  };
};

export const guest = (context: Context) => {
  context.response.body = 'Guest success';
};

export const auth = (context: Context) => {
  context.response.body = 'Auth success';
}