<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <v-button @click="handleClick">test</v-button>
    <v-input v-model="input" @input="handleInput"></v-input>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Button from "./components/Button.vue"
import Input from "./components/Input.vue"

Vue.component( "VButton", Button )
Vue.component( "VInput", Input )

export default Vue.extend({
  name: "app",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      title: "Hello VueCLI",
      input: "test",
    }
  },
    methods: {
        handleClick(evt: Event) {
          console.log("text")
        },
        handleInput(evt: Event) {
          console.log(this.input)
        },
    },
})
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
