import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="p-2 flex items-center gap-2">
        <button
          className="py-2 px-4 bg-red-500"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        {count}
        <button
          className="py-2 px-4 bg-green-500"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
