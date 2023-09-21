<template>
  <div>
    {{ foobar.length }}
  </div>
</template>
<script lang="ts">
import axios from 'axios'

export default{
  name: "IndexPage",
  data() {
    return {
      foobar: []
    }
  },
  fetchOnServer: false,
  async fetch() {
    // @ts-ignore
    console.log('>> context', this.$context, this.$tracer, this)
    // @ts-ignore
    this.foobar = (await axios.get('http://localhost:3000/response.json')).data;
  }
}
</script>
