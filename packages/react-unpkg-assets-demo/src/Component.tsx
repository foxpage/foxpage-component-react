import React from 'react';
import { ComponentProps } from './typing';
import SvgImage from './assets/airport.svg';
import JpegImage from './assets/avatar.jpeg';
import WebpImage from './assets/avatar.webp';
import './index.scss';

const ReactUnpkgAssetsDemo: React.FC<ComponentProps> = () => {
  return (
    <div>
      <h1>Test assets in css</h1>
      <div>
        <h2>Test svg: </h2>
        <div className="css-svg" />
      </div>
      <div>
        <h2>Test jpeg: </h2>
        <div className="css-jpeg" />
      </div>
      <div>
        <h2>Test webp: </h2>
        <div className="css-webp" />
      </div>
      <h1>Test assets in js</h1>
      <div>
        <h2>Test svg: </h2>
        <img src={SvgImage} className="image-box" alt="js svg" />
      </div>
      <div>
        <h2>Test jpeg: </h2>
        <img src={JpegImage} className="image-box" alt="js jpeg" />
      </div>
      <div>
        <h2>Test webp: </h2>
        <img src={WebpImage} className="image-box" alt="js webp" />
      </div>
    </div>
  );
};

export default ReactUnpkgAssetsDemo;
