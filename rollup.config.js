import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import babel from "rollup-plugin-babel";
import clear from "rollup-plugin-clear";
import pkg from "./package.json";

const defaults = { compilerOptions: { declaration: true } };

export default {
  input: "src/index.ts",
  plugins: [
    resolve(),
    clear({
      targets: ["lib"],
    }),
    typescript({
      exclude: "node_modules/**",
      tsconfigDefaults: defaults,
    }),
    babel({
      exclude: ["test/*", "node_modules/**"],
      runtimeHelpers: true,
      extensions: [".ts", ".jsx", "js"],
    }),
    commonjs(),
  ],
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
};
