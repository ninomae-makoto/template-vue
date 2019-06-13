<template>
  <button @click="handleClick">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    <!-- {{ $slots.default[0].text}} -->
  </button>
</template>

<script lang="ts">
import Vue from "vue"
// import HelloWorld from "./components/HelloWorld.vue"

export default Vue.extend({
  name: "ElButton",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      title: "Hello VueCLI",
    }
  },

  methods: {
    handleClick(evt: Event) {
      this.$emit("click", evt)
    },
  },
})
</script>
