import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      posterURL: 'https://via.placeholder.com/150x200?text=Inception',
      rating: 8
    },
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://via.placeholder.com/150x200?text=Shawshank',
      rating: 9
    }
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

  const handleFilter = ({ title, rating }) => {
    setFilteredMovies(
      movies.filter(movie => {
        const matchesTitle = movie.title.toLowerCase().includes(title.toLowerCase());
        const matchesRating = rating === '' || movie.rating >= Number(rating);
        return matchesTitle && matchesRating;
      })
    );
  };

  const handleAddMovie = () => {
    const movieToAdd = {
      ...newMovie,
      rating: Number(newMovie.rating)
    };
    setMovies([...movies, movieToAdd]);
    setFilteredMovies([...movies, movieToAdd]);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: value
    });
  };

  return (
    <div className="app">
      <h1>Movie Library</h1>
      
      <div className="add-movie">
        <h2>Add New Movie</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newMovie.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newMovie.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="posterURL"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (0-10)"
          min="0"
          max="10"
          value={newMovie.rating}
          onChange={handleInputChange}
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>

      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
