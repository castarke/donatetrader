import React, { useEffect } from "react";

const CloudinaryUploadWidget = ({ setParentVariable }) => {
  useEffect(() => {
    const handleUploadWidget = (event) => {
      event.preventDefault()
      window.cloudinary.openUploadWidget(
        {
          cloudName: "dzflmgr7f",
          uploadPreset: "akamazip",
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            let imageUrl = result.info.url
            console.log(2, imageUrl)
            document.getElementById("itemImage").src = imageUrl
          }
        }
      ) 
    };

    document.getElementById("upload_widget").addEventListener(
      "click",
      handleUploadWidget,
      false
    );
  }, [setParentVariable]);

  return (
    <button id="upload_widget" className="cloudinary-button">
      Upload
    </button>
  );
};

export default CloudinaryUploadWidget;