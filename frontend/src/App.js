import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "./url";
function App() {
  const [data, setData] = useState([]);
  const getProducts = async () => {
    const response = await axios.get(`${url}api/products`);
    console.log(response);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="app">
      {data.map((items) => (
        <div>ok</div>
      ))}
    </div>
  );
}

export default App;
