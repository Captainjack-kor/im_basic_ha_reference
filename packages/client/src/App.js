import React from 'react';
import Header from './Header';
import MovieRankList from './MovieRankList';
import CurrentMovie from './CurrentMovie';

// 기본값으로 주어지는 영화 목록은 다음을 이용하세요.
import mockMovie from './mockMovie';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: null,
      movies: mockMovie,
    };
    this.handleCardClick = this.handleCardClick.bind(this);
  }
  componentDidMount() {
    fetch('http://localhost:3000/movies')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data, currentMovie: data[0] });
      });
  }

  handleCardClick(movie) {
    this.setState({ currentMovie: movie });
  }

  render() {
    if (!this.state.movies) return <div>loading</div>;
    return (
      <>
        <div className='header'>
          <Header />
        </div>
        <div className='body'>
          <CurrentMovie movie={this.state.currentMovie} />
          <MovieRankList
            handleCardClick={this.handleCardClick}
            movies={this.state.movies}
          />
        </div>
      </>
    );
  }
}

export default App;
