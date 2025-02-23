import { create } from 'zustand';

interface ICounter {
  counter: number;
  inc: () => void;
  dec: () => void;
}

export const useCounterStore = create<ICounter>((set) => ({
  counter: 0,
  inc: () => set((state) => ({ counter: state.counter + 1 })),
  dec: () => set((state) => ({ counter: state.counter - 1 })),
}));

// селекторы для удобного получения значений из стора как в редуксе (необязательно)
export const selectCounter = (state: ICounter) => state.counter;
export const selectInc = (state: ICounter) => state.inc;
export const selectDec = (state: ICounter) => state.dec;
