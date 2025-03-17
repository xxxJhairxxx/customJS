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

const tools = [
  {
    id:"custom-text",
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
  },
  {
    id: "custom-image",
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
  },
];

// Registrar herramientas con una pequeña espera entre cada una
async function registerTools() {
  for (const tool of tools) {
    await new Promise((resolve) => {
      unlayer.registerTool(tool);
      console.log(`✅ Registrado: ${tool.name}`);
      setTimeout(resolve, 500); // Esperar 500ms antes del siguiente registro
    });
  }
}

registerTools();



console.log(typeof unlayer.registerTools); // Debería devolver "function" si existe

console.log('unlayer : ', unlayer);