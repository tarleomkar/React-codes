import React from "react";

const List = () => {
  const items = ["Item 1", "Item 2", "Item 3"];
  // console.log('items are', items)

  return (
    <ul>
      {items.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default List;
