import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from './components/Header';
import Home from './pages/Home';
import AccountInfo from './pages/Account'; // Import the AccountInfo component
import { setContext } from '@apollo/client/link/context';
import SearchCriteria from './components/SearchCriteria';
import Gallery from './components/Gallery';
import RecentTrades from './components/RecentTrades';
import { Contact } from './pages/Contact'
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'
});

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
  // authLink: authLink.concat(httpLink),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/account" element={<AccountInfo />} /> 
          <Route path ="/contact" element={<Contact />}/>
        </Routes>
        {/* <SearchCriteria /> */}
        {/* <Gallery /> */}
        {/* <RecentTrades /> */}
      </Router>
    </ApolloProvider>
  );
};

export default App;
