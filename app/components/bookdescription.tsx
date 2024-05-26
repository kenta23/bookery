import React from 'react';
import sanitizeHtml from 'sanitize-html';

const sanitizeContent = (htmlContent: any) => {
  return sanitizeHtml(htmlContent, {
    allowedTags: ['p', 'br'], // Allow only certain tags
    allowedAttributes: {}, // Disallow all attributes
  });
};

const BookDescription = ({ description }: any) => {
  const sanitizedDescription = sanitizeContent(description);

  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
  );
};

export default BookDescription;