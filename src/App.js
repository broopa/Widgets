import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items =[
    {
        title:'Title Area One',
        content: 'Yes, there is content here.'
    },
    {
        title:'Title Area Two',
        content: 'Content displays here.'
    },
    {
        title:'Title Area Three',
        content: 'Body copy here please.'
    },
];


export default () => {
    return (
        <div>
            <Search />
        </div>
    );
};

