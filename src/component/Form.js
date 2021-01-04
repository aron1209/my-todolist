import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState(""); //input要素の入力値をFormコンポーネントのstateとして管理

  // formを送信(Submit)した際の処理
  const handleSubmit = (e) => {
    e.preventDefault(); //送信後、勝手に更新されないようにする
    !value ? alert("Please input text") : addTodo(value); //空のまま送信するとアラートが出る
    setValue(""); //送信後フォーム内が空白
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>todoを書き込みせよ</label>
      <input
        type='text'
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}></input>
    </form>
  );
};

export default Form;
