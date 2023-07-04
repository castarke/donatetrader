import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache,createHttpLink} from '@apollo/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';
import {setContext} from '@apollo/client/link/context';


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
                <>
                <div>
                    <Header />
                </div>
                <div>
                    {/* <Home /> */}
                </div>
                </>
            </Router>
        </ApolloProvider>
    );
};

export default App;