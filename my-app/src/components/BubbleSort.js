import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserInput,
  setArray,
  setSelected,
  setSortingComplete,
  setIterations,
  setElapsedTime,
} from "../redux/actions";
import BubbleSortVisualizer from "./BubbleSortVisualizer";
import "./../BubbleSort.css";

function BubbleSort() {
  const dispatch = useDispatch();
  const {
    userInput,
    array,
    selected,
    sortingComplete,
    iterations,
    elapsedTime,
  } = useSelector((state) => state);

  const swapIndex = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };

  const bubbleSort = async (arr) => {
    let i, j;
    let len = arr.length;
    let isSwapped = false;
    let iterations = 0;

    const startTime = performance.now();

    for (i = 0; i < len; i++) {
      isSwapped = false;

      for (j = 0; j < len - i - 1; j++) {
        await new Promise((resolve) => setTimeout(resolve, 100));

        if (arr[j] > arr[j + 1]) {
          swapIndex(arr, j, j + 1);
          isSwapped = true;
        }
        dispatch(setSelected(j));
        dispatch(setArray([...arr]));
      }

      iterations++;

      if (!isSwapped) {
        break;
      }
    }

    const endTime = performance.now();
    const elapsedTime = endTime - startTime;

    dispatch(setSortingComplete(true));
    dispatch(setIterations(iterations));
    dispatch(setElapsedTime(elapsedTime));
  };

  const startBubbleSort = () => {
    const inputArray = userInput.split(",").map((num) => parseInt(num));
    dispatch(setSortingComplete(false));
    bubbleSort(inputArray);
  };

  return (
    <>
      <input
        className="input-field"
        placeholder="Enter Unsorted Numbers"
        type="text"
        onChange={(e) => dispatch(setUserInput(e.target.value))}
      ></input>
      <BubbleSortVisualizer
        array={array}
        selected={selected}
        sortingComplete={sortingComplete}
      />
      <button onClick={startBubbleSort} className="button-style">
        Bubble Sort
      </button>
      <p className="boldAndMargin">Iterations: {iterations}</p>
      <p className="boldAndMargin">
        Elapsed Time: {elapsedTime.toFixed(2)} milliseconds
      </p>
    </>
  );
}

export default BubbleSort;
