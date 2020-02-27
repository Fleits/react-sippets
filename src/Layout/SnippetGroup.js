import React from 'react';
import PropTypes from 'prop-types';
import { Snippet } from './Snippet';

const SnippetGroup = ({ name, items }) => 
{
  return (
    <div className='ui vertical segment'>
      <h1>      {name}
      </h1>
      {Object.keys(items).map(key => 
      {
        return <Snippet key={key} name={key} component={items[key]} />;
      })}
    </div>
  );
};

SnippetGroup.propTypes = {

};

export { SnippetGroup };