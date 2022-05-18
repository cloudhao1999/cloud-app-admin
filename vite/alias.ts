import path from "path";
import { AliasOptions } from "vite";

const alias = {
  "@": path.resolve(__dirname, "../src"),
  "#": path.resolve(__dirname, "../types")
} as AliasOptions;

export default alias;
