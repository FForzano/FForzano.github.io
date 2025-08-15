import React, { useState, useRef } from 'react';

const ArrowLeft = (props) => (
  <svg viewBox="0 0 24 24" fill="none" width={28} height={28} {...props}><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const ArrowRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" width={28} height={28} {...props}><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0);
  const [dragDelta, setDragDelta] = useState(0); // per animazione rotazione
  const goTo = (idx) => { setCurrent(idx); setDragDelta(0); };
  const prev = () => { setCurrent((c) => (c === 0 ? items.length - 1 : c - 1)); setDragDelta(0); };
  const next = () => { setCurrent((c) => (c === items.length - 1 ? 0 : c + 1)); setDragDelta(0); };

  // Touch/mouse swipe support

  return (
  <div className="flex flex-col items-center justify-center w-full mt-4 mb-4">
      <div
        className="relative w-full max-w-2xl flex justify-center items-center px-2 sm:px-8 select-none"
        style={{ minHeight: '18rem' }}
      >
        <button
          onClick={prev}
          className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 dark:bg-neutral-800/80 rounded-full shadow-lg hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors border border-neutral-200 dark:border-neutral-700"
          aria-label="Precedente"
          style={{ transform: 'translateY(-50%)' }}
        >
          <ArrowLeft className="text-primary-600 dark:text-primary-400" />
        </button>
        <div className="w-full flex justify-center items-center transition-all duration-500" style={{ perspective: '1200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {items[current].type === 'image' ? (
            <img
              src={items[current].src}
              alt={items[current].alt || ''}
              className="max-h-80 sm:max-h-[28rem] max-w-full rounded-2xl shadow-xl object-contain border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 transition-all duration-500 mx-auto"
              style={{ boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10)', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            />
          ) : items[current].type === 'video' ? (
            <video controls className="max-h-80 sm:max-h-[28rem] max-w-full rounded-2xl shadow-xl border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 transition-all duration-500 mx-auto"
              style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
              <source src={items[current].src} type={items[current].mimeType || 'video/mp4'} />
            </video>
          ) : null}
        </div>
        <button
          onClick={next}
          className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 dark:bg-neutral-800/80 rounded-full shadow-lg hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors border border-neutral-200 dark:border-neutral-700"
          aria-label="Successivo"
          style={{ transform: 'translateY(-50%)' }}
        >
          <ArrowRight className="text-primary-600 dark:text-primary-400" />
        </button>
      </div>
      {/* Thumbnails */}
      <div className="flex mt-4 space-x-2 overflow-x-auto pb-1">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`border-2 rounded-lg focus:outline-none transition-all duration-200 ${idx === current ? 'border-primary-500 shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'}`}
            aria-label={`Vai a ${idx + 1}`}
            style={{ padding: 0, background: 'none' }}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt || ''}
                className="h-12 w-16 object-cover rounded-lg"
                style={{ filter: idx === current ? 'none' : 'grayscale(0.5)' }}
              />
            ) : item.type === 'video' ? (
              <div className="h-12 w-16 bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center rounded-lg">
                <span className="text-xs text-neutral-600 dark:text-neutral-300">Video</span>
              </div>
            ) : null}
          </button>
        ))}

      </div>
    </div>
  );
};

export default Carousel;
