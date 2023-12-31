export const setUserInput = (input) => ({
  type: "SET_USER_INPUT",
  payload: input,
});

export const setArray = (array) => ({
  type: "SET_ARRAY",
  payload: array,
});

export const setSelected = (selected) => ({
  type: "SET_SELECTED",
  payload: selected,
});

export const setSortingComplete = (complete) => ({
  type: "SET_SORTING_COMPLETE",
  payload: complete,
});

export const setIterations = (iterations) => ({
  type: "SET_ITERATIONS",
  payload: iterations,
});

export const setElapsedTime = (elapsedTime) => ({
  type: "SET_ELAPSED_TIME",
  payload: elapsedTime,
});
