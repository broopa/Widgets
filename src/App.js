import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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
    const [selected, setSelected] = useState(options[0]); 
    const [showDropdown, setShowDropdown] = useState(true);


    return (
        <div>
         {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button> */}
            {showDropdown ? 
                <Dropdown
            selected={selected}
            onSelectedChange={setSelected}
            options={options} /> : null }
        </div>
    );
};

