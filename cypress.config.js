import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    video: true,
    baseUrl: "http://localhost:5173",
  },
});
