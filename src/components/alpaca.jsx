import React, { useEffect } from "react";

const Alpaca = ({ alpacaAttr }) => {
  function getImage(category, part) {
    const obj = require(`../alpaca/${category}/${part}.png`);
    return obj.default;
  }

  const { accessories, backgrounds, ears, eyes, hair, leg, mouth, neck, nose } =
    alpacaAttr;

  return (
    <div className="alpaca" id="alpaca">
      <img src={getImage("backgrounds", backgrounds)} className="backgrounds" />
      <img src={getImage("ears", ears)} className="ears" />
      <img src={getImage("neck", neck)} className="neck" />
      <img src={getImage("hair", hair)} className="hair" />
      <img src={getImage("leg", leg)} className="leg" />
      <img src={getImage("eyes", eyes)} className="eyes" />
      <img src={getImage("accessories", accessories)} className="accessories" />
      <img src={getImage("nose", nose)} className="nose" />
      <img src={getImage("mouth", mouth)} className="mouth" />
    </div>
  );
};

export default Alpaca;
