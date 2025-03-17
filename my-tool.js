// window.addEventListener('load', function() {
//     unlayer.registerTool({
//       name: 'my_tool',
//       label: 'My Tool',
//       icon: 'fa-smile',
//       supportedDisplayModes: ['web', 'email'],
//       options: {},
//       values: {},
//       renderer: {
//         Viewer: unlayer.createViewer({
//           render(values) {
//             return '<div>My Tool Loaded</div>';
//           },
//         }),
//         exporters: {
//           web: function (values) {
//             return '<div>My Tool Exported</div>';
//           },
//           email: function (values) {
//             return '<div>My Tool Email Exported</div>';
//           },
//         },
//         head: {
//           css: function (values) {},
//           js: function (values) {},
//         },
//       },
//     });
//     console.log('my-tool.js registered');
//   });


editor.registerTool({
  name: "custom-text",
  label: "Texto Personalizado",
  icon: "fa-font",
  supportedContent: ["text"],
  options: {
    fontSize: {
      label: "Tamaño de Fuente",
      type: "number",
      defaultValue: 16,
    },
  },
  renderer: {
    Viewer: (data) => `<p style="font-size: ${data.fontSize}px;">Texto personalizado</p>`,
  },
});

editor.registerTool({
  name: "custom-image",
  label: "Imagen Personalizada",
  icon: "fa-image",
  supportedContent: ["image"],
  options: {
    borderRadius: {
      label: "Radio del Borde",
      type: "number",
      defaultValue: 10,
    },
  },
  renderer: {
    Viewer: (data) => `<img src="https://via.placeholder.com/150" style="border-radius: ${data.borderRadius}px;">`,
  },
});