<template>
  <demo-preview v-bind="{ ...$attrs, ...$props }" name="fclog-mode-demo">
    <Codemirror
      v-model:value="code"
      :options="cmOptions"
      border
      :height="400"
    />
    <a href=""></a>
  </demo-preview>
</template>

<script>
import { ref, defineComponent } from "vue";
import Codemirror, {
  createLinkMark,
  createLogMark,
  createLog,
  createTitle,
} from "../../../../packages/index";

export default defineComponent({
  components: { Codemirror },
  setup() {
    const code = ref(`完整日志下载地址：${createLinkMark({
      href: "/logDownload",
      download: "",
      target: "_blank",
    })}
${createTitle("基本日志")}
${createLogMark("2021-08-26 15:07:09: job is success", "info")}
${createLogMark("2021-08-26 15:07:09: job is success", "warning")}
${createLogMark("2021-08-26 15:07:09: job is error", "error")}
${createTitle("带有时间节点")}
${createLog("info content", "info")}
${createLog("warning content", "warning")}
${createLog("error content", "error")}
${createLinkMark({ href: "/logDownload", download: "", target: "_blank" })}

${createTitle("引擎日志")}

DataStreamMain start
java.lang.NullPointerException
at
at java.util.Properties.load0(Properties.java:353)
at java.util.Properties.load(Properties.java:341)
at com.zhiweicloud.dataprocess.util.common.PropertiesUtil.getStringByKey(PropertiesUtil.
at com.zhiweicloud.dataprocess.engine.FlinkEngine.readFlinkEngineConfig(FlinkEngine.
at com.zhiweicloud.dataprocess.engine.FlinkEngine.buildFlinkStream(FlinkEngine.
at com.zhiweicloud.dataprocess.engine.FlinkEngine.startFlinkEngine(FlinkEngine.
at com.zhiweicloud.dataprocess.DataStreamMain.main(DataStreamMain.
 `);
    const cmOptions = {
      mode: "fclog",
      theme: "default",
    };
    return {
      Codemirror,
      createLinkMark,
      createLogMark,
      createLog,
      createTitle,
      ref,
      code,
      cmOptions,
    };
  },
});
</script>
