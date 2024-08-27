import "./welcome_slide.css";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from "../../../../config/firebase"
import { useState } from "react";

interface prop {
  nextClick: Function;
  prevClick: Function;
  setBio: React.Dispatch<React.SetStateAction<string>>;
  setProfilePhoto:React.Dispatch<React.SetStateAction<string>>
}

const BioPhotoScreen: React.FC<prop> = ({ nextClick, prevClick,setBio,setProfilePhoto }) => {
  function handleClickNext() {
    //Do some validation here
    nextClick();
    }
    
    function handleClickPrev() {
      //Do some validation here
      handleUploadAndPreview()
      prevClick();
  }

  const [image,setImage]= useState(null)
  
    const handleImageChange = (e:any) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUploadAndPreview = () => {
    if (image) {

      const storageRef = ref(storage, `profileImages/${new Date().getTime() }`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
        },
        (error) => {
          console.error('Upload error:', error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setProfilePhoto(downloadURL);
          });
        }
      );
    }
  };

  return (
    <div className="main_signup_container bio_photo">
      <button onClick={handleClickPrev} className="float_back_button_auth">
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="300"
          height="300"
          viewBox="0 0 16 16"
        >
          <path
            fill="#000000"
            fill-rule="evenodd"
            d="M10.53 2.97a.75.75 0 0 1 0 1.06L6.56 8l3.97 3.97a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0"
            clip-rule="evenodd"
          />
        </svg>
        <input type="file" onChange={handleImageChange} />
      </button>
      <div className="main_signup_content">
        <div className="logo_section"></div>
        <div className="signup_content_proper">
          <div className="upload_photo_section">
            <span>Upload your profile photo</span>
            <div className="image_container">
              <svg
                width="160"
                height="160"
                viewBox="0 0 160 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="160" height="160" rx="80" fill="#DCDCDC" />
                <path
                  d="M73.568 65.652C73.8178 65.1554 74.2006 64.7379 74.6738 64.4462C75.1471 64.1545 75.6921 64 76.248 64H83.776C84.3334 64 84.8798 64.1553 85.3539 64.4486C85.828 64.7418 86.211 65.1613 86.46 65.66L87.63 68H91.01C92.336 68 93.6078 68.5268 94.5455 69.4645C95.4832 70.4021 96.01 71.6739 96.01 73V80.522C94.8723 79.5782 93.5555 78.8742 92.1388 78.4525C90.722 78.0307 89.2346 77.9 87.766 78.068C87.29 76.1764 86.1396 74.5238 84.5311 73.4205C82.9225 72.3173 80.9665 71.8394 79.0304 72.0766C77.0943 72.3139 75.3115 73.2499 74.017 74.7089C72.7224 76.1679 72.0051 78.0495 72 80C71.9993 81.7861 72.5964 83.521 73.6961 84.9284C74.7958 86.3357 76.3348 87.3347 78.068 87.766C77.8257 89.91 78.2194 92.078 79.2 94H69.012C67.6859 94 66.4141 93.4732 65.4764 92.5355C64.5387 91.5979 64.012 90.3261 64.012 89V73C64.012 71.6739 64.5387 70.4021 65.4764 69.4645C66.4141 68.5268 67.6859 68 69.012 68H72.392L73.568 65.652ZM80 74C82.786 74 85.128 75.9 85.804 78.472C84.0741 78.9988 82.5004 79.9431 81.2217 81.2218C79.9431 82.5004 78.9987 84.0741 78.472 85.804C77.0636 85.431 75.839 84.5585 75.0265 83.3492C74.214 82.1399 73.8691 80.6763 74.0561 79.2315C74.2431 77.7866 74.9493 76.4591 76.043 75.4965C77.1366 74.534 78.543 74.0021 80 74ZM98 89C98 91.3869 97.0518 93.6761 95.3639 95.364C93.6761 97.0518 91.3869 98 89 98C86.613 98 84.3238 97.0518 82.636 95.364C80.9482 93.6761 80 91.3869 80 89C80 86.6131 80.9482 84.3239 82.636 82.636C84.3238 80.9482 86.613 80 89 80C91.3869 80 93.6761 80.9482 95.3639 82.636C97.0518 84.3239 98 86.6131 98 89ZM90 85C90 84.7348 89.8946 84.4804 89.7071 84.2929C89.5195 84.1054 89.2652 84 89 84C88.7347 84 88.4804 84.1054 88.2929 84.2929C88.1053 84.4804 88 84.7348 88 85V88H85C84.7347 88 84.4804 88.1054 84.2929 88.2929C84.1053 88.4804 84 88.7348 84 89C84 89.2652 84.1053 89.5196 84.2929 89.7071C84.4804 89.8946 84.7347 90 85 90H88V93C88 93.2652 88.1053 93.5196 88.2929 93.7071C88.4804 93.8946 88.7347 94 89 94C89.2652 94 89.5195 93.8946 89.7071 93.7071C89.8946 93.5196 90 93.2652 90 93V90H93C93.2652 90 93.5195 89.8946 93.7071 89.7071C93.8946 89.5196 94 89.2652 94 89C94 88.7348 93.8946 88.4804 93.7071 88.2929C93.5195 88.1054 93.2652 88 93 88H90V85Z"
                  fill="#040404"
                />
              </svg>
            </div>
          </div>
          <div className="upload_bio_section">
            <span>Let others see your bio</span>
            <textarea
              name="bio_text_area"
              id="bio_input"
              placeholder="Write soemthing about yourself (e.g skill achievements)"
              onChange={(e:any)=>{setBio(e.target.value)}}
            ></textarea>
          </div>
          <button
            onClick={() => {
              handleClickNext();
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BioPhotoScreen;
