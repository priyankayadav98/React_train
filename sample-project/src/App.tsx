import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Menu_item from "./Components/Menu-item";
import Message from "./Components/Message";
import Content_New from "./Components/content-new";
import Footer_Message from "./Components/Foot-Message";
import Navigation from "./Components/Navigation";
function App() {
  const items = ["java", "C", "python"];
  return (
    <>
      <Navigation />
      <>
        <Message course={3} />
        <>
          <div>
            <Content_New />
            <Menu_item menuItems={items} />
          </div>
        </>
        <Footer_Message />
      </>
    </>
  );
}

export default App;
