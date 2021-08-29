import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
const viteCfg = defineConfig({
  server: {
    host: "::",
    open: true,
    https: false,
  },
  // 生产环境路径，类似webpack的assetsPath
  // base: "./",
  // resolve: { dedupe: ["vue", "codemirror"] },
  build: {
    lib: {
      formats: ["umd", "es"],
      entry: path.resolve(__dirname, "packages/index.js"),
      name: "codemirror-editor-vue3",
    },
    rollupOptions: {
      output: {
        // name: 'codemirror-editor-vue3', // 仓库或组件的名字
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
          codemirror: "codemirror",
          "codemirror/lib/codemirror.js": "codemirror",
          "diff-match-patch": "DiffMatchPatch",
          // codemirror: "codemirror/lib/codemirror.js",
          // "codemirror/lib/codemirror.js": "codemirror",
        },
      },

      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        "vue",
        "codemirror",
        "diff-match-patch",
        "codemirror/addon/mode/simple.js",
        "codemirror/lib/codemirror.js",
        "codemirror/mode/css/css.js",
        "codemirror/lib/codemirror.css",
        "codemirror/addon/merge/merge.css",
        "codemirror/addon/merge/merge.js",
      ],
    },
  },
  plugins: [
    vue(),
  ],
});
export default viteCfg;