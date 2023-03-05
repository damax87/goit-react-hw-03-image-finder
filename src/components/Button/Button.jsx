import propTypes from 'prop-types';
import { ButtonStyle } from "./Button.style";

export const Button = ({ onClick }) => (
    <ButtonStyle onClick={onClick} type="button">
      Load more
    </ButtonStyle>
  );


  Button.propTypes = {
    onClick: propTypes.func.isRequired,
  };