    unlayer.registerTool({
    name: "custom_video",
    label: "video",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="82" height="40" viewBox="0 0 82 40" fill="none"><g clip-path="url(#clip0_8282_89265)"><g clip-path="url(#clip1_8282_89265)"><path d="M61 8H21C19.8954 8 19 8.89543 19 10V30C19 31.1046 19.8954 32 21 32H61C62.1046 32 63 31.1046 63 30V10C63 8.89543 62.1046 8 61 8Z" stroke="#4E59AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M27.5 8C27.5 7.72386 27.2761 7.5 27 7.5C26.7239 7.5 26.5 7.72386 26.5 8V32C26.5 32.2761 26.7239 32.5 27 32.5C27.2761 32.5 27.5 32.2761 27.5 32V8Z" fill="#4E59AF" stroke="#4E59AF"/><path d="M59.5 12C59.5 11.7239 59.2761 11.5 59 11.5C58.7239 11.5 58.5 11.7239 58.5 12C58.5 12.2761 58.7239 12.5 59 12.5C59.2761 12.5 59.5 12.2761 59.5 12Z" fill="#687484" stroke="#687484"/><path d="M23.5 12C23.5 11.7239 23.2761 11.5 23 11.5C22.7239 11.5 22.5 11.7239 22.5 12C22.5 12.2761 22.7239 12.5 23 12.5C23.2761 12.5 23.5 12.2761 23.5 12Z" fill="#687484" stroke="#687484"/><path d="M59.5 16C59.5 15.7239 59.2761 15.5 59 15.5C58.7239 15.5 58.5 15.7239 58.5 16C58.5 16.2761 58.7239 16.5 59 16.5C59.2761 16.5 59.5 16.2761 59.5 16Z" fill="#687484" stroke="#687484"/><path d="M23.5 16C23.5 15.7239 23.2761 15.5 23 15.5C22.7239 15.5 22.5 15.7239 22.5 16C22.5 16.2761 22.7239 16.5 23 16.5C23.2761 16.5 23.5 16.2761 23.5 16Z" fill="#687484" stroke="#687484"/><path d="M59.5 20C59.5 19.7239 59.2761 19.5 59 19.5C58.7239 19.5 58.5 19.7239 58.5 20C58.5 20.2761 58.7239 20.5 59 20.5C59.2761 20.5 59.5 20.2761 59.5 20Z" fill="#687484" stroke="#687484"/><path d="M23.5 20C23.5 19.7239 23.2761 19.5 23 19.5C22.7239 19.5 22.5 19.7239 22.5 20C22.5 20.2761 22.7239 20.5 23 20.5C23.2761 20.5 23.5 20.2761 23.5 20Z" fill="#687484" stroke="#687484"/><path d="M59.5 24C59.5 23.7239 59.2761 23.5 59 23.5C58.7239 23.5 58.5 23.7239 58.5 24C58.5 24.2761 58.7239 24.5 59 24.5C59.2761 24.5 59.5 24.2761 59.5 24Z" fill="#4E59AF" stroke="#4E59AF"/><path d="M23.5 24C23.5 23.7239 23.2761 23.5 23 23.5C22.7239 23.5 22.5 23.7239 22.5 24C22.5 24.2761 22.7239 24.5 23 24.5C23.2761 24.5 23.5 24.2761 23.5 24Z" fill="#4E59AF" stroke="#4E59AF"/><path d="M59.5 28C59.5 27.7239 59.2761 27.5 59 27.5C58.7239 27.5 58.5 27.7239 58.5 28C58.5 28.2761 58.7239 28.5 59 28.5C59.2761 28.5 59.5 28.2761 59.5 28Z" fill="#687484" stroke="#687484"/><path d="M23.5 28C23.5 27.7239 23.2761 27.5 23 27.5C22.7239 27.5 22.5 27.7239 22.5 28C22.5 28.2761 22.7239 28.5 23 28.5C23.2761 28.5 23.5 28.2761 23.5 28Z" fill="#687484" stroke="#687484"/><path d="M55.5 8C55.5 7.72386 55.2761 7.5 55 7.5C54.7239 7.5 54.5 7.72386 54.5 8V32C54.5 32.2761 54.7239 32.5 55 32.5C55.2761 32.5 55.5 32.2761 55.5 32V8Z" fill="#4E59AF" stroke="#4E59AF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49 20C49 24.4183 45.4183 28 41 28C36.5817 28 33 24.4183 33 20C33 15.5817 36.5817 12 41 12C45.4183 12 49 15.5817 49 20ZM39.6219 16.4146C39.3561 16.2374 39 16.4279 39 16.7474V23.2526C39 23.5721 39.3561 23.7626 39.6219 23.5854L44.5008 20.3328C44.7383 20.1745 44.7383 19.8255 44.5008 19.6672L39.6219 16.4146Z" fill="#4E59AF"/></g></g><defs><clipPath id="clip0_8282_89265"><rect x="11" width="60" height="40" rx="2" fill="white"/></clipPath><clipPath id="clip1_8282_89265"><rect width="60" height="40" fill="white" transform="translate(11)"/></clipPath></defs></svg>`,
    supportedDisplayModes: ["web", "email"],
    options: {
      enlace: {
            title: "Link",
            icon: `<svg aria-hidden="true" width="10.16" height="16.25" focusable="false" data-prefix="far" data-icon="arrow-pointer" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M144 272l85.8 0L48 110.4l0 246.4 59.9-68.4C117 278 130.2 272 144 272zM0 426L0 55.2C0 42.4 10.4 32 23.2 32c5.7 0 11.2 2.1 15.4 5.9l274 243.6c4.7 4.2 7.4 10.2 7.4 16.5c0 12.2-9.9 22.1-22.1 22.1l-127.4 0 59.1 126.8c5.6 12 .4 26.3-11.6 31.9s-26.3 .4-31.9-11.6L126.7 339.7 38.6 440.5C34.4 445.3 28.4 448 22 448c-12.2 0-22-9.9-22-22z"></path></svg>`,
position: 1,
        options:{
          videoLink: {
            label: "Enlace del video",
            defaultValue:"",
            widget: "text",
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
        return `#${values._meta.htmlID} { background-color: ${values.backgroundColor}; color: ${values.textColor}; }`;
      },
      js: function (values) {
        return `console.log(unlayer);`;
      },
    },
    },
  });
  
  function getContainer(values) {
    const container = document.createElement("div");
    container.setAttribute(
      "style",
      "width: 100%; min-height: 270px; position: relative;border: 1px solid #D4D4D4;background-color: #fff;"
    );
  
    const enlace = document.createElement("a");
    enlace.setAttribute(
      "style",
      "width: 100%; height: 100%; display: block;"
    );
    (values.videoLink.trim() !== '') ? enlace.href = values.videoLink : console.log('no hay enlace');
    
    enlace.target = '_blank';
  
    const svgIcon = document.createElement("div");
    svgIcon.setAttribute(
      "style",
      "position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none"
    );
    svgIcon.innerHTML = `
            <svg style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);pointer-events: none;" width="69px" height="69px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.248"> <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#1C274C"></path> <path d="M15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868V9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059Z" fill="#1C274C"></path> </g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#1C274C"></path> <path d="M15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868V9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059Z" fill="#1C274C"></path> </g></svg>
        `;
    const imgElement = document.createElement("img");
    imgElement.classList.add("img");
    imgElement.setAttribute("style", "width: 100%;");
    imgElement.src = getYouTubeThumbnail(values.videoLink);
    imgElement.alt = "Miniatura del video";
  


//   const p =document.createElement('p');
//  p.innerText= `name: ${values.data.name}`
//     container.appendChild(p);


    enlace.appendChild(imgElement);
    container.appendChild(enlace);
    container.appendChild(svgIcon);

    return container.outerHTML;
  }

  function getYouTubeThumbnail(url) {
    if(!url.includes("www.youtube.com") ) {return "https://omnichannel-prod-unlayer-resources.s3.us-east-1.amazonaws.com/1741989873012-blanco.png"};
    const videoId = url.split("v=")[1]?.split("&")[0]; // Extrae el ID del video
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }
