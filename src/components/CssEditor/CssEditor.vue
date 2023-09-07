<template>
  <div></div>
</template>

<script>
import { EditorState, basicSetup } from '@codemirror/basic-setup';
import { EditorView, keymap } from '@codemirror/view';
import { css } from '@codemirror/lang-css';
import '@codemirror/view/style.css';
import '@codemirror/theme/material.css';

export default {
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      code: '',
    };
  },
  mounted() {},
  methods: {
    initEditor() {
      const editorState = EditorState.create({
        doc: this.modelValue,
        extensions: [
          basicSetup,
          keymap.of([EditorView.defaultTabBinding]),
          css(),
        ],
      });

      const view = new EditorView({
        state: editorState,
        parent: this.$el,
      });

      view.update([
        {
          changes: {
            form: 0,
            to: this.modelValue.length,
            insert: this.modelValue,
          },
        },
      ]);

      view.dom.addEventListener('blur', () => {
        this.$emit('update:modelValue', view.state.doc.toString());
      });
    },
  },
};
</script>
