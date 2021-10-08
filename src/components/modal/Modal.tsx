import { PureComponent } from 'react';
import './Modal.css';

export class ModalPopUp extends PureComponent<unknown, unknown, unknown> {
  constructor(props: unknown) {
    super(props);
  }

  render() {
    return <div className="modal-popup">{this.props.children}</div>;
  }
}
