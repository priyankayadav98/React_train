interface Props {
  course: number;
}

function Message(props: Props) {
  return (
    <div className="text-center">
      <h1 className="text-info">Welcome to the {props.course} on My-app!</h1>
    </div>
  );
}
export default Message;
