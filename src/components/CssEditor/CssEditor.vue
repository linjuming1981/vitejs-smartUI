<template>
  <div></div>
</template>

<script>
import { basicSetup, EditorView, minimalSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { keymap } from '@codemirror/view';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { basicSetup, EditorView } from 'codemirror';
import { EditorState, Compartment } from '@codemirror/state';
import { python } from '@codemirror/lang-python';

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
  mounted() {
    this.test();
  },
  methods: {
    test() {
      let editor = new EditorView({
        extensions: [basicSetup, css()],
        parent: this.$el,
      });
    },

    initEditor() {
      // new EditorView({
      //   doc: "...",
      //   extensions: minimalSetup,
      //   parent: this.$el,
      // })

      const editorState = EditorState.create({
        doc: this.modelValue,
        extensions: [
          // basicSetup,
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
