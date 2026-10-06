import { defineConfig } from "tsup";

// Un fichero por modulo, para que `@rubenciveira/opr-kit/core/<modulo>` y
// `.../react/<Componente>` apunten a algo real; lo que comparten va a trozos
// aparte en vez de duplicarse.
export default defineConfig({
  entry: ["src/core/*.ts", "src/react/*.ts", "src/react/*.tsx"],
  outDir: "dist",
  format: ["esm"],
  dts: true,
  splitting: true,
  clean: true,
  target: "es2022",
});
