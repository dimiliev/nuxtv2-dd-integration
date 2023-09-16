import { Context } from "@nuxt/types";
import { Inject } from "@nuxt/types/app";
import { Span, tracer } from "dd-trace"

export default function(_context: Context, inject: Inject) {
  console.log(">> Tracerrrr plugin")
  inject("tracer", <T> (name: string, fn: (span?: Span, fn?: (error?: Error) => T) => T) => {
    tracer.trace(name, async (...args) => await fn(...args))
  })
}
