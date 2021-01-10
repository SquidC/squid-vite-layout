<template>
  <div class="app">
    <testLayout />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import testLayout from "./test.layout"

export default defineComponent({
  name: "App",
  components: {
    testLayout
  },
  setup(){
  }
})
</script>
