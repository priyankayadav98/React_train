import { MouseEvent } from "react";
function Menu_item() {
  const items: Array<string> = ["java", "C", "python"];
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <div className="w-25 p-3">
        {items.length === 0 ? "No items" : null}
        <ul className="list-group">
          {items.map((x, index) => (
            <li className="list-group-item " key={x} onClick={handleClick}>
              {x}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Menu_item;
