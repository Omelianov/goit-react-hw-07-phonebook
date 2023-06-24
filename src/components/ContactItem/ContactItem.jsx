import css from './ContactItem.module.css'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOperations'


export const ContactItem = ({ name, number, itemKey }) => {
    const dispatch = useDispatch();

    const deleteContactHandler = () => {
        dispatch(deleteContact(itemKey))
    };
    
    return (
    <>
    <p key={itemKey}>{name}: {number}</p>
    <button className={css.button} onClick={deleteContactHandler}>Delete</button>
    </>
)
}

