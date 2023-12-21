import React, { useState } from "react";

const Sort = () => {
  const [array, setArray] = useState([2, 7, 4, 3, 6, 8]);
  const [isSorted, setIsSorted] = useState(false);

  const bubbleSort = () => {
    let n = array.length;
    let copyarray = [...array];

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        setTimeout(() => {
          if (copyarray[j] > copyarray[j + 1]) {
            let temp = copyarray[j];
            copyarray[j] = copyarray[j + 1];
            copyarray[j + 1] = temp;
            setArray([...copyarray]);
          }
        }, (i * (n - 1) + j) * 500);
      }
    }
    setIsSorted(true);
  };

  return (
    <div>
      <button onClick={bubbleSort}>Sort Array</button>
      {isSorted && (
        <p style={{ color: "green", fontSize: "50px" }}>
          Sorted Array: {array}
        </p>
      )}
    </div>
  );
};

const App = () => {
  const og = [2, 7, 4, 3, 6, 8];

  return (
    <div>
      <p style={{ fontSize: "25px" }}> original Array : {og}</p>
      <Sort />
    </div>
  );
};

export default App;
