import React, { useState } from 'react';

const Context = React.createContext(0);

const Basic = () => 
{
  const [value, setValue] = useState(0);
  return (
    <>
      <button onClick={() => setValue(value + 1)}>add</button>
      <Context.Provider value={value}>
        <Child text='Child 1' />
        <Child text='Child 2' />
      </Context.Provider>
    </>
  );
};

const Child = ({ text }) => 
{
  return (<Context.Consumer>
    {value => <div>{text} {value}</div>}
  </Context.Consumer>);
};

const code =`import React, { useState } from 'react';

const Context = React.createContext(0);

const Basic = () => 
{
  const [value, setValue] = useState(0);
  return (
    <>
      <button onClick={() => setValue(value + 1)}>add</button>
      <Context.Provider value={value}>
        <Child text='Child 1' />
        <Child text='Child 2' />
      </Context.Provider>
    </>
  );
};

const Child = ({ text }) => 
{
  return (<Context.Consumer>
    {value => <div>{text} {value}</div>}
  </Context.Consumer>);
};
`;

const name = 'Functional Consumer';
const meta = { component: Basic, code, name };

export default meta;