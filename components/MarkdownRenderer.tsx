
import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const renderContent = () => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`ul-${elements.length}`} className="list-disc list-inside space-y-2 my-4 pl-4">
            {listItems.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: parseInline(item) }}></li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    const parseInline = (text: string) => {
        return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    lines.forEach((line, index) => {
      if (line.startsWith('* ')) {
        listItems.push(line.substring(2));
      } else {
        flushList();
        if (line.trim() === '') {
          elements.push(<br key={`br-${index}`} />);
        } else {
          elements.push(
            <p key={`p-${index}`} className="my-4" dangerouslySetInnerHTML={{ __html: parseInline(line) }}></p>
          );
        }
      }
    });

    flushList(); // Make sure to render any remaining list items
    return elements;
  };

  return <div className="prose prose-invert max-w-none text-brand-text">{renderContent()}</div>;
};

export default MarkdownRenderer;
