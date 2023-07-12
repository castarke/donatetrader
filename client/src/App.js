import React, { useState } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import AccountInfo from './pages/Account';
import AddItem from './pages/AddItem'
import { setContext } from '@apollo/client/link/context';
import SearchCriteria from './components/SearchCriteria';
import Gallery from './components/Gallery';
import RecentTrades from './components/RecentTrades';
import { Contact } from './pages/Contact'
import UpdateItemForm from './pages/MyAccountPages/UpdateItem';
import Search from './pages/Search';
import Login from './components/Login';
import Signup from './components/Signup';
import ItemPage from './pages/ItemPage'
import Auth from './utils/auth';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());

  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
        {/* <Link to="/login">LogIn</Link>
      <Link to="/signup">SignUp</Link>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch> */}
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/account" element={<AccountInfo />} /> 
          <Switch>
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
          </Switch>
          <Route path ="/contact" element={<Contact />} />
          <Route path ="/item/:itemId" element={<ItemPage />} />
          <Route path="/additem/:ownerId" element={<AddItem />} />
          <Route path="/updateitem/:itemId" element={<UpdateItemForm />} />
          <Route path="/search/:searchCriteria" element={<Search />} />
        </Routes>
        {/* <SearchCriteria /> */}
        {/* <RecentTrades /> */}
      </Router>
    </ApolloProvider>
  );
};

export default App;
