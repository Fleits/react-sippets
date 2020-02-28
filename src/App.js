import React from 'react';
import { Snippets } from './Snippets';
import { SnippetGroup } from 'Layout/SnippetGroup';
import 'fomantic-ui-css/semantic.min.css';

function App() 
{  
  return (
    <div className='ui text container'>
      {Snippets.flatMap((group, index) => <SnippetGroup key={index} {...group} />)}
    </div>
  );
}

export { App };