import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';

const ContactList = () => {
    const contacts = useSelector((state) => state.contacts);

    return (
    <div>
        <h2>Lista de Contatos</h2>
        {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
    ))}
    </div>
);
};

export default ContactList;