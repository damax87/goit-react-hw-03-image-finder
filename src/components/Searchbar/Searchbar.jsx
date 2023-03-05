import propTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { SearchBarStyle } from "./Searchbar.style";
import { SearchForm } from "./Searchbar.style";
import { SearchFormButton } from "./Searchbar.style";
import { SearchFormButtonLabel } from "./Searchbar.style";
import { SearchFormInput } from "./Searchbar.style";

export const Searchbar =({ onSubmit }) => {

      <SearchBarStyle>
  <SearchForm onSubmit={onSubmit}>
    <SearchFormButton type="submit">
        <ImSearch />
      <SearchFormButtonLabel>Search</SearchFormButtonLabel>
    </SearchFormButton>

    <SearchFormInput
      type="text"
      name="inputForSearch"
      autocomplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</SearchBarStyle>
    //     )
    // }
};

Searchbar.propTypes = {
  onSubmit: propTypes.func
};