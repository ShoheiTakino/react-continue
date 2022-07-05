import { useState } from "react";
import { ChildArea } from "./ChildeArea";
import "./styles.css";

export default function App() {
  console.log("aaa");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickCountButton = () => {
    setCount(count + 1);
  };

  const onClickOpen = () => setOpen(!open);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
}
