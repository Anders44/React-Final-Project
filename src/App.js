import React from "react";
import { BrowserRouter} from 'react-router-dom';

import ContactList from './components/ContactList';
import Header from './components/Header';

const style = {
    contactStyle: {
        display: 'flex',
        height: '100vh'
    }
}

const app = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <div style={style.contactStyle}>
                    <ContactList />
                </div>
            </div>
        </BrowserRouter>    
    );
}

export default app;