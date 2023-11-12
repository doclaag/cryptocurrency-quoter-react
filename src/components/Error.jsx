import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Div = styled.div`
    background-color: #f44336;
    color: #fff;
    padding: 1rem;
    text-align: center;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
    margin-bottom: 1rem;  
    `;

export const Error = ({ children }) => {
    return (
        <Div>
            {children}
        </Div>
    );
};

Error.propTypes = {
    children: PropTypes.node.isRequired,
};