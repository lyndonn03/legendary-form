import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "cjs"
  },
  external: ["react", "react-proptypes"],
  plugins: [
    resolve(),
    postcss({
      extract: false,
      modules: true,
      use: ["sass"]
    }),
    babel({
      exclude: "node_modules/**"
    }),
    commonjs(),
    terser()
  ]
};
