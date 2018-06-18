import React from 'react';

import Contact from './Contact';

const style = {
    contactStyle: {
        width: '25%',
        backgroundColor: 'lightgray',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        padding: '10px',

    }
}

const contactList = () => <div style={style.contactStyle}><Contact /></div>;

export default contactList;