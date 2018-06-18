import React, {Component} from 'react';
import {connect} from 'react-redux';

const style = {
    formStyle: {
        width: '75%',
        height: '100hv',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    otherForm: {
        border: '1px solid black',

    }
}

class Form extends Component {

    componentDidMount() {
        this.props.onListChange(this.props.match.params.listId)
    }

    render () {
        const {listId} = this.props.match.params;
        return (
            <form style={style.formStyle}>
                <div style={style.otherForm}>
                    <div>
                        <label>Name: <input type="text" name="name"/></label><br></br>
                        <label>Email: <input type="email" name="email"/></label><br></br>
                        <label>Phone: <input type="number/text" name="phone"/></label><br></br>
                    </div>
                    <div>
                        <input type='button' value='Update'/>
                        <input type='button' value='Delete'/>
                        <input type='button' value='Add'/>
                    </div>        
                </div>    
            </form>    
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onListChange: () => dispatch({type: 'CHANGE_LIST', id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);