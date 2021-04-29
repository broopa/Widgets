import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({language, text}) => {
    const[translate, setTranslated] = useState('');
    const [debounceText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);
        return () => {
            clearTimeout(timerId);
        }
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debounceText,
                    target: language.value,
                    key: 'API KEY HERE'
                },
            }); 
            setTranslated(data.data.translations[0].translatedText)
        };   

        doTranslation();  

    }, [language, setDebouncedText]);
    return(
        <div>
            <h1 className="ui header">{translate}</h1>
        </div>
    );
};

export default Convert;