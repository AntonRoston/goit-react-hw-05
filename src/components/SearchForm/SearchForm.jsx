import { useState } from 'react';
import css from './SearchForm.module.css';
import { FcSearch } from 'react-icons/fc';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState(' ');

  const handleChange = e => {
    setQuery(e.target.value);
  };
  const handelSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Please fill in the search field.');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <form className={css.searchForm} onSubmit={handelSubmit}>
      <input
        className={css.input}
        type="text"
        placeholder="Search movie..."
        name="query"
        value={query}
        onChange={handleChange}
      />
      <button className={css.searchBtn} type="submit">
              <FcSearch size={26} />
      </button>
    </form>
  );
};

export default SearchForm;
