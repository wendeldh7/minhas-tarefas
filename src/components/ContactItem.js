import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeContact } from '../redux/actions';

const Wrapper = styled.div`
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
`;

const Name = styled.h3`
    margin-top: 0;
`;

const Email = styled.p``;

const Phone = styled.p``;

const Button = styled.button`
    background-color: #f44336;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;

    &:hover {
    background-color: #d32f2f;
}
`;

const ContactItem = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
    dispatch(removeContact(contact.id));
};

    return (
    <Wrapper>
        <Name>{contact.name}</Name>
        <Email>{contact.email}</Email>
        <Phone>{contact.phone}</Phone>
        <Button onClick={handleDeleteClick}>Remover</Button>
    </Wrapper>
);
};

ContactItem.propTypes = {
    contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
}).isRequired,
};

export default ContactItem;
