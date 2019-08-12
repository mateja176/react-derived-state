import React from 'react';

const Counter: React.FC<{ count: number }> = ({ count }) => {
  const [countWithInitialValue] = React.useState(count);
  const [derivedCount, setDerivedCount] = React.useState(count);

  React.useEffect(() => {
    setDerivedCount(count);
  }, [count]);

  return (
    <div>
      <div>Count: {count}</div>
      <div>Count with initial value: {countWithInitialValue}</div>
      <div
        onClick={() => {
          setDerivedCount(derivedCount + 1);
        }}
      >
        Derived Count: {derivedCount}
      </div>
    </div>
  );
};

export default Counter;
