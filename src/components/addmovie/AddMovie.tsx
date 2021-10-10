/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalPopUp } from '../modal/Modal';
import './AddMovie.css';

const modalPopupPropTypes = {
  unmountMe: PropTypes.func.isRequired,
};

type ModalPopUpTypes = PropTypes.InferProps<typeof modalPopupPropTypes>;

export class AddMoviePopUp extends Component<
  ModalPopUpTypes,
  unknown,
  unknown
> {
  constructor(props: ModalPopUpTypes) {
    super(props);
  }

  render() {
    const modalPopUp = (
      <ModalPopUp unmountMe={this.props.unmountMe}>
        {{
          header: (
            <>
              <p className="add-movie-header">Add Movies</p>
            </>
          ),
          body: (
            <div className="add-movie-body">
              <div>
                <p className="form-caption">TITLE</p>
                <input
                  type="text"
                  placeholder="Add Tilte"
                  className="form-input-big input"
                ></input>
              </div>
              <div>
                <p className="form-caption">RELEASE DATE</p>
                <input
                  type="date"
                  placeholder="Select Date"
                  className="form-input-small input"
                ></input>
              </div>

              <div>
                <p className="form-caption">Movie Url</p>
                <input
                  type="url"
                  placeholder="http://"
                  className="form-input-big input"
                ></input>
              </div>

              <div>
                <p className="form-caption">Rating</p>
                <input
                  type="number"
                  placeholder="Add rating"
                  className="form-input-small input"
                ></input>
              </div>

              <div>
                <p className="form-caption">Genre</p>
                <input
                  type="url"
                  placeholder="Select Genre"
                  className="form-input-big input"
                ></input>
              </div>

              <div>
                <p className="form-caption">Runtime</p>
                <input
                  type="number"
                  placeholder="minutes"
                  className="form-input-small input"
                ></input>
              </div>

              <div>
                <p className="form-caption">Genre</p>
                <textarea
                  placeholder="Movie Description"
                  className="textarea"
                ></textarea>
              </div>
            </div>
          ),
          footer: (
            <div className="footer">
              <button value="reset" className="button btn-inactive">
                Reset
              </button>
              <button value="Submit" className="button btn-active">
                Submit
              </button>
            </div>
          ),
        }}
      </ModalPopUp>
    );

    return modalPopUp;
  }
}
