import React from 'react'
import styled from 'styled-components';
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';





const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 20px 100px;
    margin-bottom: 30px;
`;

const Buttons = styled.div`
    display: flex;

`

const Button = styled.button`
    background: black;
    width: 150px;
    height: 35px;
    border-radius: 5px;
    color: white;
    border: none;
    font-weight: 900;
    cursor: pointer;
`;

const Forms = styled.div`
    display: flex;
    color: white;
    justify-content: space-between;
`



const Navbar = () => {
    return (
        <Nav>
            <Buttons>
                <Button className="active">Coins</Button>
               <Button>Portfolio</Button>
            </Buttons>
            <Forms>
                <div className="search">
                     <SearchIcon />
                    <input type="text" placeholder="search" name="search"/>
                </div>
                <select select="select">
                    <option value="usd">USD</option>
                    <option value="euro">Euro</option>
                </select>
            </Forms>
        </Nav>
    )
}

export default Navbar
