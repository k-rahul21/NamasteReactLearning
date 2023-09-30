import { useState } from "react";

const searchHandler = (searchText, restaurants) => {
  console.log("from search", restaurants);
  const filterData = restaurants.filter((restaurants) =>
    restaurants?.data?.name.toLowerCase().includes(searchText)
  );
  return filterData;
};

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex gap-2">
      <input
        type="text"
        className="mr-5 search-input focus:ring-2 focus:ring-blue-500"
        placeholder="search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="bg-black text-sm "
        onClick={() => {
          const data = searchHandler(searchText, restaurants);
          setFilteredRestaurants(data);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
