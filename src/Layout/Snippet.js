import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
SyntaxHighlighter.registerLanguage('jsx', jsx);

const Snippet = ({ component: Component, code, name }) => 
{
  const [showCode, setShowCode] = useState(false);

  return (
    <div>
      
      <h3 className='ui header'>
        {name}
        <div style={{ float:'right', cursor: 'pointer' }}>
          <CopyToClipboard text={code}>
            <i className='copy link icon' data-content='Copy code'></i>
          </CopyToClipboard>
          <i className='code link icon' onClick={() => setShowCode(!showCode)}></i>
        </div>
      </h3>              
      <Component />
      {showCode && 
        <SyntaxHighlighter language='jsx' style={atomDark}>
          {code}
        </SyntaxHighlighter>}
    </div>
  );
};

Snippet.propTypes = {
  component: PropTypes.func,
  code: PropTypes.string, 
  name: PropTypes.string
};

export { Snippet };