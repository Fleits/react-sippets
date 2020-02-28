import React, { useState } from 'react';

const UseState = () => 
{
  const [active, setActive] = useState(false);

  return (
    <div>
      <button 
        className={`circular mini ui ${active ? 'green' : 'red'} compact icon button`}
        onClick={() => setActive(!active)}>
        <i className='power off icon'></i>
      </button>
      <span>I am {active ? 'active' : 'inactive'}</span>
    </div>
  );
};
const code = `import React, { useState } from 'react';

const UseState = () => 
{
  const [active, setActive] = useState(false);

  return (
    <div>
      <button onClick={() => setActive(!active)}>
        {active ? 'off' : 'on'}
      </button>
      <span>I am {active ? 'active' : 'inactive'}</span>
    </div>
  );
};`;

const name = 'State';
const meta = { component: UseState, code, name };

export default meta;