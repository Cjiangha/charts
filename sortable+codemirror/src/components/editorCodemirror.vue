<template>
  <div class="editor">
    <div class="editor__run">
      <button type="success" class="btn" @click="autoFormatSelection">
        格式化
      </button>
    </div>
    <textarea style="width: 200px" ref="textarea" v-model="code"></textarea>
  </div>
</template>
<script>
import sqlFormatter from "sql-formatter";
import _CodeMirror from "codemirror";
import { Options } from "../plugins/code-mirror-option";
import "../plugins/sql";

const MIN_HEIGHT = 100;
export default {
  name: "editorCodemirror",
  data() {
    return {
      codemirror: null,
      code: "",
      cmOptions: Options,
    };
  },
  methods: {
    // 格式化
    autoFormatSelection() {
      let str = sqlFormatter.format(this.codemirror.getValue(), {
        language: "sql",
      });
      this.codemirror.setValue(str);
    },
    // 可以拿到 指定内容的语法解析结果
    sqlLintCheck(text) {
      const sqlLint = window.sqlLint;
      const parse = sqlLint.parse || sqlLint.astify;
      try {
        parse(text);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    console.log("cmOptions", this.cmOptions);
    // 初始化
    this.codemirror = _CodeMirror.fromTextArea(
      this.$refs.textarea,
      this.cmOptions
    );

    // 键盘按下， 展示提示
    this.codemirror.on("keypress", (instence) => {
      instence.showHint();
    });

    // 编辑器内容同步
    this.codemirror.on("change", () => {
      this.code = this.codemirror.getValue();
    });
    this.$nextTick(() => {
      this.codemirror.setValue(this.code);
      this.codemirror.setSize("height", MIN_HEIGHT);
    });
  },
};
</script>
<style scoped>
.btn {
  height: 30px;
  font-size: 13px;
  padding: 0 20px;
}
.editor__run {
  border: 2px solid #eee;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  background-color: rgb(242, 240, 248);
}

.CodeMirror {
  height: 100px; /* 设置编辑器的高度 */
  font: 14px / normal "Monaco", "Menlo", "Ubuntu Mono", "Consolas",
    "source-code-pro", monospace;
}

/* The lint marker gutter */
.CodeMirror-lint-markers {
  width: 16px;
}

.CodeMirror-lint-tooltip {
  border-radius: 4px;
  color: black;
  font-family: monospace;
  font-size: 10pt;
  overflow: hidden;
  padding: 12px;
  position: fixed;
  white-space: pre;
  white-space: pre-wrap;
  z-index: 100;
  max-width: 600px;
  opacity: 0;
  transition: opacity 0.4s;
  -moz-transition: opacity 0.4s;
  -webkit-transition: opacity 0.4s;
  -o-transition: opacity 0.4s;
  -ms-transition: opacity 0.4s;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px 0px rgba(83, 74, 67, 0.5);
}

.CodeMirror-lint-mark {
  background-position: left bottom;
  background-repeat: repeat-x;
}

.CodeMirror-lint-mark-warning {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sJFhQXEbhTg7YAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAMklEQVQI12NkgIIvJ3QXMjAwdDN+OaEbysDA4MPAwNDNwMCwiOHLCd1zX07o6kBVGQEAKBANtobskNMAAAAASUVORK5CYII=");
}

.CodeMirror-lint-mark-error {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sJDw4cOCW1/KIAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAHElEQVQI12NggIL/DAz/GdA5/xkY/qPKMDAwAADLZwf5rvm+LQAAAABJRU5ErkJggg==");
}

.CodeMirror-lint-marker {
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  display: inline-block;
  height: 16px;
  width: 16px;
  vertical-align: middle;
  position: relative;
}

.CodeMirror-lint-message {
  padding-left: 18px;
  background-position: top left;
  background-repeat: no-repeat;
}

.CodeMirror-lint-marker-warning,
.CodeMirror-lint-message-warning {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAANlBMVEX/uwDvrwD/uwD/uwD/uwD/uwD/uwD/uwD/uwD6twD/uwAAAADurwD2tQD7uAD+ugAAAAD/uwDhmeTRAAAADHRSTlMJ8mN1EYcbmiixgACm7WbuAAAAVklEQVR42n3PUQqAIBBFUU1LLc3u/jdbOJoW1P08DA9Gba8+YWJ6gNJoNYIBzAA2chBth5kLmG9YUoG0NHAUwFXwO9LuBQL1giCQb8gC9Oro2vp5rncCIY8L8uEx5ZkAAAAASUVORK5CYII=");
}

.CodeMirror-lint-marker-error,
.CodeMirror-lint-message-error {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAHlBMVEW7AAC7AACxAAC7AAC7AAAAAAC4AAC5AAD///+7AAAUdclpAAAABnRSTlMXnORSiwCK0ZKSAAAATUlEQVR42mWPOQ7AQAgDuQLx/z8csYRmPRIFIwRGnosRrpamvkKi0FTIiMASR3hhKW+hAN6/tIWhu9PDWiTGNEkTtIOucA5Oyr9ckPgAWm0GPBog6v4AAAAASUVORK5CYII=");
}

.CodeMirror-lint-marker-multiple {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAMAAADzjKfhAAAACVBMVEUAAAAAAAC/v7914kyHAAAAAXRSTlMAQObYZgAAACNJREFUeNo1ioEJAAAIwmz/H90iFFSGJgFMe3gaLZ0od+9/AQZ0ADosbYraAAAAAElFTkSuQmCC");
  background-repeat: no-repeat;
  background-position: right bottom;
  width: 100%;
  height: 100%;
}
</style>
