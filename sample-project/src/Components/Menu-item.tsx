import React, { useState } from "react";

function Menu_item() {
  const items: Array<string> = ["java", "C", "python"];
  const [selectedItem, setSelectedItem] = useState("");

  const handleClick = (item: string) => {
    setSelectedItem(item);
  };
  return (
    <>
      <div className="w-25 p-3">
        {items.length === 0 && <p>No Items found in the list</p>}
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selectedItem === item
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={index}
              onClick={() => handleClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Menu_item;
