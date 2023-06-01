import React from 'react';
import css from './filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'components/store/Filter/filterSelectors';
import { upDate } from 'components/store/Filter/filterSlice';
import { changeFilter } from 'components/store/Contacts/contactsActions';

const Filter = () => {
  const dispatch = useDispatch();

  const value = useSelector(selectFilter);

  return (
    <div className={css.filter}>
      <h3>Find contacts by name:</h3>
      <input
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default Filter;

// const Filter = () => {
//   const dispatch = useDispatch();

//   const filter = useSelector(selectFilter);

//   const changeFilter = e => {
//     const newFilterValue = e.target.value;
//     console.log(newFilterValue);
//     dispatch(upDate(newFilterValue));
//   };

//   return (
//     <div className={css.filter}>
//       <h3>Find contacts by name:</h3>
//       <input
//         className={css.filterInput}
//         id="filter"
//         value={filter}
//         onChange={changeFilter}
//         type="text"
//         name="filter"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//     </div>
//   );
// };

// export default Filter;
