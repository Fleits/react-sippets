import React, { useState } from 'react';

const Context = React.createContext(0);

const ChangeValueInConsumer = () => 
{
  const [number, setValue] = useState(0);
  return (
    <>      
      <Context.Provider value={{ number, setValue }}>
        <Child text='Child 1' />
        <Child text='Child 2' />
      </Context.Provider>
    </>
  );
};

const Child = ({ text }) => 
{
  return (<Context.Consumer>
    {({ number, setValue }) => <div>{text} {number} <button onClick={() => setValue(number + 1)}>add</button></div>}
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

const name = 'Change value in Consumer';
const meta = { component: ChangeValueInConsumer, code, name };

export default meta;