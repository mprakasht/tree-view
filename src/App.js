import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Tree from "./components/Tree";

function App() {
  const [nodeData, setnodeData] = useState([]);
  useEffect(() => {
    axios
      .get("http://www.mocky.io/v2/5c3c7ad13100007400a1a401")
      .then((res) => setnodeData(res.data.nodes))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // data generation
  const nestingData = (items, id = 0, link = "parent") =>
    items
      .filter((item) => item[link] === id)
      .map((item) => ({ ...item, children: nestingData(items, item.id) }));

  return (
    <div className="App">
      <Tree treeData={nestingData(nodeData)} />
    </div>
  );
}
export default App;
