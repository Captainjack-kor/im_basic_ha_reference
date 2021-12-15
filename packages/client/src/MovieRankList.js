import React from 'react';
import MovieRankListEntry from './MovieRankListEntry';
export default function MovieRankList({ movies, handleCardClick }) {
  return (
    <div className="right-movie-list">
      {movies.length === 0 ? '영화 목록이 비었습니다' : movies.map(movie => {
        return (
          <MovieRankListEntry handleCardClick={handleCardClick} movie={movie} key={movie.id} />
        );
      })}
    </div>
  );
}
