import { Component } from 'react';
import { MovieCard } from '../moviecards/MovieCard';
import PropTypes from 'prop-types';
import './MenuList.css';
import { CallBackTypesEnum } from '../../enum';
import { IMovieCard } from '../../interface';

type MovieListState = {
  data: Array<IMovieCard>; // like this
};
const movieListPropTypes = {
  isEveryThingOkCB: PropTypes.func.isRequired,
  eventCallBack: PropTypes.func.isRequired,
};

type MovieListTypes = PropTypes.InferProps<typeof movieListPropTypes>;

export class MovieList extends Component<
  MovieListTypes,
  MovieListState,
  unknown
> {
  constructor(props: MovieListTypes) {
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
        const state: MovieListState = this.state;
        state.data = movieList.data;
        this.setState({ ...state });
        this.props.isEveryThingOkCB(true, CallBackTypesEnum.ISEVERYTHINGOK);
      })
      .catch((err: any) => {
        console.error(err);
        this.props.isEveryThingOkCB(false, CallBackTypesEnum.ISEVERYTHINGOK);
      });
  };

  render() {
    const movieList = this.state.data;

    return (
      <div className="menu-list">
        {movieList.map((movie: IMovieCard) => {
          return (
            <MovieCard
              movieDetails={movie}
              key={movie.id}
              eventCallBack={this.props.eventCallBack}
            ></MovieCard>
          );
        })}
      </div>
    );
  }
}
