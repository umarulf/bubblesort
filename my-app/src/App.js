import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import BubbleSort from "./components/BubbleSort";
import "./BubbleSort.css";

function App() {
  return (
    <Provider store={store}>
      <BubbleSort />
    </Provider>
  );
}

export default App;
