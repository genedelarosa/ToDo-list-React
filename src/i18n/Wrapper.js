import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import English from './lang/en.json';
import Español from './lang/es.json';

export const Context = React.createContext();

const local = navigator.language;

let lang;
if (local === 'es') {
    lang = Español;
}   else {
        lang = English;
}


const Wrapper = (props) => {
    const [locale] = useState(local);

    const [messages, setMessages] = useState(lang);

    function selectLanguage(locale) {
        if (locale=== 'es') {
            setMessages(Español);
        } else {
            setMessages(English);
        }
    }

    return (
        <Context.Provider value = {{locale, selectLanguage}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>

    );
}


export default Wrapper;