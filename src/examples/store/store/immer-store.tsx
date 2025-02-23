import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// Определяем интерфейс нашего состояния
interface TodoState {
  todos: Array<{
    id: number;
    text: string;
    completed: boolean;
  }>;
  // Методы для изменения состояния
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

// Создаем store с использованием immer и persist
export const useTodoStore = create<TodoState>()(
  // persist сохраняет состояние в localStorage
  persist(
    // immer позволяет мутировать состояние напрямую
    immer((set) => ({
      todos: [],

      // Добавление новой задачи
      addTodo: (text: string) =>
        set((state) => {
          // Благодаря immer можем напрямую пушить в массив
          state.todos.push({
            id: Date.now(),
            text,
            completed: false,
          });
        }),

      // Переключение статуса задачи
      toggleTodo: (id: number) =>
        set((state) => {
          // Находим нужную задачу и меняем её статус
          const todo = state.todos.find((t) => t.id === id);
          if (todo) {
            todo.completed = !todo.completed;
          }
        }),

      // Удаление задачи
      removeTodo: (id: number) =>
        set((state) => {
          // Фильтруем массив, удаляя нужную задачу
          state.todos = state.todos.filter((t) => t.id !== id);
        }),
    })),
    {
      name: 'todo-storage', // Уникальное имя для localStorage
    },
  ),
);

// Пример того же store без использования immer:
/*
export const useTodoStoreWithoutImmer = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],

      // Добавление новой задачи
      addTodo: (text: string) =>
        set((state) => ({
          // Необходимо создавать новый массив и копировать все существующие элементы
          todos: [...state.todos, {
            id: Date.now(),
            text,
            completed: false,
          }],
        })),

      // Переключение статуса задачи
      toggleTodo: (id: number) =>
        set((state) => ({
          // Необходимо создавать новый массив и мапить все элементы
          todos: state.todos.map((todo) =>
            todo.id === id
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
        })),

      // Удаление задачи
      removeTodo: (id: number) =>
        set((state) => ({
          // Filter создает новый массив, поэтому здесь проще
          todos: state.todos.filter((t) => t.id !== id),
        })),
    }),
    {
      name: 'todo-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
*/
