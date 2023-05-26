import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Menu_item from "./Components/Menu-item";
import Message from "./Components/Message";
import Content_New from "./Components/content-new";
import Footer_Message from "./Components/Foot-Message";
import Navigation from "./Components/Navigation";
import Alert from "./Components/Alert";
function App() {
  const items = ["java", "C", "python"];
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <>
        <Message course={3} />
        <Navigation btn_msg="Login" onClick={handleButtonClick} />t
        {showAlert && (
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            Alert! This is an example alert.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={handleCloseAlert}
            ></button>
          </div>
        )}
        <>
          <div>
            <Content_New />
            <Menu_item menuItems={items} />
          </div>
        </>
        <Footer_Message />
        <Alert>
          <b>Hey There children</b>
        </Alert>
      </>
    </>
  );
}

export default App;
