import { useState } from "react";

const useInput = (num) => {
  //state
  const [value, setValue] = useState("");

  //handler
  const handler = (e) => {
    setValue(e.target.value.slice(0, num));
  };

  return [value, handler];
};

export default useInput;
