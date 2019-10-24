import * as React from "react";
import { useState } from "react";

interface Props {
  data: number;
}

const Count: React.FC<Props> = () => {
  const [data, setData] = useState<number>(0);

  const increment = function() {
    setData(data + 1);
  };

  return (
    <React.Fragment>
      <h1>{data}</h1>
      <button onClick={increment}>Increment</button>
    </React.Fragment>
  );
};

export default Count;
