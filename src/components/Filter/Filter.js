import { FilterInput, FilterTitle } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        value={filter}
        name="filter"
        id="filter"
        onChange={event => dispatch(changeFilter(event.target.value))}
        required
      />
    </div>
  );
};
