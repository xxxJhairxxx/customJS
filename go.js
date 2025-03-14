unlayer.registerTool({
    name: "video",
    label: "video",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="82" height="40" viewBox="0 0 82 40" fill="none"><g clip-path="url(#clip0_8282_89265)"><g clip-path="url(#clip1_8282_89265)"><path d="M61 8H21C19.8954 8 19 8.89543 19 10V30C19 31.1046 19.8954 32 21 32H61C62.1046 32 63 31.1046 63 30V10C63 8.89543 62.1046 8 61 8Z" stroke="#4E59AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M27.5 8C27.5 7.72386 27.2761 7.5 27 7.5C26.7239 7.5 26.5 7.72386 26.5 8V32C26.5 32.2761 26.7239 32.5 27 32.5C27.2761 32.5 27.5 32.2761 27.5 32V8Z" fill="#4E59AF" stroke="#4E59AF"/><path d="M59.5 12C59.5 11.7239 59.2761 11.5 59 11.5C58.7239 11.5 58.5 11.7239 58.5 12C58.5 12.2761 58.7239 12.5 59 12.5C59.2761 12.5 59.5 12.2761 59.5 12Z" fill="#687484" stroke="#687484"/><path d="M23.5 12C23.5 11.7239 23.2761 11.5 23 11.5C22.7239 11.5 22.5 11.7239 22.5 12C22.5 12.2761 22.7239 12.5 23 12.5C23.2761 12.5 23.5 12.2761 23.5 12Z" fill="#687484" stroke="#687484"/><path d="M59.5 16C59.5 15.7239 59.2761 15.5 59 15.5C58.7239 15.5 58.5 15.7239 58.5 16C58.5 16.2761 58.7239 16.5 59 16.5C59.2761 16.5 59.5 16.2761 59.5 16Z" fill="#687484" stroke="#687484"/><path d="M23.5 16C23.5 15.7239 23.2761 15.5 23 15.5C22.7239 15.5 22.5 15.7239 22.5 16C22.5 16.2761 22.7239 16.5 23 16.5C23.2761 16.5 23.5 16.2761 23.5 16Z" fill="#687484" stroke="#687484"/><path d="M59.5 20C59.5 19.7239 59.2761 19.5 59 19.5C58.7239 19.5 58.5 19.7239 58.5 20C58.5 20.2761 58.7239 20.5 59 20.5C59.2761 20.5 59.5 20.2761 59.5 20Z" fill="#687484" stroke="#687484"/><path d="M23.5 20C23.5 19.7239 23.2761 19.5 23 19.5C22.7239 19.5 22.5 19.7239 22.5 20C22.5 20.2761 22.7239 20.5 23 20.5C23.2761 20.5 23.5 20.2761 23.5 20Z" fill="#687484" stroke="#687484"/><path d="M59.5 24C59.5 23.7239 59.2761 23.5 59 23.5C58.7239 23.5 58.5 23.7239 58.5 24C58.5 24.2761 58.7239 24.5 59 24.5C59.2761 24.5 59.5 24.2761 59.5 24Z" fill="#4E59AF" stroke="#4E59AF"/><path d="M23.5 24C23.5 23.7239 23.2761 23.5 23 23.5C22.7239 23.5 22.5 23.7239 22.5 24C22.5 24.2761 22.7239 24.5 23 24.5C23.2761 24.5 23.5 24.2761 23.5 24Z" fill="#4E59AF" stroke="#4E59AF"/><path d="M59.5 28C59.5 27.7239 59.2761 27.5 59 27.5C58.7239 27.5 58.5 27.7239 58.5 28C58.5 28.2761 58.7239 28.5 59 28.5C59.2761 28.5 59.5 28.2761 59.5 28Z" fill="#687484" stroke="#687484"/><path d="M23.5 28C23.5 27.7239 23.2761 27.5 23 27.5C22.7239 27.5 22.5 27.7239 22.5 28C22.5 28.2761 22.7239 28.5 23 28.5C23.2761 28.5 23.5 28.2761 23.5 28Z" fill="#687484" stroke="#687484"/><path d="M55.5 8C55.5 7.72386 55.2761 7.5 55 7.5C54.7239 7.5 54.5 7.72386 54.5 8V32C54.5 32.2761 54.7239 32.5 55 32.5C55.2761 32.5 55.5 32.2761 55.5 32V8Z" fill="#4E59AF" stroke="#4E59AF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49 20C49 24.4183 45.4183 28 41 28C36.5817 28 33 24.4183 33 20C33 15.5817 36.5817 12 41 12C45.4183 12 49 15.5817 49 20ZM39.6219 16.4146C39.3561 16.2374 39 16.4279 39 16.7474V23.2526C39 23.5721 39.3561 23.7626 39.6219 23.5854L44.5008 20.3328C44.7383 20.1745 44.7383 19.8255 44.5008 19.6672L39.6219 16.4146Z" fill="#4E59AF"/></g></g><defs><clipPath id="clip0_8282_89265"><rect x="11" width="60" height="40" rx="2" fill="white"/></clipPath><clipPath id="clip1_8282_89265"><rect width="60" height="40" fill="white" transform="translate(11)"/></clipPath></defs></svg>`,
    supportedDisplayModes: ["web", "email"],
    options: {
      colors: {
        title: "Colors",
        position: 1,
        options: {
          textTitle: {
            label: "Texto",
            defaultValue: "I am a custom tool.",
            widget: "text",
          },
          textColor: {
            label: "Text Color",
            defaultValue: "#f54242",
            widget: "color_picker",
          },
          backgroundColor: {
            label: "Background Color",
            defaultValue: "#000",
            widget: "color_picker",
          },
        },
      },
      enlace: {
        title: "Enlace",
        position: 2,
        options: {
          videoLink: {
            label: "Enlace del video",
            defaultValue: {
              name: "video",
              values: {
                href: "",
                target: "_blank",
              },
            },
            widget: "link",
          },
        //   imageBanner: {
        //     label: "Carga imagen",
        //     defaultValue: {
        //       url: "https://i.ytimg.com/vi/pWoxDjQ70EE/maxresdefault.jpg",
        //     },
        //     widget: "image",
        //   },
        },
      },
    },
    values: {},
    renderer: {
      Viewer: unlayer.createViewer({
        render(values) {
          return getContainer(values);
        },
      }),
      exporters: {
        web: function (values) {
          return getContainer(values);
        },
        email: function (values) {
          return getContainer(values);
        },
      },
      head: {
        css: function (values) {
          return `#${values._meta.htmlID} `;
        },
        js: function (values) {
          return `console.log("Tool JavaScript");`;
        },
      },
    },
  });
  
  function getContainer(values) {
    const container = document.createElement("div");
    container.style.backgroundColor = values.backgroundColor;
    container.style.color = values.textColor;
  
    const textElement = document.createElement("p");
    textElement.textContent = values.textTitle;
  
    const enlace = document.createElement("a");
    enlace.href = values.videoLink;
    enlace.target = "_blank";
  
    const imgElement = document.createElement("img");
    imgElement.src= getYouTubeThumbnail(values.videoLink);
    imgElement.alt = "imagen";
    imgElement.style.width = "100%";
  
    enlace.appendChild(imgElement);
    container.appendChild(textElement);
    container.appendChild(enlace);
  
    return container.outerHTML;
  }
  
  function getYouTubeThumbnail(url) {
    const videoId = url.split("v=")[1]?.split("&")[0]; // Extrae el ID del video
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }
  