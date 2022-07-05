import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "red"
};
//今後肥大化する可能性のある子コンポーネントは基本的にはmemoでリファクタリングしないようにする。
export const ChildArea = memo((props) => {
  const { open } = props;

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});
