import style from "./SearchBox.module.css";
import { useState, useEffect } from "react";

const SearchBox = ({searchValue, setSearchValue}) => {

  const handleChange = (evt) => {
    setSearchValue(evt.target.value);
  };

  return (
    <div className={style.wrap}>
      <p>Find contacts by name</p>
      <input type="text" value={searchValue} onChange={handleChange} className={style.mainInput}/>
    </div>
  );
};

export default SearchBox;