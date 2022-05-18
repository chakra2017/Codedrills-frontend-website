
<template>
<div>
<div class="heading"></div>
<div class="container" id="app">
  <div class="form-group">
    <textarea id="codemirror1" v-model="content"></textarea>
  </div>

  <div class="form-group">
    <div class="panel panel-default">
      <div class="panel-heading">HTML Preview</div>
      <div class="panel-body" v-html="content"></div>
    </div>
  </div>
</div>
</div>
</template>

export default{
  el: '#app',
  name:'code-mirror',
  data:function() {
    content: '<ul><li>\nItem 1</li><li>\nItem 2</li><li>\nItem 3</li></ul>'
  },
  mounted: function() {
    
    editor = CodeMirror.fromTextArea(document.getElementById('codemirror1'), {
      mode:  "htmlmixed",
      extraKeys: {"Ctrl-Space": "autocomplete"},
      lineNumbers: true,
      autoCloseTags: true,
      theme: 'monokai'
    });
    
    // On Load Auto Format HTML
    this.autoFormat();
    
  },
  methods: {
    selectAll: function() {
      CodeMirror.commands["selectAll"](editor);
    },
    autoFormat: function() {
      editor.setCursor(0,0);
      this.selectAll();
      editor.autoFormatRange(editor.getCursor(true), editor.getCursor(false));
      editor.setCursor(0,0);
    }
  }
  
};
