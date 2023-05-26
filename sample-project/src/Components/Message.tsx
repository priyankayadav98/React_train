interface Props {
  course: number;
}

function Message({ course }: Props) {
  return (
    <div className="text-center">
      <h1 className="text-info">Welcome to the {course} on My-app!</h1>
    </div>
  );
}
export default Message;
