import React from 'react';
import ReactMarkdown from 'react-markdown';
import Carousel from './Carousel';

const MarkdownRenderer = ({ content, inline = false }) => {
  if (typeof content === 'string') {
    if (inline) {
      // For inline content, render without wrapping paragraph tags
      return <ReactMarkdown components={{
        p: ({ children }) => <span>{children}</span>
      }}>{content}</ReactMarkdown>;
    }
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
        return <Carousel key={idx} items={item.items} />;
      }
      return null;
    });
  }
  return null;
};

export default MarkdownRenderer;
