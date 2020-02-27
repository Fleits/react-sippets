import React from 'react';
import { Snippets } from './Snippets';
import { SnippetGroup } from 'Layout/SnippetGroup';
import 'fomantic-ui-css/semantic.min.css';

function App() 
{  
  return (
    <div className='ui text container'>
      {Snippets.flatMap(x => 
      {
        return Object.keys(x).flatMap(key => <SnippetGroup name={key} items={x[key]} />);      
      })}
    </div>
  );
}

export { App };