import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import css from './ContactList.module.css'


export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const contactSearch = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );
  console.log(contactSearch)

  return (
    <ul className={css.list}>
      {contactSearch.map(a => {
        return (
          <li key={a.id}>
            <ContactItem
              name={a.name}
              number={String(a.number)}
              itemKey={a.id}
            />
          </li>
        );
      })}
    </ul>
  );
};


