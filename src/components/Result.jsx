import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div`
    color: #fff;
    border-radius: 5px;
    padding: 1rem;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;
    `;

const Image = styled.img`
    width: 120px;
    margin-right: 20px;
    display:block;
    `;

const Text = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    };
    `;

const Price = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    };       
    `;


export const Result = ({ result }) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result;

    return (
        <Container>
            <Image src={`https://www.cryptocompare.com${IMAGEURL}`} alt='crypto image' />
            <div>
                <Price>El precio es: <span>{PRICE}</span></Price>
                <Text>Precio mas alto del dia: <span>{HIGHDAY}</span></Text>
                <Text>Precio mas bajo del dia: <span>{LOWDAY}</span></Text>
                <Text>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Text>
                <Text>Ultima actualizacion: <span>{LASTUPDATE}</span></Text>
            </div>
        </Container>
    );
};

Result.propTypes = {
    result: PropTypes.object.isRequired,
};