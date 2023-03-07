import propTypes from 'prop-types';
import { Overlay } from "./Modal.style";
import { ModalStyle } from "./Modal.style";

const Modal = ({ src, alt, handleClose }) => (
  <Overlay onClick={handleClose}>
    <ModalStyle>
      <img src={src} alt={alt} />
    </ModalStyle>
  </Overlay>

);

Modal.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  handleClose: propTypes.func.isRequired,
};

export default Modal;
