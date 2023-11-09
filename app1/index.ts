import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";

const app = new Elysia();

app
  .use(
    swagger({
      documentation: {
        servers: [
          {
            url: "http://localhost:3000",
          },
        ],
      },
    })
  )
  .get("/", () => {
    return { message: "Hello World!" };
  })
  // @ts-ignore
  .get("/hello/:name", ({ params }) => {
    const { name } = params;
    return { message: `Hello ${name}!` };
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
