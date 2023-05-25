import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Menu_item from "./Components/Menu-item";
import Message from "./Components/Message";
import Content_New from "./Components/content-new";
import Footer_Message from "./Components/Foot-Message";

function App() {
  return (
    <>
      <Message />
      <>
        <div>
          <Menu_item />
          <Content_New />
        </div>
      </>
      <Footer_Message />
    </>
  );
}

export default App;
