import { Elysia } from "elysia";
import { yoga } from "@elysiajs/graphql-yoga";

const BOOKS = [
  {
    title: "Harry Potter and the Chamber of Secrets",
  },
  { title: "Jurassic Park" },
];

const app = new Elysia().use(
  yoga({
    graphiql: true,
    typeDefs: /* GraphQL */ `
      type Query {
        me: User!
        books: [Book!]!
      }

      type User {
        name: String!
        books: [Book!]!
      }

      type Book {
        title: String!
      }
    `,
    resolvers: {
      Query: {
        me: () => ({
          name: "Rohan",
          // @ts-ignore lol
          books: () => BOOKS,
        }),
        books: () => BOOKS,
      },
    },
  })
);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
