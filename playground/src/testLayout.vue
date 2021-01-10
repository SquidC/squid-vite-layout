<template>
  <div class="test-layout">
    test-layout {{ props.config }}
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { LayoutConfig } from "../../plugin/types"
export default defineComponent({
  props: {
    config: {
      type: Object as PropType<LayoutConfig>,
      required: true,
    },
  },
  setup(props) {
    return {
      props
    }
  }
});
</script>