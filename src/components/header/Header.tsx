/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component, Fragment } from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { CallBackTypesEnum } from '../../enum';

type HeaderState = {
  //showAddMovie: boolean;
};
const headerPropTypes = {
  showAddMovieCB: PropTypes.func.isRequired,
};

type HeaderTypes = PropTypes.InferProps<typeof headerPropTypes>;
export class Header extends Component<HeaderTypes, HeaderState, unknown> {
  constructor(props: HeaderTypes) {
    super(props);
    this.state = {};

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    this.props.showAddMovieCB(true, CallBackTypesEnum.SHOWADDMOVIE);
  };
  render() {
    return (
      <Fragment>
        <div className="header">
          <span className="header-image"></span>
          <h1 className="header-title">Netfliz Movies</h1>
          <div
            className="add-movie btn"
            role="button"
            onClick={this.clickHandler}
          >
            <span className="btn-text">+ Add Movie</span>
          </div>
        </div>
      </Fragment>
    );
  }
}
