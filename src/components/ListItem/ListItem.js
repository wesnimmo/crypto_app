import React from 'react'
import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-weight: 700;
    padding: 10px 25px;
    font-size: .85em;
`

const ImageSymbol = styled.div`
    display: flex;
    align-items: center;
`

const Image = styled.img`
    height: 30px;
    margin-right: 8px;
    width: 30px;
`

const ListItem = (props) => {
    return (
        <Row>
            <p>{props.coin.market_cap_rank}</p>
             <ImageSymbol className='img-symbol'>
                <Image src={props.coin.image} alt='' />
                <p>{props.coin.id}</p>
                <p>({props.coin.symbol.toUpperCase()})</p>
            </ImageSymbol>
            
            <p>{props.coin.current_price}</p>
            <p>{props.coin.high_24h}</p>
            <p>{props.coin.market_cap_change_24h}</p>
            <p>{props.coin.circulating_supply}</p>
        </Row>
    )
}

export default ListItem