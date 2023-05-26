import { useState } from "react";

function Content_New() {
  const [text, set_text] = useState("programming");
  return (
    <p className="lead" onClick={() => set_text("subscribe")}>
      {text} course{" "}
    </p>
  );
}
export default Content_New;
