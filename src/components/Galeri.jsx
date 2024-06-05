import React from "react";

const Galeri = ({
  src,
  alt,
  onClose,
  maxWidth = "50vw",
  maxHeight = "50vh",
}) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative">
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-full"
          style={{ maxWidth, maxHeight }}
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Galeri;
