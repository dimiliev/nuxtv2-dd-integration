<template>
  <div>
    {{ posts.length }}
    <nuxt-link to="/foo">Go to Foo</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types';

// const resolveAfter = async (_method: Function, _delay: number) => {

//   if(process.client) {
//     // return new Promise((res, _rej) => {
//     //   setTimeout(() => {
//     //     res(method())
//     //   }, delay)
//     // })
//     // return "not available"
//   } else {
//     // return import('node:fs').then(mod => {
//     //   return mod.readFileSync(process.cwd() + "/Dockerfile").toString()
//     // })
//     // return (await import("dd-trace")).tracer.trace("fetch", () => {
//     //   // @ts-ignore
//     //   return new Promise((res, _rej) => {
//     //     setTimeout(() => {
//     //       res(method())
//     //     }, delay)
//     //   })
//     // })
//   }

// }

export default {
  name: 'IndexPage',
  data: () =>{
    return {
      posts: []
    };
  },
  async fetch(_context: Context) {
    this.posts = await fetch('https://api.nuxtjs.dev/posts').then(res =>
      res.json()
    )

    console.log('>> Posts', this.posts.length)

    // if(!process.client && context.$tracer) {
    //   // await context.$tracer("nuxt.asyncData", () => {
    //   //   // @ts-ignore
    //   //   setTimeout(() => {}, 1000);
    //   // })
    //   console.log(">> Component Fetched!!!")
    //   await (this.fromFetch.resp = "bar")
    // } else {
    //   await (this.fromFetch.resp = "client")
    // }

  }
}
</script>
