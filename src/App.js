import { useState } from "react";
import { ChildArea } from "./ChildeArea";
import "./styles.css";

export default function App() {
  console.log("aaa");
  const [count, setCount] = useState(0);
  const onClickCountButton = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <input />
      <button>表示</button>
      <ChildArea />
    </div>
  );
}
