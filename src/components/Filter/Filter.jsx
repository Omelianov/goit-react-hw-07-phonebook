import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';
import css from './Filter.module.css';


export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label className={css.label}>
      <span className={css.title}>Find contacts by name</span>
      <input
        className={css.title}
        type="text"
        placeholder="search here ..."
        title={'Start typing the contact name..'}
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
};


