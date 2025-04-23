export const APPLY_NUMBER = 'APPLY_NUMBER';
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const CALCULATE_RESULT = 'CALCULATE_RESULT';
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const ADD_MEMORY = 'ADD_MEMORY';
export const MEMORY_RECALL = 'MEMORY_RECALL';
export const MEMORY_CLEAR = 'MEMORY_CLEAR';

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: Number(number) };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const calculateResult = () => {
  return { type: CALCULATE_RESULT };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const addMemory = () => {
  return { type: ADD_MEMORY };
};

export const memoryRecall = () => {
  return { type: MEMORY_RECALL };
};

export const memoryClear = () => {
  return { type: MEMORY_CLEAR };
};
