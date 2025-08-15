import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0);
  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((c) => (c === 0 ? items.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === items.length - 1 ? 0 : c + 1));

  const currentItem = items[current];

  return (
    <div className="w-full flex flex-col items-center my-4">
      <div className="relative w-full flex justify-center items-center">
        <button onClick={prev} className="absolute left-0 z-10 p-2 bg-white/70 dark:bg-neutral-800/70 rounded-full shadow hover:bg-white dark:hover:bg-neutral-700" aria-label="Precedente">
          &#8592;
        </button>
        {currentItem.type === 'image' ? (
          <img src={currentItem.src} alt={currentItem.alt || ''} className="max-h-80 max-w-full rounded shadow object-contain" />
        ) : currentItem.type === 'video' ? (
          <video controls className="max-h-80 max-w-full rounded shadow">
            <source src={currentItem.src} type={currentItem.mimeType || 'video/mp4'} />
          </video>
        ) : null}
        <button onClick={next} className="absolute right-0 z-10 p-2 bg-white/70 dark:bg-neutral-800/70 rounded-full shadow hover:bg-white dark:hover:bg-neutral-700" aria-label="Successivo">
          &#8594;
        </button>
      </div>
      <div className="flex mt-2 space-x-2">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 rounded-full border-2 ${idx === current ? 'bg-primary-500 border-primary-500' : 'bg-neutral-300 dark:bg-neutral-700 border-neutral-400 dark:border-neutral-600'}`}
            aria-label={`Vai a ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
