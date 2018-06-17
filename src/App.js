import React from "react";
import { BrowserRouter} from 'react-router-dom';

import ContactList from './components/ContactList';
import Header from './components/Header';

const app = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <ContactList />
            </div>
        </BrowserRouter>    
    );
}

export default app;