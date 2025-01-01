import { useState } from "react";

const FilterButton = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="filter-buttons">
      <button
        onClick={() => handleFilterClick("all")}
        className={activeFilter === "all" ? "active" : ""}
      >
        همه
      </button>
      <button
        onClick={() => handleFilterClick("completed")}
        className={activeFilter === "completed" ? "active" : ""}
      >
        تکمیل شده
      </button>
      <button
        onClick={() => handleFilterClick("pending")}
        className={activeFilter === "pending" ? "active" : ""}
      >
        در انتظار
      </button>
    </div>
  );
};

export default FilterButton;
