import React from 'react';

const style = {
    headerStyle: {
        padding: 10,
        display: 'flex',
        fontSize: '75px',
        fontColor: 'gray',
        border: '1px solid black',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    }
};

const header = () => <div style={style.headerStyle}>Contacts</div>

export default header;