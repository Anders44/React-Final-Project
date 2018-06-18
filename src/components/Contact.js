import React from 'react';
import { connect} from 'react-redux';
import {Link} from 'react-router-dom';

const style = {
    styleContact: {
        border: "1px solid black",
        padding: 10
    }
}

const contact_person = props => {
    const list = props.myList.map(item => {
        return (
            <Link to={`${item.id}`} key={item.id} style={{textDecoration: 'none'}}>
                <div style={style.styleContact}>
                    <p><span>Name: </span>{item.name}</p>
                    <p><span>Email: </span>{item.email}</p>
                    <p><span>Phone: </span>{item.phone}</p>
                </div>
            </Link>    
        );
    });
    return <div>{list}</div>
}

const mapStateToProps = state => {
    return {
        myList: state.list
    }
}

export default connect(mapStateToProps, null)(contact_person);

