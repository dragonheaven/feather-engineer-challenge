import { useState } from "react";

interface SearchInputParams {
  searchPlaceholder: string;
  onSearch: (value: string) => void;
}

const SearchInput = ({ onSearch, searchPlaceholder }: SearchInputParams) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div data-testid="search-div" className="flex items-center border-b border-teal-500 py-2">
      <input className="appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" value={searchText} type="text" placeholder={searchPlaceholder} 
        onChange={(e) => {
            setSearchText(e.target.value);
        }} 
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSearch(searchText);
            }
        }}
      />
      <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" onClick={() => {onSearch(searchText)}}>
          Search
      </button>
      <button className="flex-shrink-0 border-transparent border-4 text-red-500 hover:text-red-800 text-sm py-1 px-2 rounded" type="button" onClick={() => { 
          setSearchText("");
          onSearch("");
      }}>
          Clear
      </button>
  </div>
  );
};

export default SearchInput;
