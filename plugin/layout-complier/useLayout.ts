export default (layout: string, config: string) => `
<template>
  <${layout} :config="config"/>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const config = ${config};
    return {
      config
    }
  }
});
</script>`