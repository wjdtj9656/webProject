<template>
      <div class="editor">
        <editor v-model="editorText" mode="wysiwyg" />
      </div>

</template>
<script>
import 'tui-editor/dist/tui-editor.css'
import 'tui-editor/dist/tui-editor-contents.css'
import 'codemirror/lib/codemirror.css'
import { Editor } from '@toast-ui/vue-editor'

export default {
  components: {
    'editor': Editor
  },
  data () {
    return {
      editorText: ''
    }
  }
}
</script>
<style scoped>
.editor{
  text-align: left;
  margin: auto;
  width:80%;
  max-width: 970px
}
</style>
