import { createContext, useState } from "react";
import initialData from "./data/data";
import Child from "./components/child";

const DataContext = createContext();

function App() {
  const [data, setData] = useState(initialData);

  return (
    <DataContext.Provider value={{ data, setData }}>
      <div className="flex justify-center py-2">
        <Child />
      </div>
    </DataContext.Provider>
  );
}

export default App;
export { DataContext }
