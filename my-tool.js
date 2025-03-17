
    unlayer.registerTool({
      id:'my_tools',
      name: 'my_tool',
      label: 'My Tool',
      icon: 'fa-smile',
      supportedDisplayModes: ['email'],
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


// unlayer.registerTool({
//   id: "custom-text",
//   name: "custom-text",
//   label: "Texto Personalizado",
//   icon: "fa-font",
//   supportedContent: ["text"],
//   options: {
//     fontSize: {
//       label: "Tamaño de Fuente",
//       type: "number",
//       defaultValue: 16,
//     },
//   },
//   renderer: {
//     Viewer: (values) =>
//       `<p style="font-size: ${values.fontSize}px;" >Texto personalizado</p>`,
//   },
//   exporters: {
//     web: function (values) {
//       return `<p style="font-size: ${values.fontSize}px;" >Texto personalizado</p>`;
//     },
//     email: function (values) {
//       return `<p style="font-size: ${values.fontSize}px;" >Texto personalizado</p>`;
//     },
//   },
//   head: {
//     css: function (values) {},
//     js: function (values) {},
//   },
// });

// unlayer.registerTool({
//   id:"custom-image",
//   name: "custom-image",
//   label: "Imagen Personalizada",
//   icon: "fa-image",
//   supportedContent: ["image"],
//   options: {
//     borderRadius: {
//       label: "Radio del Borde",
//       type: "number",
//       defaultValue: 10,
//     },
//   },
//   renderer: {
//     Viewer: (values) =>
//       `<img src="https://via.placeholder.com/150" style="border-radius: ${values.borderRadius}px;">`,
//   },
//   exporters: {
//     web: function (values) {
//       return `<img src="https://via.placeholder.com/150" style="border-radius: ${values.borderRadius}px;">`;
//     },
//     email: function (values) {
//       return `<img src="https://via.placeholder.com/150" style="border-radius: ${values.borderRadius}px;">`;
//     },
//   },
//   head: {
//     css: function (values) {},
//     js: function (values) {},
//   },
// });

// console.log(unlayer.tools);
 console.log('unlayer : ', unlayer);