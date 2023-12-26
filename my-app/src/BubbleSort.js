import React, { useState } from "react";
import "./BubbleSort.css";

function BubbleSort({ userInput }) {
  const [array, setArray] = useState([]);
  const [selected, setSelected] = useState(0);
  const [sortingComplete, setSortingComplete] = useState(false);

  const swapIndex = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };

  const bubbleSort = async (arr) => {
    let i, j;
    let len = arr.length;
    let isSwapped = false;

    for (i = 0; i < len; i++) {
      isSwapped = false;

      for (j = 0; j < len - i - 1; j++) {
        await new Promise((resolve) => setTimeout(resolve, 300));

        if (arr[j] > arr[j + 1]) {
          swapIndex(arr, j, j + 1);
          isSwapped = true;
        }
        setSelected(j);
        setArray([...arr]);
      }

      if (!isSwapped) {
        break;
      }
    }

    setSortingComplete(true);
  };

  const startBubbleSort = () => {
    const inputArray = userInput.split(",").map((num) => parseInt(num));
    setSortingComplete(false);
    bubbleSort(inputArray);
  };

  return (
    <>
      <div className="array-container">
        {array.map((item, index) => (
          <h1
            key={index}
            className={`array-item ${
              index === selected || index === selected + 1
                ? sortingComplete
                  ? "sorted-item"
                  : "selected"
                : ""
            }`}
          >
            {item}
          </h1>
        ))}
      </div>
      <button onClick={startBubbleSort} className="button-style">
        Bubble Sort
      </button>
    </>
  );
}

export default BubbleSort;
