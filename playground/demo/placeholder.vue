<template>
  <Codemirror
    v-model:value="code"
    :options="cmOptions"
    border
    :height="200"
    :placeholder="cmPlaceholder"
  >
  </Codemirror>
</template>
<script lang="ts">
import { ref } from "vue";
import { EditorConfiguration } from "codemirror";
import Codemirror from "codemirror-editor-vue3";

// language
import "codemirror/mode/javascript/javascript.js";

import "codemirror/addon/display/placeholder";

export default defineComponent({
  components: {
    Codemirror,
  },
  setup() {
    const code = ref("");
    const cmPlaceholder = ref("test placeholder");

    const cmOptions: EditorConfiguration = {
      mode: "javascript",
    };

    cmPlaceholder.value += "1 ";

    // const timer = setInterval(() => {
    //   cmPlaceholder.value += "1 ";
    //   console.log(cmPlaceholder.value);
    // }, 2000);
    // onUnmounted(() => {
    //   clearInterval(timer);
    // });
    return {
      code,
      cmOptions,
      cmPlaceholder,
    };
  },
});
</script>
