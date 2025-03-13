unlayer.registerTool({
  name: 'my_tool',
  label: 'My Tool',
  icon: 'fa-smile',
  supportedDisplayModes: ['web', 'email'],
  options: {
    colors: {
      title: 'Colors',
      position: 1,
      options: {
        textColor: {
          label: 'Text Color',
          defaultValue: '#FF0000',
          widget: 'color_picker',
        },
        backgroundColor: {
          label: 'Background Color',
          defaultValue: '#FF0000',
          widget: 'color_picker',
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        return `<div>I am a custom tool.</div>`;
      },
    }),
    exporters: {
      web: function (values) {
        return `<div>I am a custom tool.</div>`;
      },
      email: function (values) {
        return `<div>I am a custom tool.</div>`;
      },
    },
    head: {
      css: function (values) {
        return `#${values._meta.htmlID} { background-color: ${values.backgroundColor}; color: ${values.textColor}; }`;
      },
      js: function (values) {
        return `console.log("Tool JavaScript");`;
      },
    },
  },
});
