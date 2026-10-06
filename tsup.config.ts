import { defineConfig } from "tsup";

// Un fichero por modulo de core, para que `@rubenciveira/opr-kit/core/<modulo>`
// apunte a algo real; lo que comparten va a trozos aparte en vez de duplicarse.
export default defineConfig({
  entry: ["src/core/*.ts"],
  outDir: "dist/core",
  format: ["esm"],
  dts: true,
  splitting: true,
  clean: true,
  target: "es2022",
});
