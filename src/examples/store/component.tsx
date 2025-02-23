import { selectCounter, selectDec, selectInc, useCounterStore } from './store';

export const CounterComponent = () => {
  const counter = useCounterStore(selectCounter);
  const increment = useCounterStore(selectInc);
  const decrement = useCounterStore(selectDec);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
