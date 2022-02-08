import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Navbar} from 'components';
import {Home, Coin} from 'pages';
// import {Coin} from 'pages';
import styled from 'styled-components';

const Container = styled.div`
  width: 960px;
  background: #1f1f1f;
  margin: 10px auto;
  border-radius: 10px;
`

function App() {
  return (
   <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/:coin" component={Coin} />
        </Switch>
      </Container>
   </Router>
  );
}

export default App;
