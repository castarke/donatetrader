import React , {useState} from 'react';
import Navigation from './Navbar';
import Account from '../pages/Account';
import Donations from '../pages/Donations';
import Home from '../pages/Home';
import Items from '../pages/Items';

function Header() {
    const [currentPage, handlePageChange] = useState('Home');

    const renderPage = () => {
        switch (currentPage) {
            case 'Home':
                return <Home />;
            case 'Items':
                return <Items />;
            case 'Donations':
                return <Donations />
            case 'Account':
                return <Account /> 
            
            default:
                return <Home />
        }
    };

   return (
    <div>
        <div>
            <img src='donatetrader/client/public/photos/7838f228313e495da3ef4f9a6e71c5dd.png'/>
        </div> 
        <Navigation 
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        />
        <main>
            <div>{renderPage(currentPage)}</div>
        </main>   
    </div>
   ) 
}

export default Header;