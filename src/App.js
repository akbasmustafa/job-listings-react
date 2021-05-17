import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data.json";
import React, { useState } from "react";

function App() {
  const [keyWords, setKeyWords] = useState([]);

  function handleSearchFilter(item) {
    let matchKeys = [];

    if (item.company === "Shortly") {
      console.log(item.company);
    }

    keyWords.forEach((keyword) => {
      let re = new RegExp(keyword, "gi");
      const isCompany = re.test(item.company);
      const isPosition = re.test(item.position);
      const isRole = re.test(item.role);
      const isLevel = re.test(item.level);
      const isLanguage = re.test(item.languages.join(" "));
      const isTool = re.test(item.tools.join(" "));
      matchKeys.push(
        isLevel || isLanguage || isTool || isCompany || isPosition || isRole
      );
    });

    return !matchKeys.includes(false);
  }
  return (
    <div className="App row p-5">
      <Header searchJob={(arr) => setKeyWords(arr)} />
      {data.filter(handleSearchFilter).map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
}

export default App;
