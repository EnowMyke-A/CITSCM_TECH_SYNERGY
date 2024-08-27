import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import {
  IonContent,
  IonIcon,
  IonLabel,
  IonPage,
  IonProgressBar,
} from "@ionic/react";
import "./Products.css";
import BackBtn from "../../../components/BackBtn";
import {
  chevronBack,
  chevronForward,
  cloudDownloadOutline,
  cloudUpload,
  cloudUploadOutline,
  pencilSharp,
  save,
  sparklesSharp,
} from "ionicons/icons";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from "../../../config/firebase"

const API_KEY = "AIzaSyBXanBrQOiU9qP1DrSnaic967YB2nJRMrs";
const genAI = new GoogleGenerativeAI(API_KEY);

type ChatPart = {
  text: string;
};

type ChatMessage = {
  role: "user" | "model";
  parts: ChatPart[];
};

const UploadProduct: React.FC = () => {
  const [image, setImage] = useState(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [ans, setAns] = useState("");

  const audioInputRef = useRef(null);
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [imageURL, setImageURL] = useState("");
  const [audioURL, setAudioURL] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [price, setPrice] = useState("");
  const [bid, setBid] = useState("");

  const handleButton1Click = () => {
    audioInputRef.current.click();
  };
  const handleButton2Click = () => {
    videoRef.current.click();
  };

  const handleLastStep = () => {
    setStep(4);
  };

  const [step, setStep] = useState(1);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (file.type !== "video/mp4") {
        setError("Please select a .mp4 video file.");
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
    return
  };

  const handleAudioFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setAudioFile(event.target.files[0]);
    } else {
      setAudioFile(null);
    }

    return
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

    return
  };


  const handleFilesChange = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    let storagePath = "";

    if (file.type.startsWith("image/")) {
      handleImageChange(e);
      storagePath = `productImages/${new Date().getTime()}_${file.name}`;
    } else if (file.type.startsWith("audio/")) {
      handleAudioFileChange(e)
      storagePath = `productAudio/${new Date().getTime()}_${file.name}`;
    } else if (file.type.startsWith("video/")) {
      handleFileChange(e)
      storagePath = `productVideos/${new Date().getTime()}_${file.name}`;
    } else {
      console.error("Unsupported file type");
      return;
    }

    const storageRef = ref(storage, storagePath);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Optional: Track progress here if needed
      },
      (error) => {
        console.error("Upload error:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          if (file.type.startsWith("image/")) {
            setImageURL(downloadURL);
          } else if (file.type.startsWith("audio/")) {
            setAudioURL(downloadURL);
          } else if (file.type.startsWith("video/")) {

            setVideoURL(downloadURL);
          }
          console.log("File available at", downloadURL);
        });
      }
    );
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

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const [question, setQuestion] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [material_used, setMaterial] = useState<string>("");
    const [image_name, setImageName] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [dimensions, setDimensions] = useState<string>("");
    const [story, setStory] = useState<string>("");

  const generateAnswer = async () => {
    const msg = question;

    console.log(question, "msg", msg);

    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      {
        role: "user",
        parts: [{ text: question }],
      },
    ]);

    try {
      const chat = model.startChat({
        history: chatHistory,
        generationConfig: {
          maxOutputTokens: 500,
        },
      });

      const { response } = await chat.sendMessage(msg);
      const text = await response.text();

      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        {
          role: "model",
          parts: [{ text }],
        },
      ]);

      setQuestion("");
      setAns(text);
    } catch (error) {
      console.error("Error generating answer:", error);
    }
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const post = {
      image_name,
      imageURL,
      material_used,
      category,
      dimensions,
      videoURL,
      audioURL,
      story,
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
              style={{ marginTop: "20px", maxWidth: "100%" }}
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
                  onChange={handleFilesChange}
                  style={{ display: "none" }}
                />
              </label>
            </button>
          </div>
        </div>

        {step === 4 ? (
          <div className="ion-padding product-specifications">
            <div className="input">
              <label htmlFor="material">Material Used</label>
              <input
                type="text"
                name="material"
                id="material"
                placeholder="e.g. oil on canvas"
                onChange={(e:any)=>{setMaterial(e.target.value)}}
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
                  onChange={(e:any)=>{setDimensions(e.target.value)}}
                />
              </div>
              <div className="select">
                <label htmlFor="Category">Category</label>
                <select name="" id="" onChange={(e:any)=>{setCategory(e.target.value)}}>
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
                <input type="text" name="" id="price" placeholder="$ 0.0" onChange={(e:any)=>{setPrice(e.target.value)}} />
              </div>
              <div className="select">
                <label htmlFor="available for sale">Available for sale:</label>
                <select name="" id="" onChange={(e:any)=>{setBid(e.target.value)}}>
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>
              </div>
            </div>

            <button className="btn-enhance-text">
              <IonIcon icon={cloudUpload} />
              <span>Upload Product</span>
            </button>

            <button className="btn-prev" onClick={handlePrevStep}>
              <IonIcon icon={chevronBack} /> <span>Back</span>
            </button>
          </div>
        ) : (
          <div className="post-content ion-padding">
            <div className="title">
              <label htmlFor="title">Art Title:</label>
              <input
                type="text"
                name="title"
                id="title"
                  placeholder="e.g. Across the savanah"
                  onChange={(e: any) => { setImageName(e.target.value)}}
              />
            </div>

            <div className="upload-art-container">
              <h3>Tell the story behind your art</h3>

              {step <= 3 && (
                <div className="tab-btn-container">
                  <button
                    className={step === 1 && "active"}
                    onClick={() => {
                      setStep(1);
                    }}
                  >
                    Write in text
                  </button>
                  <button
                    className={step === 2 && "active"}
                    onClick={() => {
                      setStep(2);
                    }}
                  >
                    Post Audio
                  </button>
                  <button
                    className={step === 3 && "active"}
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
                      value={ans}
                        placeholder="Story behind your art?"
                        
                      onChange={(e) => {
                        setAns(e.target.value);
                        setStory(e.target.value);
                      }}
                    ></textarea>
                  </div>

                  <div className="btn-add-edit-text">
                    <button className="btn-enhance-text">
                      <IonIcon icon={sparklesSharp} />
                      <span
                        onClick={() => {
                          generateAnswer();
                        }}
                      >
                        Enhance with AI
                      </span>
                    </button>

                    <button
                      className="btn-save-text"
                      onClick={() => {
                        handleFormSubmit;
                        handleLastStep;
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
                        story behind your art and then decide whether to
                        translate to English with Ai
                      </center>
                    </i>
                  </p>
                  <div>
                    <input
                      type="file"
                      id="audio-input"
                      name="audio-input"
                      accept="audio/*"
                      onChange={handleFilesChange}
                      style={{ display: "none" }}
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
                        handleLastStep;
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
                            maxWidth: "600px",
                            marginTop: "20px",
                            borderRadius: "4px",
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
                      style={{
                        display: "none",
                        margin: "0 auto",
                        width: "90%",
                      }}
                      onChange={handleFilesChange}
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

                    {error && <p style={{ color: "red" }}>{error}</p>}
                  </div>
                  <button className="btn-save-text" onClick={handleLastStep}>
                    <IonIcon icon={save} />
                    <span>Save and Continue</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default UploadProduct;
