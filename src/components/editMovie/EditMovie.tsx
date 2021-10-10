/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { AddMoviePopUp } from '../addmovie/AddMovie';

const modalPopupPropTypes = {
  unmountMe: PropTypes.func.isRequired,
};

type ModalPopUpTypes = PropTypes.InferProps<typeof modalPopupPropTypes>;

export class EditMoviePopUp extends Component<
  ModalPopUpTypes,
  unknown,
  unknown
> {
  constructor(props: ModalPopUpTypes) {
    super(props);
  }

  render() {
    return <AddMoviePopUp unmountMe={this.props.unmountMe}></AddMoviePopUp>;
  }
}
