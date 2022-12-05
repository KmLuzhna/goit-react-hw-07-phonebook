import { ButtonDelete, ContactEl, NewContactsList } from './ContactList.styled';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getContacts } from '../../redux/selector';
import { deleteContact } from "redux/operations"


export default function ContactList(task) {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const visibleContacts = () => {
        if (!filter) {
            return contacts;
        }
        
        return contacts.filter(({name}) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    }

    const getVisibleContacts = visibleContacts()
    
    return (
        <NewContactsList>
            {getVisibleContacts.map((item) =>(
                <ContactEl key={item.id}>
                    <p>
                        {item.name}: {item.number}
                    </p>
                    <ButtonDelete
                        type="button"
                        onClick={() => dispatch(deleteContact(item.id))}
                    >Delete
                    </ButtonDelete>
                </ContactEl>
            ))}
        </NewContactsList>
    );
}
