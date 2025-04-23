import {
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CALCULATE_RESULT,
  CLEAR_DISPLAY,
  ADD_MEMORY,
  MEMORY_RECALL,
  MEMORY_CLEAR,
} from '../store/actions.jsx';

export const initialState = {
  total: '0',
  operation: '+',
  accumulator: 0,
  memory: 0,
  newInput: true,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case APPLY_NUMBER:
      return {
        ...state,
        total: state.newInput
          ? action.payload.toString()
          : state.total + action.payload.toString(),
        newInput: false,
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        total: '0',
        operation: action.payload,
        accumulator: parseFloat(state.total),
        newInput: true,
      };

    case CALCULATE_RESULT: {
      const result = calculateResult(
        parseFloat(state.accumulator),
        parseFloat(state.total),
        state.operation
      );
      return {
        ...state,
        total: result.toString(),
        accumulator: parseFloat(state.total),
        newInput: true,
      };
    }

    case CLEAR_DISPLAY:
      return {
        ...state,
        total: '0',
        newInput: true,
      };

    case ADD_MEMORY:
      return {
        ...state,
        memory: parseFloat(state.total),
      };

    case MEMORY_RECALL:
      return {
        ...state,
        total: state.memory,
      };

    case MEMORY_CLEAR:
      return {
        ...state,
        memory: 0,
      };

    default:
      return state;
  }
};

export default reducer;
