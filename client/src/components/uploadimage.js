import { useState, useEffect } from 'react';
import { createUploadWidget } from 'cloudinary-react';
const cloudName = 'dzflmgr7f';
const uploadPreset = 'akamazip';

const UploadImage = () => {
  const [uploadedImage, setUploadedImage] = useState('');

  useEffect(() => {
    const myWidget = createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        multiple: false,
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          console.log('Done! Here is the image info: ', result.info);
          setUploadedImage(result.info.secure_url);
        }
      }
    );

    const uploadButton = document.getElementById('upload_widget');
    uploadButton.addEventListener('click', () => {
      myWidget.open();
    });

    return () => {
      uploadButton.removeEventListener('click', () => {
        myWidget.open();
      });
    };
  }, []);

  return (
    <div>
      <button id="upload_widget">Upload Image</button>
      {uploadedImage && (
        <img id="uploadedimage" src={uploadedImage} alt="Uploaded" />
      )}
    </div>
  );
};

export default UploadImage;