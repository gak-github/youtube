import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import searchIcon from '../images/icons/png/magnifying-glass.png';

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
      <form onSubmit={onSubmit} className="search">
          <input className="search__input" name="term" onChange={ e => setTerm(e.target.value)} placeholder="Search videos" />
          <button className="search__button" onClick={onSubmit} >
            <img className="search__icon" src={searchIcon} alt="search icon" />
          </button>
      </form>
    </>
  )
};

export default SearchBar;
