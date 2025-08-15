import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownRenderer = ({ content }) => {
  if (typeof content === 'string') {
    return <ReactMarkdown>{content}</ReactMarkdown>;
  }
  if (Array.isArray(content)) {
    return content.map((item, idx) => {
      if (typeof item === 'string') {
        return <ReactMarkdown key={idx}>{item}</ReactMarkdown>;
      }
      if (item.type === 'image') {
        return <img key={idx} src={item.src} alt={item.alt || ''} className="my-4 rounded shadow" />;
      }
      if (item.type === 'video') {
        return (
          <video key={idx} controls className="my-4 rounded shadow max-w-full">
            <source src={item.src} type={item.mimeType || 'video/mp4'} />
            Your browser does not support the video tag.
          </video>
        );
      }
      if (item.type === 'carousel' && Array.isArray(item.items)) {
        // Simple horizontal scroll carousel for images/videos
        return (
          <div key={idx} className="flex space-x-4 overflow-x-auto my-4 pb-2">
            {item.items.map((media, i) =>
              media.type === 'image' ? (
                <img key={i} src={media.src} alt={media.alt || ''} className="h-40 rounded shadow" />
              ) : media.type === 'video' ? (
                <video key={i} controls className="h-40 rounded shadow">
                  <source src={media.src} type={media.mimeType || 'video/mp4'} />
                </video>
              ) : null
            )}
          </div>
        );
      }
      return null;
    });
  }
  return null;
};

export default MarkdownRenderer;
