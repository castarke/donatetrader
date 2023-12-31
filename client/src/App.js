import React, { useState, useEffect } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import AccountInfo from './pages/Account';
import AddItem from './pages/AddItem'
import { setContext } from '@apollo/client/link/context';
import Gallery from './components/Gallery';
import { Contact } from './pages/Contact'
import UpdateItemForm from './pages/MyAccountPages/UpdateItem';
import Search from './pages/Search';
import Donations from './pages/Donations'
import Login from './components/Login';
import Signup from './components/Signup';
import ItemPage from './pages/ItemPage'
import AuthService, { Auth, AuthProvider } from './utils/auth';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Contributions from './pages/Contributions'
import ThankYou from './pages/ThankYou'

const httpLink = createHttpLink({
  uri: 'https://donatetrader-6968094a5822.herokuapp.com/graphql'
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
  const [isLoggedIn, setIsLoggedIn] = useState(AuthService.loggedIn());

  useEffect(() => {
    setIsLoggedIn(AuthService.loggedIn());
  }, []);

  return (
    <ApolloProvider client={client}>
      <Router>
        {isLoggedIn && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/account" element={<AccountInfo />} />
          <Route path="/additem/:ownerId" element={<AddItem />} />
          <Route path="/updateitem/:itemId" element={<UpdateItemForm />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/item/:itemId" element={<ItemPage />} />
          <Route path="/search/:searchCriteria" element={<Search />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/contributions" element={<Contributions />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;