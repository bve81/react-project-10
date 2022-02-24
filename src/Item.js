import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="max-w-md px-17 py-17 flex items-center mx-auto justify-center bg-gray-100">
      <div className="max-w-md px-15 py-15 bg-white rounded-lg shadow-lg flex-row space-y-9 mx-auto space-x-4">
        <h2 className="flex text-2xl font-bold">{info.name}</h2>
        <p className="text-2xl">{info.desc}</p>
      
      <div className="flex mx-auto justify-items-center">
        <button
          className="flex mx-auto py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="item-total">{total ? total : ""}</h3>
        <button className="flex mx-auto py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={handleAddClick}>
          +
        </button>
      </div>
      </div>
    </div>
  );
}
