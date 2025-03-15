unlayer.registerTool({
  name: 'my_tool',
  label: 'My Tool',
  icon: 'fa-smile',
  supportedDisplayModes: ['web', 'email'],
  options: {
    default: {
      title: null,
    },
    text: {
      title: 'Text',
      position: 1,
      options: {
        textColor: {
          label: 'Color',
          defaultValue: '#ff0000',
          widget: 'my_color_picker', // custom property editor
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        return `<div style="color: ${values.textColor};">I am a custom tool.</div>`;
      },
    }),
    exporters: {
      web: function (values) {
        return `<div style="color: ${values.textColor};">I am a custom tool.</div>`;
      },
      email: function (values) {
        return `<div style="color: ${values.textColor};">I am a custom tool.</div>`;
      },
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
})