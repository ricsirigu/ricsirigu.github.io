import React from 'react';

interface Props {
  content: string;
}

const FormatHtml: React.FC<Props> = ({ content }) => (
  <div
    className="format-html"
    dangerouslySetInnerHTML={{
      __html: content
    }}
  />
);

export default FormatHtml;
