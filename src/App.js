import './App.css';
import { Routes, Route } from 'react-router-dom'
import {Navbar} from 'components';
import Coins from "./components/Coins";
import styled from 'styled-components';
import axios from 'axios'

const Container = styled.div`
  width: 960px;
  background: black;
  height: 90vh;
  margin: 10px auto;
  border-radius: 10px;
`

function App() {
  return (
    <Container>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Coins />} />
      </Routes>
    </Container>
  );
}

export default App;
