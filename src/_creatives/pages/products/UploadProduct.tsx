import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { IonContent, IonIcon, IonLabel, IonPage, IonProgressBar } from '@ionic/react';
import './Products.css';
import BackBtn from '../../../components/BackBtn';
import {
  camera,
  cameraOutline,
  chevronBack,
  chevronForward,
  cloudDownloadOutline,
  cloudUpload,
  cloudUploadOutline,
  pencilSharp,
  save,
  sparklesSharp,
} from 'ionicons/icons';

const UploadProduct: React.FC = () => {
  const [image, setImage] = useState(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);

  const location = useLocation();
       const imageData = location.state?.image; 

  const audioInputRef = useRef(null);
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleButton1Click = () => {
    audioInputRef.current.click();
  };
  const handleButton2Click = () => {
    videoRef.current.click();
  };

  const handleLastStep = () => {
    setStep(4)
  }

  const [step, setStep] = useState(1);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (file.type !== 'video/mp4') {
        setError('Please select a .mp4 video file.');
        setVideoSrc(null); // Clear video preview
        return;
      }

      // Clear any previous error
      setError(null);

      const reader = new FileReader();

      reader.onload = (e) => {
        setVideoSrc(e.target?.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleAudioFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setAudioFile(event.target.files[0]);
    } else {
      setAudioFile(null);
    }
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here, you can add your code to handle the form submission
    // and send the audio file to the server
    console.log('Audio file submitted:', audioFile);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNextStep = () => {
    switch (step) {
      case 1:
        setStep(2);
        break;
      case 2:
        setStep(3);
        break;
      case 3:
        setStep(4);
        break;
      default:
        break;
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <IonPage>
      <BackBtn title="Post Your Artwork" />
      <IonContent>
        <div className="post-img">
          {image ? (
            <img
              src={image as string}
              alt="Preview"
              style={{ marginTop: '20px', maxWidth: '100%' }}
            />
          ) : (
            <></>
          )}
          <div className="img-absolute-btn">
            <button>
              <label htmlFor="image">
                <IonIcon size="large" icon={cameraOutline} />
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
              </label>
            </button>
          </div>
        </div>

{step === 4 ?
              <div className="ion-padding product-specifications">
                <div className="input">
                  <label htmlFor="material">Material Used</label>
                  <input
                    type="text"
                    name="material"
                    id="material"
                    placeholder="e.g. oil on canvas"
                  />
                </div>

                <div className="column-2-inputs column-2">
                  <div className="input">
                    <label htmlFor="Dimensions (cm)">Dimensions</label>
                    <input
                      type="text"
                      name=""
                      id="dimensions"
                      placeholder="e.g. 4 x  4"
                    />
                  </div>
                  <div className="select">
                    <label htmlFor="Category">Category</label>
                    <select name="" id="">
                      <option value="">Category</option>
                      <option value="">Sculptors</option>
                      <option value="">Painters</option>
                      <option value="">Drawing</option>
                    </select>
                  </div>
                </div>
                <div className="column-2-inputs">
                  <div className="input">
                    <label htmlFor="Price (cm)">Price</label>
                    <input type="text" name="" id="price" placeholder="$ 0.0" />
                  </div>
                  <div className="select">
                    <label htmlFor="available for sale">
                      Available for sale:
                    </label>
                    <select name="" id="">
                      <option value="">Yes</option>
                      <option value="">No</option>
                    </select>
                  </div>
                </div>

                <button className="btn-enhance-text">
                  <IonIcon icon={cloudUpload} />
                  <span>Upload Product</span>
                </button>

                <button className='btn-prev' onClick={handlePrevStep}><IonIcon icon={chevronBack} /> <span>Back</span></button>
              </div>
            :
    <div className="post-content ion-padding">
          <div className="title">
            <label htmlFor="title">Art Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="e.g. Across the savanah"
            />
          </div>

          <div className="upload-art-container">
            <h3>Tell the story behind your art</h3>

            {step <= 3 && (
              <div className="tab-btn-container">
                <button
                  className={step === 1 && 'active'}
                  onClick={() => {
                    setStep(1);
                  }}
                >
                  Write in text
                </button>
                <button
                  className={step === 2 && 'active'}
                  onClick={() => {
                    setStep(2);
                  }}
                >
                  Post Audio
                </button>
                <button
                  className={step === 3 && 'active'}
                  onClick={() => {
                    setStep(3);
                  }}
                >
                  Upload Video
                </button>
              </div>
            )}

            {step === 1 && (
              <div className="text-tab">
                <div className="input-container">
                  <textarea
                    name=""
                    id=""
                    placeholder="Story behind your art?"
                  ></textarea>
                </div>

                <div className="btn-add-edit-text">
                  <button className="btn-enhance-text">
                    <IonIcon icon={sparklesSharp} />
                    <span>Enhance with AI</span>
                  </button>

                  <button
                    className="btn-save-text"
                    onClick={() => {
                      handleFormSubmit;
                      handleLastStep
                    }}
                  >
                    <IonIcon icon={save} />
                    <span>Save and Continue</span>
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="audio-tab">
                <p>
                  <i>
                    <center>
                      Upload a recorded audio of you telling the passionate
                      story behind your art and then decide whether to translate
                      to English with Ai
                    </center>
                  </i>
                </p>
                <div>
                  <input
                    type="file"
                    id="audio-input"
                    name="audio-input"
                    accept="audio/*"
                    onChange={handleAudioFileChange}
                    style={{ display: 'none' }}
                    ref={audioInputRef}
                  />

                  <label htmlFor="audio-input">
                    <button
                      onClick={handleButton1Click}
                      className="upload-items-class"
                    >
                      <IonIcon icon={cloudUploadOutline} />
                      Browse for audio
                    </button>
                  </label>

                  <div className="preview-container">
                    {audioFile && (
                      <audio id="audio-preview" controls>
                        <source
                          src={URL.createObjectURL(audioFile)}
                          type={audioFile.type}
                        />
                        Your browser does not support the audio element.
                      </audio>
                    )}
                  </div>
                  <button className="btn-enhance-text">
                    <IonIcon icon={sparklesSharp} />
                    <span>Transcribe with AI</span>
                  </button>

                  <button
                    className="btn-save-text"
                    onClick={() => {
                      handleFormSubmit;
                      handleLastStep
                    }}
                  >
                    <IonIcon icon={save} />
                    <span>Save and Continue</span>
                  </button>

                  <style>
                    {`
          .preview-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
          }

          audio {
            width: 100%;
            max-width: 500px;
            margin-top: 10px;
          }
        `}
                  </style>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="video-tab">
                <p>
                  <i>
                    <center>
                      Upload a recorded audio of you telling the passionate
                      story behind your art
                    </center>
                  </i>
                </p>

                <div className="video-display">
                  {/* video display */}
                  {videoSrc ? (
                    <div className="preview-container">
                      <video
                        src={videoSrc}
                        controls
                        width="100%"
                        style={{
                          maxWidth: '600px',
                          marginTop: '20px',
                          borderRadius: '4px',
                        }}
                      />
                    </div>
                  ) : (
                    <div className="video-preview"></div>
                  )}
                  <br />
                  <input
                    id="video-input"
                    type="file"
                    accept=".mp4"
                    style={{ display: 'none', margin: '0 auto', width: '90%' }}
                    onChange={handleFileChange}
                    ref={videoRef}
                  />

                  <label htmlFor="video-input">
                    <button
                      onClick={handleButton2Click}
                      className="upload-items-class"
                    >
                      <IonIcon icon={cloudUploadOutline} />
                      Browse for video
                    </button>
                  </label>

                  {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
                <button className="btn-save-text" onClick={handleLastStep}>
                  <IonIcon icon={save} />
                  <span>Save and Continue</span>
                </button>
              </div>
            )}
          </div>
        </div>
}
    
      </IonContent>
    </IonPage>
  );
};

export default UploadProduct;
