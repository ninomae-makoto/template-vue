<template>
  <input v-bind:value="value" v-on:input="handleInput">
</template>

<script lang="ts">
import Vue from "vue"
// import HelloWorld from "./components/HelloWorld.vue"

export default Vue.extend({
  name: "ElButton",
  props: ["value"],
  data() {
    return {
      title: "Hello VueCLI",
    }
  },

  methods: {
    handleInput(event: any) {
      // console.log(event)
      this.$emit("input", event.target.value)
    },
  },
})
</script>
