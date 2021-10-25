/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalPopUp } from '../modal/Modal';
import './AddMovie.css';

const modalPopupPropTypes = {
  unmountMe: PropTypes.func.isRequired,
  typeOfPopUp: PropTypes.string.isRequired,
};

type ModalPopUpTypes = PropTypes.InferProps<typeof modalPopupPropTypes>;

export class DeleteMoviePopUp extends Component<
  ModalPopUpTypes,
  unknown,
  unknown
> {
  constructor(props: ModalPopUpTypes) {
    super(props);
  }

  render() {
    const modalPopUp = (
      <ModalPopUp
        unmountMe={this.props.unmountMe}
        typeOfPopUp={this.props.typeOfPopUp}
      >
        {{
          header: (
            <>
              <p className="add-movie-header">Delete Movie</p>
            </>
          ),
          body: (
            <div className="add-movie-body">
              <div>
                <p> Are you sure you want to delete this movie?</p>
              </div>
            </div>
          ),
          footer: (
            <div className="footer">
              <button value="Confirm" className="button btn-active">
                Confirm
              </button>
            </div>
          ),
        }}
      </ModalPopUp>
    );

    return modalPopUp;
  }
}
