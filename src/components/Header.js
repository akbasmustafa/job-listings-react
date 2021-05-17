import React, { useState } from "react";

function Header({ searchJob }) {
  const [words, setWords] = useState([]);
  const [searchText, setSearchText] = useState("");

  function handleSearch(e) {
    const text = e.target.value;
    let newArr = [];
    text.split(" ").forEach((word) => {
      if (word.length > 0) {
        newArr.push(word);
      }
    });
    setWords(newArr);
    setSearchText(text);
    searchJob(newArr);
  }
  // function deleteWord() {
  //   console.log("Deleted");
  // }
  return (
    <div>
      <div class="input-group m-3 col-8 col-md-6 align-items-center">
        <span class="input-group-text">&#10148;</span>
        <input
          type="text"
          class="form-control"
          placeholder="Search by Tags"
          aria-label="Search"
          onChange={handleSearch}
          value={searchText}
        />
      </div>
      <div>
        {words.map((word, index) => (
          <span key={index} className="badge bg-info p-1 m-1">
            {word}
            {/* <span key={index} className="p-2" onClick={deleteWord}>
            &#10006;
          </span> */}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Header;
