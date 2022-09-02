import { createRouter } from "./context";
import { z } from "zod";

export const articlesRouter = createRouter()
.query("add-view", {
  resolve() {
    return {
      text: `Adding view`,
    };
  },
})
.query("get-view", {
  resolve() {
    return {
      text: `Getting view`,
    };
  },
});