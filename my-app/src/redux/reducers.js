const initialState = {
  userInput: "",
  array: [],
  selected: 0,
  sortingComplete: false,
  iterations: 0,
  elapsedTime: 0,
};

const bubbleSortReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_INPUT":
      return { ...state, userInput: action.payload };
    case "SET_ARRAY":
      return { ...state, array: action.payload };
    case "SET_SELECTED":
      return { ...state, selected: action.payload };
    case "SET_SORTING_COMPLETE":
      return { ...state, sortingComplete: action.payload };
    case "SET_ITERATIONS":
      return { ...state, iterations: action.payload };
    case "SET_ELAPSED_TIME":
      return { ...state, elapsedTime: action.payload };
    default:
      return state;
  }
};

export default bubbleSortReducer;
