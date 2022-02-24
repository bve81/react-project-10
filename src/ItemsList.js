import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  return (
    <ul className="marker:text-sky-400 list-inside pl-5 space-y-3 text-slate-500 p-6 divide-y divide-slate-200">
      {props.items.map((item) => (
        <li className="marker:text-sky-400 list-inside pl-5 space-y-3 text-slate-500 after:border-solid" key={item.id}>
          <Item info={item} />
          <button
            className="flex mx-auto py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
