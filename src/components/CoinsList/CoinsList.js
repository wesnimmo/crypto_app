import axios from 'axios'
import { green } from '@mui/material/colors';
import React from 'react'
import styled from 'styled-components';
import {ListItem} from 'components';
import {Coin} from 'pages';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Titles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-weight: 700;
    padding: 10px 25px;
`


class CoinsList extends React.Component {

    state = {
        coins: [],
        isLoading: false
    }

    getCoins = async () => {
        try {
            this.setState({isLoading: true});
            const {data} = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false');

            const coins = data;
            this.setState({coins, isLoading: false})

            console.log(this.state.coins)
        } catch (err) {
          console.log(err)
        }
    }

    componentDidMount() {
        this.getCoins()
    }

    render() {
        return (
           <>
             <Titles>
                <p>#</p>
                <p>Name</p>
                <p>Price</p>
                {/* <p>1h%</p> */}
                <p>24h%</p>
                {/* <p>7d%</p> */}
                <p>24h Volume/Market Cap</p>
                <p>Circulating/Total Supply</p>
                {/* <p>Last 7d</p> */}
            </Titles>
            {
                this.state.coins.map((coin) => {
                    return (
                    <Link to={`${coin.id}`} component={Coin}>
                         <ListItem coin={coin} key={coin.id} />
                    </Link>
                    )
                })
            }
           </>
        )
    }
}

export default CoinsList
