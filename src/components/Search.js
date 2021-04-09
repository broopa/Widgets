import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [search, setSearch ] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        (async () =>  
         { const { data } = { await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
                action:'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: search,
            }
        });
    })();

    setResults(data.query.search);

    }};, [search]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <input 
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="input" placeholder="Enter Search Term" />
                </div>
            </div>
        </div>
    );
}

export default Search;