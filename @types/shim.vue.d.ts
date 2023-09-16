import type { Span } from "dd-trace";

type Tracer = (name: string, fn: (span: Span) => any) => any

declare module '@nuxt/types' {
  interface Context {
    $tracer: null | Tracer
  }
}
