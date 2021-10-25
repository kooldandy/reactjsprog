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

export interface IMovieCard {
  title: string;
  overview: string;
  id: string;
  poster_path: string;
}

const moviecardPropTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  amendMovieCB: PropTypes.func.isRequired,
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

  togglePopUpHandler = (param: boolean) => {
    this.setState({ showAmendPopup: param });
  };

  amendHandler = (param: boolean, type: CallBackTypesEnum) => {
    this.props.amendMovieCB(true, type);
    this.setState({ showAmendPopup: false });
  };

  render() {
    const { poster_path } = this.props;
    const amendPopUp = this.state.showAmendPopup ? (
      <div className="edit-option">
        <p
          className="cancle"
          onClick={this.togglePopUpHandler.bind(this, false)}
        >
          x
        </p>
        <p
          className="option"
          onClick={this.amendHandler.bind(
            this,
            true,
            CallBackTypesEnum.EDITMOVIE
          )}
        >
          Edit
        </p>
        <p
          className="option"
          onClick={this.amendHandler.bind(
            this,
            true,
            CallBackTypesEnum.DELETEMOVIE
          )}
        >
          Delete
        </p>
      </div>
    ) : null;

    return (
      <div className="movie-card">
        <div className="amend">
          <div
            className="amend-icon"
            role="button"
            onClick={this.togglePopUpHandler.bind(this, true)}
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
