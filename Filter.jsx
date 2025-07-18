import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleFilter = () => {
    onFilter({
      title: titleFilter,
      rating: ratingFilter
    });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        min="0"
        max="10"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;
