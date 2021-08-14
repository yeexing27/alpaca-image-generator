import logo from "./logo.svg";
import "./App.css";
import Alpaca from "./components/alpaca";
import Button from "./components/button";
import React, { useEffect, useState } from "react";
import { buttonData } from "./data/buttonData";
import download from "downloadjs";

function App() {
  const [button, setButton] = useState(buttonData);
  const [buttonOption, setButtonOption] = useState(
    button.find((b) => b.category === "backgrounds")
  );
  const [category, setCategory] = useState("backgrounds");
  const [accessories, setAccessories] = useState("earings");
  const [backgrounds, setBackgrounds] = useState("blue50");
  const [ears, setEars] = useState("default");
  const [eyes, setEyes] = useState("default");
  const [hair, setHair] = useState("default");
  const [leg, setLeg] = useState("default");
  const [mouth, setMouth] = useState("default");
  const [neck, setNeck] = useState("default");
  const [nose, setNose] = useState("nose");

  const alpacaAttr = {
    accessories,
    backgrounds,
    ears,
    eyes,
    hair,
    leg,
    mouth,
    neck,
    nose,
  };

  const randomValue = (array) => {
    let index = Math.floor(Math.random() * (array.length - 1));
    return array[index];
  };

  const showOption = (category) => {
    let options = button.find((b) => b.category === category);
    setButtonOption(options);
    setCategory(category);
  };

  const downloadAlpaca = () => {
    const canvas = document.createElement("canvas");
    const width = 720;
    const height = 720;

    canvas.width = width;
    canvas.height = height;

    const alpacaDrawing = document.getElementById("alpaca").children;
    const paper = canvas.getContext("2d");

    for (let part of alpacaDrawing) {
      paper.drawImage(part, 0, 0, width, height);
    }

    const drawingFile = canvas.toDataURL("image/png");

    download(drawingFile, "alpaca-testing");
  };
  const chgImage = (option, category) => {
    switch (category) {
      case "backgrounds":
        setBackgrounds(option);
        break;
      case "accessories":
        setAccessories(option);
        break;
      case "ears":
        setEars(option);
        break;
      case "eyes":
        setEyes(option);
        break;
      case "hair":
        setHair(option);
        break;
      case "leg":
        setLeg(option);
        break;
      case "mouth":
        setMouth(option);
        break;
      case "neck":
        setNeck(option);
        break;
      case "nose":
        setNose(option);
        break;
    }
  };
  const randomImage = (data) => {
    data.map((d) => {
      chgImage(randomValue(d.option), d.category);
    });
  };
  return (
    <div>
      <h1 className="title">ALPACA IMAGE GENERATOR</h1>
      <div className="container">
        <div className="alpaca-container">
          <Alpaca alpacaAttr={alpacaAttr} />
          <div className="download-btn-container">
            <button className="btn" onClick={() => downloadAlpaca()}>
              Download
            </button>
            <button className="btn" onClick={() => randomImage(button)}>
              Random
            </button>
          </div>
        </div>

        <div className="btn-container">
          <Button
            button={button}
            buttonOption={buttonOption}
            showOption={showOption}
            chgImage={chgImage}
            category={category}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
