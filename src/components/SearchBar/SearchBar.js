import { useState } from "react";

const searchHandler = (searchText, restaurants) => {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
};

const SearchBar = ({ restaurants, setFilteredRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex gap-2">
      <input
        type="text"
        className="ml-5 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-1/4 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-5 ring-1 ring-slate-200 shadow-sm"
        placeholder="search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="bg-black text-sm text-white px-5 py-2"
        onClick={() => {
          const searchResult = searchHandler(searchText, restaurants);
          setFilteredRestaurants(searchResult);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
