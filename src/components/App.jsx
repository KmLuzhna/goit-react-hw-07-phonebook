// import { Component } from 'react';
// import { useState, useEffect } from 'react';
// import { nanoid } from "nanoid";
import {ContactForm} from './ContactForm/ContactForm';
import {Filter} from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Wrapper } from './ContactForm/Base.styled';

export const App = () => {
 return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
          <ContactList />
      </Wrapper>
    );

};