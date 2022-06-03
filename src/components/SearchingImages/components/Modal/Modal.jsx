import { Component } from 'react';

import { createPortal } from 'react-dom';
import style from './Modal.module.scss';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');
class Modal extends Component {
  escCloseModal = evt => {
    if (evt.code === 'Escape') this.props.closeModal();
  };
  componentDidMount() {
    document.addEventListener('keydown', this.escCloseModal);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.escCloseModal);
  }
  render() {
    return createPortal(
      <div className={style.Overlay}>
        <div className={style.Modal}>
          <button
            className={style.button}
            type="button"
            onClick={this.props.closeModal}
          >
            X
          </button>
          <img src={this.props.image} alt={this.props.alt} />
        </div>
      </div>,
      modalRoot
    );
  }
}
Modal.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
