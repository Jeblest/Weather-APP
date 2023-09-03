"use client"
import dayjs from "dayjs";
import { useState } from "react";
import { useCity } from "@context/CityContext";
function SearchBar() {
  const [search, setSearch] = useState("");
  const {setCity} = useCity()
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(search)
    setSearch("")
  }
  return (
    <section className="flex_center mt-8 gap-20">
      <div>
        <span className="block font-bold text-lg">
          {dayjs().format("MMMM YYYY")}
        </span>
        <span className="text-sm text-gray-400">
          {dayjs().format("dddd, MMM D, YYYY")}
        </span>
      </div>
      <div className="ml-16">
        <form className="flex items-center" onSubmit={handleSubmit}>
          <button type="submit" className="material-icons-outlined text-gray-400 absolute ml-2">search</button>
          <input
            type="text"
            placeholder="Search location here"
            className="w-full rounded-lg p-6 border h-8 shadow-lg focus:outline-none focus:ring-1 focus:ring-blue-300 pl-10"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value) }
          />
        </form>
      </div>
    </section>
  );
}

export default SearchBar;
