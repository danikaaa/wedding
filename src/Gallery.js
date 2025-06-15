import { useState, useEffect } from "react";
import Modal from "./Modal";
import "./Gallery.css";

const Gallery = ({ title }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [images, setImages] = useState([]);
  const [modalSrc, setModalSrc] = useState(null);

  useEffect(() => {
    const temp = [];
    for (let i = 1; i <= 18; i++) {
      temp.push({ id: i, src: `/img/${i}.jpg` });
    }
    setImages(temp);
  }, []);

  const chunked = [];
  for (let i = 0; i < images.length; i += 3) {
    chunked.push(images.slice(i, i + 3));
  }

  const visible = isExpanded ? chunked : chunked.slice(0, 2);

  return (
    <div className="gallery">
      <h1>{title || "GALLERY"}</h1>
      <p>사진을 클릭하면 전체 화면 보기가 가능합니다.</p>

      {visible.map((row, idx) => (
        <div key={idx} className="gallery-row">
          {row.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt={`img-${img.id}`}
              className="gallery-image"
              onClick={() => setModalSrc(img.src)}
            />
          ))}
        </div>
      ))}

      <div className="gallery-toggle" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "접기" : "더보기"}
      </div>

      <Modal src={modalSrc} onClose={() => setModalSrc(null)} />
    </div>
  );
};

export default Gallery;
