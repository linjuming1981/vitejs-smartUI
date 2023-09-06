<template>
  <div ref="editor">css editor</div>
</template>
<script>
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css'; // 样式主题，可根据需求选择

// 导入需要的 CodeMirror 模式（例如，对于 CSS，需要导入 'css' 模式）
import 'codemirror/mode/css/css';

export default {
  mounted() {
    this.initEditor();
  },
  methods: {
    initEditor() {
      this.editor = CodeMirror(this.$refs.editor, {
        mode: 'css', // 设置编辑器模式为 CSS
        theme: 'material', // 设置编辑器主题
        lineNumbers: true, // 显示行号
      });

      // 添加监听器以获取编辑器内容的变化
      this.editor.on('change', this.handleEditorChange);
    },

    handelEditorChange(a, b, c) {
      console.log(1111, a, b, c);
    },
  },
};
</script>
