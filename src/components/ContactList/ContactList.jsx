import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import css from './ContactList.module.css'
import { deleteContact } from '../../redux/contactsOperations';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const contactSearch = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {contactSearch.map(a => {
        return (
          <li key={a.id}>
            <ContactItem
              name={a.name}
              number={String(a.phone)}
              itemKey={a.id}
              deleteContact={handleDeleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};
