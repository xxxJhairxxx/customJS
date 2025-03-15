window.addEventListener('load', function() {
    unlayer.registerTool({
      name: 'my_tool',
      label: 'My Tool',
      icon: 'fa-smile',
      supportedDisplayModes: ['web', 'email'],
      options: {},
      values: {},
      renderer: {
        Viewer: unlayer.createViewer({
          render(values) {
            return '<div>My Tool Loaded</div>';
          },
        }),
        exporters: {
          web: function (values) {
            return '<div>My Tool Exported</div>';
          },
          email: function (values) {
            return '<div>My Tool Email Exported</div>';
          },
        },
        head: {
          css: function (values) {},
          js: function (values) {},
        },
      },
    });
    console.log('my-tool.js registered');
  });