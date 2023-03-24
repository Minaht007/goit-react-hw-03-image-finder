import { Component } from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');
export class ModalImg extends Component {
  render() {
    const { largPhoto, closeModal } = this.props;
    return createPortal(
      <div>
        <img src={largPhoto} alt={largPhoto} onClick={() => closeModal()} />
      </div>,
      modalRoot
    );
  }
}
