import React, { useState } from "react";

const Item = ({ content, id, deleteTodo }) => {
  const [check, setCheck] = useState(false); //チェックボックスの初期値

  //削除機能
  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <li>
      <input
        type='checkbox'
        onChange={() => {
          setCheck(!check);
        }}></input>
      {/*チェックが入ったら線を表示*/}
      <span style={{ textDecoration: check ? "line-through" : "none" }}>
        {content}
      </span>
      <button onClick={handleDelete}>削除</button> {/*削除ボタン*/}
    </li>
  );
};

export default Item;
