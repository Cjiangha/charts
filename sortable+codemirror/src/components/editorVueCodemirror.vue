<template>
  <codemirror
    v-model="code"
    :options="cmOptions"
    @ready="onCmReady"
    ref="codemirror"
  ></codemirror>
</template>
<script>
const MIN_HEIGHT = 100;

import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/sql/sql.js"; // 对于sql模式的支持
import "codemirror/keymap/sublime.js";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/sql-hint.js";

export default {
  name: "codeMirror",
  components: {
    codemirror,
  },
  computed: {
    codemirror() {
      return this.$refs.codemirror.codemirror;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.codemirror.setSize("height", MIN_HEIGHT);
      // 获取当前编辑器的初始高度
      let height = this.$refs.codemirror.$el.offsetHeight;
      console.log("编辑器初始高度：", height);
    });
  },
  data() {
    return {
      code: "",
      cmOptions: {
        mode: "text/x-mysql", //实现Java代码高亮
        lineNumbers: true,
        theme: "dracula",
        // keyMap: "sublime",
        extraKeys: { Ctrl: "autocomplete" },
        lineWrapping: true, //是否换行
        foldGutter: true, //是否折叠
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"], //添加行号栏，折叠栏
      },
    };
  },
  methods: {
    onCmReady(cm) {
      cm.on("keypress", () => {
        cm.showHint();
      });
    },
  },
};
</script>
