import React from 'react';
import PropTypes from 'prop-types';
import { Snippet } from './Snippet';

const SnippetGroup = ({ name, snippets }) => 
{
  return (
    <div className='ui vertical segment'>
      <h1>{name}</h1>
      {snippets.map((snippet, index) => <Snippet key={index} {...snippet} />)}
    </div>
  );
};

SnippetGroup.propTypes = {

};

export { SnippetGroup };