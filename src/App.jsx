import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();

  return (
    <div>
      <div>
        <h1 className="text-6xl text-purple-600">Coffee-store</h1>

        <div className="grid grid-cols-2 gap-2">
          {
            coffees.map(coffee=><CoffeeCard 
              key={coffee._id}
              coffee={coffee}
            ></CoffeeCard>)
          }


        </div>
      </div>
    </div>
  );
}

export default App;
