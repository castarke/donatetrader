import React from 'react';
import SearchCriteria from '../components/SearchCriteria';
import Items from '../components/Items';
import RecentTrades from '../components/RecentTrades';

export default function Home() {
    return (
        <div>
            <div>
                <SearchCriteria />
            </div>
            <div>
                <Items />
            </div>
            <div>
                <RecentTrades />
            </div>
        </div>

    )
};