import { nanoid } from 'nanoid';
import css from './AddForm.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/contactsOperations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


// const initialValues = {
//   id: '',
//   name: '',
//   phone: '',
// };


const AddForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      return toast.error('Please enter a name and a number.');
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    addContactHandler(newContact);

    setName('');
    setNumber('');
  };

  const addContactHandler = newContact => {
  const findContact = contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());

  if (findContact) {
    return toast.error(`${newContact.name} уже присутствует в контактах`);
  }

  dispatch(addContact(newContact));
};

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        <span className={css.name}>Name</span>
        <input
          type="text"
          name="name"
          placeholder="enter name here"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChangeName}
          required
        />
      </label>

      <label className={css.label}>
        <span className={css.number}>Number</span>
        <input
          type="tel"
          name="number"
          placeholder="enter number here"
          pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChangeNumber}
          required
        />
      </label>
      <button className={css.button} type="submit">Add contact</button>
      <ToastContainer />
    </form>
  );
};


export default AddForm;
