import { Wrapper, Input, Btn } from './SearchBox.styled';
import PropTypes from 'prop-types';
export const SearchBox = ({ onSubmit }) => {
  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <Btn type="submit">
          <span>
            <b>Search</b>
          </span>
        </Btn>
      </form>
    </Wrapper>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func,
};
