import app from "./config/routes.ts"

const port = 8080;

console.log(`Server running on port ${port}`);
await app.listen({ port });
