export const initialState = {
    message: '',
    inc: {}
};

const testReducer = (state = initialState, action) => {

    switch (action.type){

        case 'err':
            return{
                ...state,
                message: 'err'
            };
        case 'INC':
            return{
                ...state,
                inc: 1
            };
        case 'SET':
            return{
                ...state,
                message: 'set message',
                users: action.users
            };
        case 'UPDATE_DATA':
            return{
                ...state,
                updatedData: action.updatedData
            };

        default:
            return state;
    }
};

export default testReducer;