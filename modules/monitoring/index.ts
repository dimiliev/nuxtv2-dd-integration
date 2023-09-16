import {resolve} from "path"
import { Module } from "@nuxt/types";


const module: Module = function (_options) {
  this.addPlugin({
    src: resolve(__dirname, "./plugins/server-tracer.ts"),
    mode: "server",
    ssr: true
  })
}

export default module;
