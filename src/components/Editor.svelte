<script>
  import '../utils/monacoWorker';
  import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
  import { onMount } from 'svelte';

  export let languageType = 'javascript';
  export let onKeyUp;
  export let defaultValue = '';

  let editorContainer;
  let editor;
  
  onMount(() => {
    editor = monaco.editor.create(editorContainer, {
      value: defaultValue,
      language: languageType,
      roundedSelection: false,
      scrollBeyondLastLine: false,
      readOnly: false,
      theme: 'vs-dark',
      tabSize: 2,
      automaticLayout: true,
      minimap: {
        enabled: false
      }
    });

    editor.onKeyUp(onKeyUp);
    editor.onDidPaste(onKeyUp);
  })
</script>

<div class="monoco-editor" bind:this={editorContainer}></div>

<style>
  .monoco-editor {
    min-height: 50vh;
    min-width: 50vh;
    border-radius: 5px;
    resize: horizontal;
    overflow: auto;
  }
</style>