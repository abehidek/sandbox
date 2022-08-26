import { createRouter } from "./context";
import { z } from "zod";

export const exampleRouter = createRouter().query("hello", {
  input: z
    .object({
      text: z.string().nullish(),
    })
    .nullish(),
  resolve({ input }) {
    return {
      greeting: `Hello ${input?.text ?? "world"}`,
    };
  },
});

export const anotherExampleRouter = createRouter().query("bye", {
  input: z.object({
    name: z.string(),
    age: z.number().nullish(),
    email: z.string(),
  }),
  resolve({ input }) {
    return {
      message: `Your name is ${input.name}, your email is ${input.email} ${input.age ? "and your age is " + input.age : "" }`
    }
  }
})
