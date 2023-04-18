import React from "react";

function Search({ val, handleSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="🔍 search"
        value={val}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
