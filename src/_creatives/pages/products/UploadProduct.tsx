import React, { useState, ChangeEvent, FormEvent } from 'react';
import { IonContent, IonIcon, IonPage, IonProgressBar } from '@ionic/react';
import './Products.css';
import BackBtn from '../../../components/BackBtn';
import {
  chevronForward,
  cloudUpload,
  pencilSharp,
  save,
  sparklesSharp,
} from 'ionicons/icons';

const UploadProduct: React.FC = () => {
  const [image, setImage] = useState(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);

  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  const steps = [
    { number: 1, title: 'Write in text' },
    { number: 2, title: 'Post Audio' },
    { number: 3, title: 'Upload Video' },
    { number: 4, title: 'Product Specifications' },
  ];

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
                <IonIcon size="large" icon={pencilSharp} />
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
            <h3>Tell the story behing your art</h3>
            <div className="tab-btn-container">
              <button className="active">Write in text</button>
              <button>Post Audio</button>
              <button>Upload Video</button>
            </div>

            <div className="progress-bar-container">
              {steps.map((s) => (
                <div
                  key={s.number}
                  className={`progress-step ${
                    s.number === step || s.number < step ? 'active' : ''
                  }`}
                >
                  <div className="step-number">
                    <p>{s.number}</p>
                  </div>
                  <div className="step-title">{s.title}</div>
                </div>
              ))}
              <IonProgressBar
                value={(step - 1) / 3}
                className="progress-bar"
              ></IonProgressBar>
            </div>

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
                  <button className="btn-save-text" onClick={
                    handleNextStep
                  }>
                    <span>Next</span>
                    <IonIcon icon={chevronForward} />
                  </button>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="audio-tab">
                <div>
                  <input
                    type="file"
                    id="audio-input"
                    accept="audio/*"
                    onChange={handleAudioFileChange}
                    required
                  />

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

                  <button
                    className="btn-save-text"
                    onClick={() => {
                      handleFormSubmit;
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
                    type="file"
                    accept=".mp4"
                    style={{ margin: '0 auto', width: '90%' }}
                    onChange={handleFileChange}
                  />
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
                <button className="btn-save-text">
                  <IonIcon icon={save} />
                  <span>Save and Continue</span>
                </button>
              </div>
            )}
            {step === 4 && (
              <div className="product-specifications">
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
              </div>
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default UploadProduct;
