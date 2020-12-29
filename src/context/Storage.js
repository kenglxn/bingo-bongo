import { createContext, useReducer, useEffect, useContext } from "react";

const STORAGE_KEY = "games";
const StorageContext = createContext([]);
const initialState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
const ACTIONS = {
  set: "set",
  create: "create",
  update: "update",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.set:
      return action.payload || [];
    case ACTIONS.create:
      return [...state, action.payload];
    case ACTIONS.update:
      return state.map((e) =>
        e.id === action.payload.id ? action.payload : e
      );
    default:
      throw new Error(`unsupported action: ${JSON.stringify(action)}`);
  }
}

const StorageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <StorageContext.Provider
      value={{
        state,
        set: (payload) => {
          dispatch({ type: ACTIONS.set, payload });
        },
        create: (item) => {
          const payload = {
            id: state.length + 1,
            created_at: Date.now(),
            ...item,
          };
          dispatch({ type: ACTIONS.create, payload });
          return payload;
        },
        update: (item) => {
          const payload = { ...item, updated: Date.now() };
          dispatch({ type: ACTIONS.update, payload });
          return payload;
        },
        find: (needle) => {
          return state.find(({ id }) => id === needle);
        },
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

const useStorage = () => useContext(StorageContext);

export { StorageProvider, StorageContext, useStorage };
