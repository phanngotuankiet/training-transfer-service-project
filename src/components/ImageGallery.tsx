import React from 'react';
import CardCity from './CardCity';

const ImageGallery = () => {
  
    const destinations = [
        { name: "Đà Nẵng", image: "assets-src/images/path-to-danang.png" },
        { name: "Đà Nẵng", image: "assets-src/images/path-to-danang.png" },
        { name: "Đà Nẵng", image: "assets-src/images/path-to-danang.png" },
        { name: "Đà Nẵng", image: "assets-src/images/path-to-danang.png" },
        { name: "Đà Nẵng", image: "assets-src/images/path-to-danang.png" },
        { name: "Đà Nẵng", image: "assets-src/images/path-to-danang.png" },
        { name: "Đà Nẵng", image: "assets-src/images/path-to-danang.png" },


      ];

  return (
    <div className="flex flex-col space-y-4 overflow-y-auto w-full">
    {destinations.map((dest, index) => (
      <CardCity key={index} name={dest.name} image={dest.image} />
    ))}
  </div>
  );
};

export default ImageGallery;