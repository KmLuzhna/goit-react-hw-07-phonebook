import { InputFilter, LabelFilter } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selector';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter  = useSelector(getFilter);

const inputHandleChacge = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        name="filter"
        title="Filter"
        onChange={inputHandleChacge}
        value={filter}
      />
    </LabelFilter>
  );
};