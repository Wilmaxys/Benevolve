import React from 'react';
import './BoxImage.scss';

const BoxImage = ({ image }) => {
  return (
    <div className="box_header">
      <img src={image} alt="Server" className="box_header_image" />
    </div>
  );
};

export default BoxImage;
