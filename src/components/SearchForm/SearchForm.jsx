import { useState } from "react";
import css from "./SearchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState(" ");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      alert("Please fill in the search field.");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <form className={css.form} onSubmit={handelSubmit}>
      <input
        className={css.input}
        type="text"
        name="query"
        value={query}
        onChange={handleChange}
        placeholder="Search films..."
      />
      <button className={css.btnSubmit} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
