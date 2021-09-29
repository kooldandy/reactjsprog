import { Component } from 'react';
import { IMovieCard, MovieCard } from '../moviecards/MovieCard';
import './MenuList.css';

export class MovieList extends Component<unknown, any, unknown> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      data: [],
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  private fetchData = () => {
    fetch('http://localhost:4000/movies/?limit=12')
      .then((res) => res.json())
      .then((movieList: any) => {
        const state: any = this.state;
        state.data = movieList.data;
        this.setState({ ...state });
      });
  };

  render() {
    const movieList = this.state.data;

    return (
      <div className="menu-list">
        {movieList.map((movie: IMovieCard) => {
          return (
            <MovieCard
              title={movie.title}
              overview={movie.overview}
              key={movie.id}
              id={movie.id}
              poster_path={movie.poster_path}
            ></MovieCard>
          );
        })}
      </div>
    );
  }
}
