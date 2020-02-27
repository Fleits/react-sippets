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
const UseStateCode = `import React, { useState } from 'react';

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

export { UseState, UseStateCode };