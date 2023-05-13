import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/actions';

const Wrapper = styled.div`
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
`;

const Input = styled
