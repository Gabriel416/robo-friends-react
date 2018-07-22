import React from "react";

const SearchBox = ({ search, searchChange }) => {
  return (
    <div>
      <input type="text" placeholder="Search Robots" onChange={searchChange} />
    </div>
  );
};

export default SearchBox;
