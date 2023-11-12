import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

import { Error } from './';
import { useSelectCoins } from '../hooks';
import { coins } from '../data/coins';

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    transition: background-color .3s ease;
    border-radius: 5px;
    margin-top: 30px;
   

    &:hover {
        background-color: #6e7aff;
        cursor: pointer;
    }
`;

export const Form = ({ setCoins }) => {

    const [cryptos, setCryptos] = useState([]);
    const [error, setError] = useState(false);

    const [coin, SelectCoins] = useSelectCoins({ label: 'Elige tu Moneda', options: coins });
    const [crypto, SelectCryptos] = useSelectCoins({ label: 'Elige tu Criptomoneda', options: cryptos });

    useEffect(() => {
        const consultAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const response = await fetch(url);
            const result = await response.json();
            // console.log(result.Data);

            const arrayCryptos = result.Data.map(
                ({ CoinInfo }) => {
                    const object = {
                        id: CoinInfo.Name,
                        name: CoinInfo.FullName,
                    }

                    return object;
                });
            setCryptos(arrayCryptos);
        };
        consultAPI();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (coin.trim() === '' || crypto.trim() === '') {
            setError(true);
            return;
        }

        setError(false);
        setCoins({ coin, crypto });
    };

    return (
        <>
            {error && <Error>Todos los campos son obligatorio</Error>}
            <form
                onClick={handleSubmit}
            >
                <SelectCoins />
                <SelectCryptos />

                <InputSubmit
                    type='submit'
                    value='Cotizar'
                />
            </form>
        </>
    );
};

Form.propTypes = {
    setCoins: PropTypes.func.isRequired,
};