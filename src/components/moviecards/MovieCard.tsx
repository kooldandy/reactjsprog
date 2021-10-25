// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';
import { CallBackTypesEnum } from '../../enum';

const moviecardPropTypes = {
  // title: PropTypes.string.isRequired,
  // overview: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
  // poster_path: PropTypes.string.isRequired,
  eventCallBack: PropTypes.func.isRequired,
  movieDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};

type MovieCardTypes = PropTypes.InferProps<typeof moviecardPropTypes>;

type MovieCardState = {
  showAmendPopup: boolean;
};

export class MovieCard extends Component<
  MovieCardTypes,
  MovieCardState,
  unknown
> {
  constructor(props: MovieCardTypes) {
    super(props);
    this.state = {
      showAmendPopup: false,
    };

    this.showMovieDetails = this.showMovieDetails.bind(this);
  }

  componentDidMount() {
    this.handleGlobalClick();
  }

  private handleGlobalClick() {
    window.onclick = (evt: Event) => {
      if (evt.target) {
        this.setState({ showAmendPopup: false });
      }
    };
  }

  togglePopUpHandler = (event: Event, param: boolean) => {
    event.stopPropagation();
    this.setState({ showAmendPopup: param });
  };

  amendHandler = (event: Event, param: boolean, type: CallBackTypesEnum) => {
    event.stopPropagation();
    this.props.eventCallBack(true, type);
    this.setState({ showAmendPopup: false });
  };

  showMovieDetails = () => {
    this.props.eventCallBack(
      true,
      CallBackTypesEnum.SHOWMOVIEDETAILS,
      this.props.movieDetails
    );
  };

  render() {
    const { poster_path } = this.props.movieDetails;
    const amendPopUp = this.state.showAmendPopup ? (
      <div className="edit-option">
        <p
          className="cancle"
          onClick={(evt: any) => this.togglePopUpHandler(evt, false)}
        >
          x
        </p>
        <p
          className="option"
          onClick={(evt: any) =>
            this.amendHandler(evt, true, CallBackTypesEnum.EDITMOVIE)
          }
        >
          Edit
        </p>
        <p
          className="option"
          onClick={(evt: any) =>
            this.amendHandler(evt, true, CallBackTypesEnum.DELETEMOVIE)
          }
        >
          Delete
        </p>
      </div>
    ) : null;

    return (
      <div className="movie-card" role="button" onClick={this.showMovieDetails}>
        <div className="amend">
          <div
            className="amend-icon"
            role="button"
            onClick={(evt: any) => this.togglePopUpHandler(evt, true)}
          >
            ...
          </div>
          {amendPopUp}
        </div>
        <img src={poster_path} alt="" className="poster" />
      </div>
    );
  }
}
