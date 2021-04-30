import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

const showAccordion = () => {
    if (window.location.pathname === '/')
    return (
        <div> <Accordion items={items} /></div>
    );
};

export default () => {
    const [selected,setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path="/">Blank Text</Route>
            <Route path="/accordion">
            <Accordion items={items} />
            </Route>
            <Route path="/wiki">
            <Search />
            </Route>
            <Route path="/dropdown">
            <Dropdown 
            label="Select Color"
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
            />
            </Route>
            <Route path="/translate">
            <Translate />
            </Route>
        </div>
    );
};

