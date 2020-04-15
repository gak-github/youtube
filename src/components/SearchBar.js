import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
const SearchBar = () => {
  const { getVideos } = useContext(GlobalContext);
  const [term, setTerm] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (term === "") {
      return;
    }
    getVideos(term);
    setTerm("");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <input name="term" onChange={ e => setTerm(e.target.value)} placeholder="Search" />
          <input type="submit" name="submit" value="Search" />
        </div>
      </form>
    </>
  )
};

export default SearchBar;
