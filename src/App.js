import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const options = [
    { 
        label: 'Color Red',
        value: 'red'
    },
    {
        label: 'Color Blue',
        value: 'blue'
    },
    {
        label: 'Color Green',
        value: 'green'
    }
];


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
            <Translate />
        </div>
    );
};

