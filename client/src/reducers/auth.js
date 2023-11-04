const authReducer = (state = {data: null}, actions) => {
    switch (actions.type) {
        case 'AUTH':
            ///?. - optional operator
            //JSON.stringify - convert json to string
            //store data in localstorage of the browser
            localStorage.setItem('Profile', JSON.stringify({...actions?.data}))
            return {...state, data: actions?.data }; 
            case 'LOGOUT':
                localStorage.clear();
                return { ...state, data: null };
        default:
            return state;
    }
}

export default authReducer