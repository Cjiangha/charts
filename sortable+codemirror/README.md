### drag-table

> Element-UI + Sortable 表格行、列拖拽排序
> 组件：EDTable.vue

### vue-codemirror,codemirror

- vue-codemirror 生成的文件 editorVueCodemirror.vue

```js
//设置高度关键代码
const MIN_HEIGHT = 100;
this.$nextTick(() => {
  this.codemirror.setSize("height", MIN_HEIGHT);
  // 获取当前编辑器的初始高度
  let height = this.$refs.codemirror.$el.offsetHeight;
  console.log("编辑器初始高度：", height);
});
```

- codemirror 生成的文件 editorCodemirror.vue

```js
const MIN_HEIGHT = 100;
this.codemirror = _CodeMirror.fromTextArea(this.$refs.textarea, this.cmOptions);
this.codemirror.setSize("height", MIN_HEIGHT);
```
