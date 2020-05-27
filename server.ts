import { serve } from "https://deno.land/std@0.53.0/http/server.ts";
import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const port = 8080;
const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

router.get('/test', ({ response }: { response: any}) => {
  response.body = 'test';
});

console.log(`Server running on port ${port}`);
await app.listen({ port });
