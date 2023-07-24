import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import css from './Filter.module.css';

import { setFilter } from 'redux/filterSlice';
import { selectStatusFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div className={css.wrapper}>
      <label className={css.label}>
    Find contacts by name
    <input
      className={css.input}
      type="text"
      name={filter}
      value={filter}
      onChange={onChange}
    />
  </label>
    </div>
    
);
};

Filter.propTypes = {
  filter: PropTypes.string,
  OnChange: PropTypes.func,
};