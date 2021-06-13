export const initialState = {
  list: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'addToList':
      const idx = state.list.findIndex(item => item.id === action.payload.id);
      const filteredList = state.list.filter(
        item => item.id !== action.payload.id,
      );

      if (idx >= 0) {
        return {
          ...state,
          list: filteredList,
        };
      }

      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case 'removeFromList':
      const newList = state.list.filter(item => item.id !== action.payload);

      return {
        ...state,
        list: newList,
      };

    default:
      return state;
  }
};
