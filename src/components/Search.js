import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [search, setSearch ] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const wikisearch = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: search,
                },
            });
            setResults(data.query.search);
        };

        if(search) {
            wikisearch();
        }
    
    }, [search]);

    const renderedResults = results.map((results) => {
        return (
            <div className="item" key={results.pageid}>
                <div className="right floated contnet">
                    <a className="ui button" 
                    href={`https://en.wikipedia.org?curid=${results.pageid}`}
                    >Read More</a>
                </div>
                <div className="content">
                    <div className="header">
                        {results.title}
                    </div>
                    <div className="content">
                        <p dangerouslySetInnerHTML={{__html: results.snippet}}></p>
                    </div>
                </div>
            </div>
        );
    });

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
            <div className="ui celled list">
            {renderedResults}
            </div>
        </div>
    );
};

export default Search;