### 介绍
  该插件基于 Codemirror(http://codemirror.net/)，仅支持 vue3 中使用。

### 安装
```npm
npm install codemirror-editor-vue3
```

### Base Style
考虑插件需要引入以下基础样式，插件内部已经引入，不需要在使用时重复引入：
```js
// base style
import "codemirror/lib/codemirror.css";
```


### 全局安装
`main.js:` 

```js
import { createApp } from 'vue'
import App from './App.vue'
import Codemirror from "../packages/index.js"
let app = createApp(App)
app.use(Codemirror)
app.mount('#app')
```

### 组件中使用
```vue
<template>
  <Codemirror
    v-model:value="code"
    :options="cmOptions"
    border
    placeholder="测试 placeholder"
    :height="200"
    @change="change"
  />
</template>

<script>
import Codemirror from "codemirror-editor-vue3";

// base style
import "codemirror/lib/codemirror.css";
import "codemirror/mode/css/css.js";

// language
import "codemirror/mode/javascript/javascript.js";


import dedent from "dedent";
import { ref } from "vue"
export default {
  components: { Codemirror },
  setup() {
    const code = ref(dedent`
var i = 0;
for (; i < 9; i++) {
  console.log(i);
  // more statements
}`)

    return {
      code,
      cmOptions:{
        mode: 'text/javascript', // 语言模式
        theme: 'default', // 主题
        lineNumbers: true, // 显示行号
        smartIndent: true, // 智能缩进
        indentUnit: 2, // 智能缩进单位为4个空格长度
        foldGutter: true, // 启用行槽中的代码折叠
        styleActiveLine: true, // 显示选中行的样式
      }
    };
   } ,
};
</script>
```

### 案例
  <Codemirror
    v-model:value="code"
    :options="cmOptions"
    border
    placeholder="测试 placeholder"
    :height="200"
    @change="onChange"
    class="cm-component"
  />

可尝试在上面的编辑器中修改代码查看变化
::: info value change
{{code}}
:::

<script setup>
import { Codemirror } from "../packages/index";
// base style
import "codemirror/lib/codemirror.css";
import "codemirror/mode/css/css.js";

// language
import "codemirror/mode/javascript/javascript.js";

// theme
import "codemirror/theme/dracula.css"

import dedent from "dedent"
import { ref } from "vue"
const code =ref(`var i = 0;
for (; i < 9; i++) {
    console.log(i);
    // more statements
}
`)

const onChange = (val, instance) => {
    console.log(val)
}

const cmOptions= { 
  mode: 'text/javascript', 
  theme: 'dracula' 
}
</script>

<style>
.cm-component {
  margin-top:20px;
}
</style>
  