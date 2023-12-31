import React from "react";
import { useSelector } from "react-redux";

const Block = ({ index, value, isSwapping, isSorted, maxNumber }) => {
  const scalingFactor = 0.8;
  const normalizedHeight = (value / maxNumber) * 100;
  return (
    <div
      className={`array-bar ${isSwapping ? "swapping" : ""} ${
        isSorted ? "sorted-bar" : ""
      }`}
      style={{
        height: `${normalizedHeight * scalingFactor}vh`,
        transform: `translate(${index * 30}px)`,
      }}
    >
      <label className="block_id">{value}</label>
    </div>
  );
};

function BubbleSortVisualizer() {
  const { array, selected, sortingComplete } = useSelector((state) => state);
  const maxNumber = Math.max(...array);

  return (
    <div id="array-container">
      {array.map((value, index) => (
        <Block
          key={index}
          value={value}
          index={index}
          isSwapping={index === selected || index === selected + 1}
          isSorted={sortingComplete}
          maxNumber={maxNumber}
        />
      ))}
    </div>
  );
}

export default BubbleSortVisualizer;
