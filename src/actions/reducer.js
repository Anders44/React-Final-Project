const initialState = {
    list: [
        {
            id: 1,
            name: 'Mom',
            email: 'mom@gmail.com',
            phone: '307-343-3434',
        },
        {
            id: 2,
            name: 'Madison',
            email: 'mad@gmail.com',
            phone: '307-343-3434',
        },
        {
            id: 3,
            name: 'Dad',
            email: 'dad@gmail.com',
            phone: '307-343-3434',
        }

    ],
    name: '',
    email: '',
    phone: ''

}       

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'CHANGE_LIST':

        const listItem = state.list.filter(item => item.id === parseInt(action.id, 10));
        return {
            ...state
        }
    }


    return state;
}

export default reducer;