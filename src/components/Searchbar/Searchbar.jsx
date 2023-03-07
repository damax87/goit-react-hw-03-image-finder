import propTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { SearchBarStyle } from "./Searchbar.style";
import { SearchForm } from "./Searchbar.style";
import { SearchFormButton } from "./Searchbar.style";
import { SearchFormButtonLabel } from "./Searchbar.style";
import { SearchFormInput } from "./Searchbar.style";

const Searchbar = ({ onSubmit }) => {

return(

      <SearchBarStyle>
  <SearchForm onSubmit={ onSubmit }>
    <SearchFormButton type="submit">
        <ImSearch color="lightseagreen"/>
      <SearchFormButtonLabel>Search</SearchFormButtonLabel>
    </SearchFormButton>

    <SearchFormInput
      name="inputForSearch"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</SearchBarStyle>
)
};

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default Searchbar;
