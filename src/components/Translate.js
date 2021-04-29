import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options =[
    {
        label: 'German',
        value: 'de'
    },
    {
        label: 'Spanish',
        value: 'es'
    },
    {
        label: 'Russian',
        value: 'ru'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text" />
                </div>
            </div>
            <Dropdown 
            label="Select a Language" 
            selected={language} 
            onSelectedChange={setLanguage} 
            options={options} 
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    );
};

export default Translate;