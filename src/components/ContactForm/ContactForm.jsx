import { ButtonAdd, Form, InputForm, Label } from "./ContactForm.styled";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "redux/contactsSlice";
import { useSelector } from 'react-redux';
import {  getContacts } from '../../redux/selector';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = (event) => {
    const { name, value } = event.target;

        switch (name) {
        case 'name':
            setName(value);
        break;

        case 'number':
            setNumber(value);
        break;

        default:
            return;
    }
    };

    const addContactToList = (name, number) => {
        if (
        contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase(),
        )
        ) {
          alert(`${name} is already in contacts.`);
        } else if (contacts.find(contact => contact.number === number)) {
        alert(`${number} is already in contacts.`);
        } else if (name.trim() === '' || number.trim() === '') {
       alert("Enter the contact's name and number phone!");
        } else {
        dispatch(addTask({name, number}))
    }
    }

    const handleSubmit = (event) => {
    event.preventDefault();

    addContactToList(name, number);

    setName("");
    setNumber("");
    };

  return (
<Form onSubmit={handleSubmit}>
    <Label >              
         Name
               <InputForm
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </Label>
        <Label>
                Number
                <InputForm
                    type="tel"
                    placeholder="Enter number"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </Label>
            <ButtonAdd type="submit">
                Add contact
            </ButtonAdd>
        </Form>
  );
};