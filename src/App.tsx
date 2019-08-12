import React from 'react';
import './App.css';
import Counter from './Counter';

const App: React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <Counter count={count} />
    </div>
  );
};

export default App;
