import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useState } from 'react';

const Label = styled.label`
    color: #fff;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
    text-transform: uppercase;
    display:block;
`;

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
    display: block;
    border: none;
`;


export const useSelectCoins = ({ label, options }) => {

    const [state, setState] = useState('');

    const SelectCoins = () => (
        <>
            <Label htmlFor=''>{label}</Label>
            <Select
                value={state}
                onChange={e => setState(e.target.value)}
                name='coin'
                id='coin'
            >
                <option value=''>- Seleccione -</option>
                {
                    options.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.name}
                        </option>
                    ))
                }
            </Select>
        </>
    );

    return [state, SelectCoins];
};


useSelectCoins.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
};