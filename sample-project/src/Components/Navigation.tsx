import React from "react";

interface Props {
  btn_msg: string;
  onClick: () => void;
}

function Navigation({ btn_msg, onClick }: Props) {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      {btn_msg}
    </button>
  );
}

export default Navigation;
