import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache,createHttpLink} from '@apollo/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Navigation from './components/Navbar';
import './App.css';
import Navbar from "./components/Navbar";
import Header from './components/Header';
import Home from './pages/Home';
import {setContext} from '@apollo/client/link/context';
import SearchCriteria from './components/SearchCriteria';
import Gallery from './components/Gallery';
import RecentTrades from './components/RecentTrades';


const httpLink = createHttpLink({
    uri:'/graphql'
});

const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}`:'',
        },
    };
});

const client = new ApolloClient({
    uri:'/graphql',
    cache: new InMemoryCache(),
    authLink: authLink.concat(httpLink),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Navbar />
                    {/* <Switch>
                        <Route exact path="/Home" pages={Home} />
                        <Route path="/About" component={About} />
                        // <Route path="/Contact" component={Contact} />
                        <Route path="/faq" component={Faq} />
                    </Switch> */}
                <div className="app-container">
                    <div className="container">
                        <SearchCriteria />
                    </div>
                    <div className="container">
                        <Gallery />
                    </div>
                    <div className="container">
                        <RecentTrades />
                    </div>
                </div>
            </Router>
        </ApolloProvider>
  );
};

export default App;