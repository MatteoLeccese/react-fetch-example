import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  // We are using debounce to optimize the query
  const [debouncedQuery] = useDebounce(query, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  return (
    <div className="flex items-center justify-center mt-4">
      <div className="flex w-3/4">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search by Title or Author"
          className="w-full px-4 py-2 border rounded-l-lg focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
