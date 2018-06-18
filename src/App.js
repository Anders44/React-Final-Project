import React from "react";
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import Form from './components/Form'
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
                    <Switch>
                        <Route path='./:listId' component={Form} />
                        <Redirect from='/' to='/1'/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>    
    );
}

export default app;