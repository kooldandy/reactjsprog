/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

type ModalPopUpState = {
  showPopUp: boolean;
};

const modalPopupPropTypes = {
  unmountMe: PropTypes.func.isRequired,
  typeOfPopUp: PropTypes.string.isRequired,
  children: {
    header: PropTypes.instanceOf(Element).isRequired,
    body: PropTypes.instanceOf(Element).isRequired,
    footer: PropTypes.instanceOf(Element).isRequired,
  },
};

type ModalPopUpTypes = PropTypes.InferProps<typeof modalPopupPropTypes>;

export class ModalPopUp extends Component<
  ModalPopUpTypes,
  ModalPopUpState,
  unknown
> {
  constructor(props: ModalPopUpTypes) {
    super(props);
    this.state = {
      showPopUp: true,
    };
    this.close = this.close.bind(this);
  }

  close = () => {
    const state: ModalPopUpState = this.state;
    state.showPopUp = false;
    this.setState({ ...state });
    this.props.unmountMe(this.props.typeOfPopUp);
  };

  render() {
    const { header, body, footer } = this.props.children;
    const { showPopUp } = this.state;
    const popup = showPopUp ? (
      <div className="modal-popup">
        <div className="modal-content">
          <span className="close" onClick={this.close}>
            &times;
          </span>
          <div className="modal-header">{header}</div>
          <div className="modal-body">{body}</div>
          <div className="modal-footer">{footer}</div>
        </div>
      </div>
    ) : null;

    return popup;
  }
}
