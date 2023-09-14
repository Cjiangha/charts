<template>
  <div>
    <editor-vue-codemirror />
    <div style="width:100px;height:200px;"></div>
    <editor-codemirror />
  </div>
</template>

<script>
import editorVueCodemirror from './components/editorVueCodemirror.vue'//vue版本的codeMirror(字体不是很加粗)
import editorCodemirror from './components/editorCodemirror.vue'//codeMirror(字体加粗)

export default {
  name: 'App',
  components: {
    editorVueCodemirror,
    editorCodemirror
  }
}
</script>

<style>

</style>
