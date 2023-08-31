import  { useState } from "react";

function DynamicRender(): JSX.Element {
  const [isTextVisible, setIsTextVisible] = useState<boolean>(false);

  const toggleText = (): void => {
  setIsTextVisible(!isTextVisible);
  };

  return (
    <div>
      <button onClick={toggleText}>Click me</button>
      {isTextVisible ? <div> 'hello student' </div> : null}
      {isTextVisible && <div> 'hello students' </div>}
    </div>
  );
}

export default DynamicRender;
