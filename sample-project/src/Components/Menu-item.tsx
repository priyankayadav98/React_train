import { MouseEvent } from "react";
function Menu_item() {
  const items: Array<string> = ["java", "C", "python"];
  const handleClick = (index: number, event: MouseEvent) => {
    console.log(index + " " + event.type);
  };
  return (
    <>
      <div className="w-25 p-3">
        {items.length === 0 && <p>No Items is found in the list</p>}
        <ul className="list-group">
          {items.map((x, index) => (
            <li
              className="list-group-item "
              key={x}
              onClick={(event) => handleClick(index, event)}
            >
              {x}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Menu_item;
