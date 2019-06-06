export const initialState = {
    message: '',
    inc: {}
};

const loginReducer = (state = initialState, action) => {

    switch (action.type){


        case 'UPDATE_DATA':
            return{
                ...state,
                updatedData: action.updatedData
            };

        case 'SET':
            return{
                ...state,
                message: 'set message',
                users: action.users
            };

        case 'SET_USER_NAME':
            return{
                ...state,
                userName: action.userName
            };

        default:
            return state;
    }
};

export default loginReducer;