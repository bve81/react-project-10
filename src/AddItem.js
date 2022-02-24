import React from "react";

export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div className="max-w-md px-17 py-17 flex items-center mx-auto justify-center">
        <label htmlFor="item-name" className="flex mx-10">Название:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          
        />
      </div>
      <div className="max-w-md px-17 py-17 flex items-center mx-auto justify-center">
        <label htmlFor="item-description">Описание:</label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="textfield"
        />
      </div>
      <div className="form-footer">
        <div className="validation">{props.valid}</div>
        <input type="submit" className="flex mx-auto py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" value="Добавить" />
      </div>
    </form>
  );
}
