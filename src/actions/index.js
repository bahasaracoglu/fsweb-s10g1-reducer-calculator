export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_PLUS = "MEMORY_PLUS";
export const MEMORY_TO_TOTAL = "MEMORY_TO_TOTAL";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operation) => {
  console.log(operation);
  return { type: CHANGE_OPERATION, payload: operation };
};

export const clearDisplay = (e) => {
  console.log(e);
  return { type: CLEAR_DISPLAY };
};

export const memoryPlus = () => {
  return { type: MEMORY_PLUS };
};

export const memoryToTotal = () => {
  return {
    type: MEMORY_TO_TOTAL,
  };
};

export const memoryClear = () => {
  return {
    type: MEMORY_CLEAR,
  };
};
