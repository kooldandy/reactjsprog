/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component } from 'react';
import PropTypes from 'prop-types';
import './MovieDetails.css';
import { IMovieCard } from '../../interface';
import { CallBackTypesEnum } from '../../enum';

const movieDetailsPropTypes = {
  eventCallBack: PropTypes.func.isRequired,
  movieDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};

type MovieDetailsTypes = PropTypes.InferProps<typeof movieDetailsPropTypes>;

type MovieDetailsState = {
  showAmendPopup: boolean;
  movieDetails: IMovieCard;
};

export class MovieDetails extends Component<
  MovieDetailsTypes,
  MovieDetailsState,
  unknown
> {
  constructor(props: MovieDetailsTypes) {
    super(props);
    this.state = {
      showAmendPopup: false,
      movieDetails: this.props.movieDetails,
    };

    this.closeMovieDetails = this.closeMovieDetails.bind(this);
  }

  closeMovieDetails = () => {
    this.props.eventCallBack(false, CallBackTypesEnum.SHOWMOVIEDETAILS);
  };
  render() {
    const { poster_path, overview } = this.props.movieDetails;
    return (
      <div className="movie-details">
        <div className="image">
          <img src={poster_path} alt="" className="poster" />
        </div>
        <div className="details">
          <span
            className="cancle"
            role="button"
            onClick={this.closeMovieDetails}
          >
            X
          </span>
          <div>{overview}</div>
        </div>
      </div>
    );
  }
}
